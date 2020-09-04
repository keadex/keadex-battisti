import BaseResponse from '../../model/base-response.type';
import axios, { AxiosPromise } from 'axios';
import { Quote, Experience, ForceGraph } from '../../model/models';

//API ENDPOINTS
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
    // Add a request interceptor
    axios.interceptors.request.use(function (config) {
      // console.log("request");
      // store.dispatch(activateSpinner());
      if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        //DEV CODE
        //In dev we simulate backend calls by reading with a get request local json files
        config.method = "GET";
      }
      return config;
    }, function (error) {
      // console.log("request error");
      // store.dispatch(disableSpinner());
      return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
      // console.log("response");
      // store.dispatch(disableSpinner());
      return response;
    }, function (error) {
      // console.log("response error");
      // store.dispatch(disableSpinner());
      return Promise.reject(error);
    });
  }


  //--------- getQuotes
  getQuotes = () : AxiosPromise<BaseResponse<Quote>> => {
    return axios.get<BaseResponse<Quote>>(GET_QUOTES_API);
  }


  //--------- getExperience
  getExperience = () : AxiosPromise<BaseResponse<Experience>> => {
    return axios.get<BaseResponse<Experience>>(GET_EXPERIENCE_API);
  }

  //--------- getExperienceGraph
  getExperienceGraph = () : AxiosPromise<BaseResponse<ForceGraph.Graph>> => {
    return axios.get<BaseResponse<ForceGraph.Graph>>(GET_EXPERIENCE_GRAPH_API);
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