import { isClient } from '../helper/react-helper';
import nookies, { destroyCookie, parseCookies, setCookie } from 'nookies'
import { NextApiRequest, NextApiResponse, NextPageContext } from 'next';
import axios, { AxiosPromise } from 'axios';
import { AxiosResponse } from 'axios';
import { BaseResponse } from '../model/models';
import networkService from './network/network.service';

export const MAX_RETRY = 3;

const BATTISTI_JWT_COOKIE_NAME = "battistiJwt";

const getBattistiJwtCookieOpts = (jwt?: string) => {
  return [
    BATTISTI_JWT_COOKIE_NAME,
    jwt,
    {
      maxAge: 30 * 60,
      path: "/"
    }
  ]
} 

export const getBattistiJwt = (ctx: NextPageContext|undefined) : string|undefined => {
  let cookies;
  if (isClient()){
    cookies = parseCookies();
  }else{
    cookies = nookies.get(ctx);
  }
  return cookies[BATTISTI_JWT_COOKIE_NAME];
}

export const setBattistiJwt = (ctx: NextPageContext|undefined, jwt:string) => {
  const opts = getBattistiJwtCookieOpts(jwt);
  if (isClient()){
    (setCookie as any)(null, ...opts);
  }else{
    (nookies.set as any)(ctx, ...opts);
  }
}

export const destroyBattistiJwt = (ctx: NextPageContext|undefined) => {
  const opts = getBattistiJwtCookieOpts();
  if (isClient()){
    (destroyCookie as any)(null, ...opts);
  }else{
    //(nookies.destroy as any)(ctx, ...opts);
    console.debug("desssssss");
    nookies.destroy(ctx , BATTISTI_JWT_COOKIE_NAME, {path: "/"});
  }
}

export const withBattistiJwt = <T>(networkServiceFunc:(...props: any[]) => AxiosPromise<BaseResponse<T>>) => {
  console.debug("withBattistiJwt")
  return async (ctx?:NextPageContext, ...props: any[]) => {
    // const token = getBattistiJwt(ctx) // Add logic to extract token from `req.headers.cookie`
    // console.log("requireAuthentication " + token);
    // if (!isClient() && !ctx) {
    //   throw new Error("It's not possible to set cookies on server side without a context");
    // }

    let result: AxiosResponse<BaseResponse<T>>;
    let retry = 1;
    let isNotAuthorized = false;
    do {
      let jwt = getBattistiJwt(ctx);
      console.debug("jwwwwww " + jwt);
      if (!jwt){
        console.debug("login");
        jwt = (await networkService.loginToBattisti()).data.data?.login.accessToken;
        if (!jwt) {
          throw new Error("Cannot login to Keadex Battisti.")
        }
        setBattistiJwt(ctx, jwt);
      }
      console.debug(`jwt: ${jwt}`);
      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

      // Continue on to call network service function
      result = await (networkServiceFunc)(...props);

      isNotAuthorized = (result.status === 200 && result.data && result.data.errors
        && result.data.errors[0].extensions.response.statusCode === 401);
      
      // Delete token cookie, so it can be refreshed
      if (isNotAuthorized){
        console.debug("is not authorized");
        destroyBattistiJwt(ctx);
        console.debug(getBattistiJwt(ctx));
      }

      retry++;
    } while (retry <= MAX_RETRY && isNotAuthorized)

    delete axios.defaults.headers.common["Authorization"];

    if (isNotAuthorized){
      //throw new Error("401 Unauthorized. Reached max attempts, cannot continue.");
    }

    return result;
  }
}