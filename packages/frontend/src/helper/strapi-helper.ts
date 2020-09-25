import { STRAPI_ENDPOINT } from "../core/network/network.service";

/*
# Strapi Demo

This code has been migrated from https://github.com/strapi/strapi-starter-next-corporate only for demo purpose.
*/

//----- getStrapiURL
export function getStrapiURL(path:string) {
  return `${STRAPI_ENDPOINT}${path}`;
}

//----- getStrapiURL
export function getStrapiMedia(url:string|undefined) {
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


//----- getStrapiButtonAppearance
// Decide what the button will look like based on its type (primary or secondary)
// and on its background (light or dark).
export function getStrapiButtonAppearance(type:string, background:string) {
  if (type === "primary") {
    if (background === "light") {
      // Dark primary button on a light background
      return "dark";
    }
    // Fully white primary button on a dark background
    return "white";
  } else if (type === "secondary") {
    if (background === "light") {
      // Dark outline primary button on a light background
      return "dark-outline";
    }
    // White outline primary button on a dark background
    return "white-outline";
  }

  // Shouldn't happen, but default to dark button just in case
  return "dark";
}
