import { BaseResponse, StrapiResponse, BattistiLogin } from '../../model/models';
import axios, { AxiosPromise, AxiosResponse } from 'axios';
import { Quote, Experience, ForceGraph } from '../../model/models';
import { print } from 'graphql/language';
import { EXPERIENCES_QUERY, EXPERIENCE_GRAPH_QUERY } from './graphql-queries/experience';
import { QUOTES_QUERY } from './graphql-queries/quote';
import { getStrapiMedia } from '../../helper/strapi-helper';
import { ArchitectureModuleType, Maybe, Page } from '../../model/autogenerated-graphql-strapi';
import { PAGES } from './graphql-queries/strapi/page';
import { GLOBAL } from './graphql-queries/strapi/global';
import { ARCHITECTURE_MODULES } from './graphql-queries/strapi/architecture-module';
import { withBattistiJwt } from '../auth';
import { BATTISTI_LOGIN_MUTATION } from './graphql-queries/auth';

//API ENDPOINTS
export const CDN_ENDPOINT : string = process.env.NEXT_PUBLIC_CDN_ENDPOINT;
export const API_ENDPOINT : string = process.env.NEXT_PUBLIC_API_ENDPOINT;
export const STRAPI_ENDPOINT: string = process.env.NEXT_PUBLIC_STRAPI_API_URL;
export const STRAPI_GRAPHQL_ENDPOINT: string = process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_API_URL;
export const GET_QUOTES_API : string = process.env.NEXT_PUBLIC_GET_QUOTES_API;
export const GET_EXPERIENCE_API : string = process.env.NEXT_PUBLIC_GET_EXPERIENCE_API;
export const GET_EXPERIENCE_GRAPH_API : string = process.env.NEXT_PUBLIC_GET_EXPERIENCE_GRAPH_API;



class NetworkService {

  //------- ATTRS
  static _instance : NetworkService;


  //------ FUNCS

  //--------- constructor
  constructor(){
    // Add a request interceptor   
    // // Add a request interceptor
    // axios.interceptors.request.use(function (config) {
    //   // console.log("request");
    //   // store.dispatch(activateSpinner());
    //   // if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    //   //   //DEV CODE
    //   //   //In dev we simulate backend calls by reading with a get request local json files
    //   //   config.method = "GET";
    //   // }
    //   return config;
    // }, function (error) {
    //   // console.log("request error");
    //   // store.dispatch(disableSpinner());
    //   return Promise.reject(error);
    // });

    // // Add a response interceptor
    // axios.interceptors.response.use(function (response) {
    //   // console.log("response");
    //   // store.dispatch(disableSpinner());
    //   return response;
    // }, function (error) {
    //   // console.log("response error");
    //   // store.dispatch(disableSpinner());
    //   return Promise.reject(error);
    // });
  }


  //--------- loginToBattisti
  loginToBattisti = () : AxiosPromise<BaseResponse<BattistiLogin>> => {
    return axios.post<BaseResponse<BattistiLogin>>(API_ENDPOINT, {
      query: print(BATTISTI_LOGIN_MUTATION)
    })
  }
    
  //--------- getQuotes
  getQuotes = withBattistiJwt(() : AxiosPromise<BaseResponse<Quote[]>> => {
    return axios.post<BaseResponse<Quote[]>>(API_ENDPOINT, {
      query: print(QUOTES_QUERY)
    })
  })


  //--------- getExperiences
  getExperiences = withBattistiJwt(() : AxiosPromise<BaseResponse<Experience[]>> => {
    return axios.post<BaseResponse<Experience[]>>(API_ENDPOINT, {
      query: print(EXPERIENCES_QUERY)
    })
  });


  /**
   * @deprecated Temporary getExperienceGraph function based on a REST API.
   * This will be replaced by getExperienceGraph which will be based on 
   * GraphQL and it will be available when Keadex Einaudi (the backend)
   * will be delivered.
   */
  __tmp_getExperienceGraph = () : AxiosPromise<BaseResponse<ForceGraph.Graph>> => {
    return axios.get<BaseResponse<ForceGraph.Graph>>(getStrapiMedia(GET_EXPERIENCE_GRAPH_API)!);
  }

  //--------- getExperienceGraph
  getExperienceGraph = () : AxiosPromise<BaseResponse<ForceGraph.Graph>> => {
    return axios.post<BaseResponse<ForceGraph.Graph>>(API_ENDPOINT, {
      query: print(EXPERIENCE_GRAPH_QUERY)
    })
  }


  //--------- downloadFile
  downloadFile = (urlFile:string, fileName: string) : void => {
    axios({
      url: urlFile,
      method: 'GET',
      responseType: 'blob', // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
    });
  }

  //--------- getStrapiPages
  getStrapiPages = () : AxiosPromise<StrapiResponse> => {
    return axios.post<StrapiResponse>(STRAPI_GRAPHQL_ENDPOINT, {
      query: print(PAGES(null, true))
    })
  }
  

  //--------- getStrapiPageData
  getStrapiPageData = async (slug:string, preview:boolean = false) : Promise<Maybe<Page>> => {
    const pagesData : AxiosResponse<StrapiResponse>
      = await axios.post<StrapiResponse>(STRAPI_GRAPHQL_ENDPOINT, {
        query: print(PAGES(slug, preview))
      });
    
    // Make sure we found something, otherwise return null
    if (pagesData.data == null || pagesData.data.data == null || pagesData.data.data.pages == null || pagesData.data.data.pages?.length === 0){
      return null;
    }

    // Return the first item since there should only be one result per slug
    return pagesData.data.data.pages[0];
  }


  //--------- getStrapiGlobalData
  // Get site data from Strapi (metadata, navbar, footer...)
  getStrapiGlobalData = () : AxiosPromise<StrapiResponse> => {
    return axios.post<StrapiResponse>(STRAPI_GRAPHQL_ENDPOINT, {
      query: print(GLOBAL)
    })
  }


  //--------- getArchitectureModules
  getArchitectureModules = (types:ArchitectureModuleType[]) : AxiosPromise<StrapiResponse> => {
    return axios.post<StrapiResponse>(STRAPI_GRAPHQL_ENDPOINT, {
      query: print(ARCHITECTURE_MODULES(types))
    })
  }
}

export default new NetworkService();