import { isClient } from '../helper/react-helper';
import nookies, { parseCookies, setCookie } from 'nookies'
import { NextApiRequest, NextApiResponse, NextPageContext } from 'next';
import axios from 'axios';

const BATTISTI_JWT_COOKIE_NAME = "battistiJwt";

export const getBattistiJwt = (ctx: Pick<NextPageContext, 'req'> | {
  req: NextApiRequest;
}|undefined) : string|undefined => {
  let cookies;
  if (isClient()){
    cookies = parseCookies();
  }else{
    cookies = nookies.get(ctx);
  }
  return cookies[BATTISTI_JWT_COOKIE_NAME];
}

export const setBattistiJwt = (ctx: Pick<NextPageContext, 'res'> | {
  res: NextApiResponse;
}|undefined, jwt:string) => {
  const opts = [
    BATTISTI_JWT_COOKIE_NAME,
    jwt,
    {
      maxAge: 30 * 60,
      path: "/"
    }
  ]
  if (isClient()){
    (setCookie as any)(null, ...opts);
  }else{
    (nookies.set as any)(ctx, ...opts);
  }
}

export const withBattistiJwt = (networkServiceFunc:any) => {
  console.debug("withBattistiJwt")
  return async (ctx?:NextPageContext, ...props: any[]) => {
    // const token = getBattistiJwt(ctx) // Add logic to extract token from `req.headers.cookie`
    // console.log("requireAuthentication " + token);
    if (!isClient() && !ctx) {
      //throw new Error("It's not possible to set cookies on server side without a context");
    }
    let jwt = getBattistiJwt(ctx);
    if (!jwt){
      jwt = "test";
      console.debug("login");
      setBattistiJwt(ctx, jwt);
    }
    console.debug(`jwt: ${jwt}`);
    axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

    // Continue on to call network service function
    const result = await networkServiceFunc(...props);

    delete axios.defaults.headers.common["Authorization"];

    return result;
  }
}