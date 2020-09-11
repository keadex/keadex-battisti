import {BaseResponse} from '../../model/models';
import axios, { AxiosPromise } from 'axios';
import { Quote, Experience, ForceGraph } from '../../model/models';
import { print } from 'graphql';
import { EXPERIENCES_QUERY, EXPERIENCE_GRAPH_QUERY } from './graphql-queries/experience';
import { QUOTES_QUERY } from './graphql-queries/quote';


//API ENDPOINTS
export const API_ENDPOINT : string = process.env.NEXT_PUBLIC_API_ENDPOINT!;
export const GET_QUOTES_API : string = process.env.NEXT_PUBLIC_BASE_URL! + process.env.NEXT_PUBLIC_GET_QUOTES_API!;
export const GET_EXPERIENCE_API : string = process.env.NEXT_PUBLIC_BASE_URL! + process.env.NEXT_PUBLIC_GET_EXPERIENCE_API!;
export const GET_EXPERIENCE_GRAPH_API : string = process.env.NEXT_PUBLIC_BASE_URL! + process.env.NEXT_PUBLIC_GET_EXPERIENCE_GRAPH_API!;


class NetworkService {

  //------- ATTRS
  static _instance : NetworkService;


  //------ FUNCS

  //--------- getInstance
  static getInstance = () : NetworkService => {
    if (NetworkService._instance == null){
      NetworkService._instance = new NetworkService();
    }
    return NetworkService._instance;
  }


  //--------- constructor
  constructor(){
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


  /**
   * @deprecated Temporary getQuotes function based on a REST API.
   * This will be replaced by getQuotes which will be based on 
   * GraphQL and it will be available when Keadex Einaudi (the backend)
   * will be delivered.
   */
  __tmp_getQuotes = () : AxiosPromise<BaseResponse<Quote[]>> => {
    return axios.get<BaseResponse<Quote[]>>(GET_QUOTES_API);
  }
    
    //--------- getQuotes
  getQuotes = () : AxiosPromise<BaseResponse<Quote[]>> => {
    return axios.post<BaseResponse<Quote[]>>(API_ENDPOINT, {
      query: print(QUOTES_QUERY)
    })
  }


  /**
   * @deprecated Temporary getExperiences function based on a REST API.
   * This will be replaced by getExperiences which will be based on 
   * GraphQL and it will be available when Keadex Einaudi (the backend)
   * will be delivered.
   */
  __tmp_getExperiences = () : AxiosPromise<BaseResponse<Experience[]>> => {
    return axios.get<BaseResponse<Experience[]>>(GET_EXPERIENCE_API);
  }

  //--------- getExperiences
  getExperiences = () : AxiosPromise<BaseResponse<Experience[]>> => {
    return axios.post<BaseResponse<Experience[]>>(API_ENDPOINT, {
      query: print(EXPERIENCES_QUERY)
    })
  }


  /**
   * @deprecated Temporary getExperienceGraph function based on a REST API.
   * This will be replaced by getExperienceGraph which will be based on 
   * GraphQL and it will be available when Keadex Einaudi (the backend)
   * will be delivered.
   */
  __tmp_getExperienceGraph = () : AxiosPromise<BaseResponse<ForceGraph.Graph>> => {
    return axios.get<BaseResponse<ForceGraph.Graph>>(GET_EXPERIENCE_GRAPH_API);
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
      if(window.navigator.msSaveOrOpenBlob) {
        //IE11 compatibility
        let blobObject = new Blob([response.data]);
        window.navigator.msSaveOrOpenBlob(blobObject, fileName);
      } else {
        //Other Browsers
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
      }
    });
  }
}

export default NetworkService;