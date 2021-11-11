declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      NEXT_PUBLIC_CDN_ENDPOINT: string;
      NEXT_PUBLIC_API_ENDPOINT: string;
      NEXT_PUBLIC_STRAPI_API_URL: string;
      NEXT_PUBLIC_STRAPI_GRAPHQL_API_URL: string;
    }
  }
}

export {}