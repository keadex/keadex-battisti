import { STRAPI_ENDPOINT } from "../core/network/network.service";

//----- getStrapiURL
export function getStrapiURL(path:string) {
  return `${STRAPI_ENDPOINT}${path}`;
}

//----- getStrapiURL
export function getStrapiMedia(url:string) {
  if (url == null) {
    return null;
  }

  // Return the full URL if the media is hosted on an external provider
  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }

  // Otherwise prepend the URL path with the Strapi URL
  return `${STRAPI_ENDPOINT}${url}`;
}
