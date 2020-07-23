interface BaseResponse<T> {
  message? : string;
  code? : number;
  result? : T;
  results? : T[];
}

export default BaseResponse;