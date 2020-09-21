import gql from 'graphql-tag';
import { Enum_Page_Status } from '../../../model/autogenerated-graphql-strapi';

export const GLOBAL = gql`
  query Global {
    global {
      id
      created_at
      updated_at
      metadata {
        id
        metaTitle
        metaDescription
        shareImage {
          id
          created_at
          updated_at
          name
          alternativeText
          caption
          width
          height
          formats
          hash
          ext
          mime
          size
          url
          previewUrl
          provider
          provider_metadata
          created_by {
            id
            username
          }
          updated_by {
            id
            username
          }
        }
        twitterCardType
        twitterUsername
      }
      metaTitleSuffix
      favicon {
        id
        created_at
        updated_at
        name
        alternativeText
        caption
        width
        height
        formats
        hash
        ext
        mime
        size
        url
        provider
        provider_metadata
        created_by {
          id
          username
        }
        updated_by {
          id
          username
        }
        related {
          __typename
        }
      }
      notificationBanner {
        id
        text
        type
      }
      navbar {
        id
        logo {
          id
          created_at
          updated_at
          name
          alternativeText
          caption
          width
          height
          formats
          hash
          ext
          mime
          size
          url
          provider
          provider_metadata
          created_by {
            id
            username
          }
          updated_by {
            id
            username
          }
        }
        links {
          id
          url
          newTab
          text
        }
        button {
          id
          url
          newTab
          text
          type
        }
      }
      footer {
        id
        logo {
          id
          created_at
          updated_at
          name
          alternativeText
          caption
          width
          height
          formats
          hash
          ext
          mime
          size
          url
          provider
          provider_metadata
          created_by {
            id
            username
          }
          updated_by {
            id
            username
          }
        }
        columns {
          id
          title
          links {
            id
            url
            newTab
            text
          }
        }
        smallText
      }
      created_by {
        id
        username
      }
      updated_by {
        id
        username
      }
    }
  }
`

export const PAGES = (slug:string, preview:boolean)=> {
  let status:Enum_Page_Status[] = [Enum_Page_Status.Published];
  if (preview) status.push(Enum_Page_Status.Draft);

  return gql`
    query Pages {
      pages(where: {slug: ${slug}, status: ${status}}) {
        id
        created_at
        updated_at
        slug
        shortName,
        metadata {
          id
          metaTitle
          metaDescription
          shareImage {
            id
            created_at
            updated_at
            name
            alternativeText
            caption
            width
            height
            formats
            hash
            ext
            mime
            size
            url
            previewUrl
            provider
            provider_metadata
            created_by {
              id
              username
            }
            updated_by {
              id
              username
            }
          }
          twitterCardType,
          twitterUsername
        }
        contentSections {
          __typename
        }
        status
        created_by {
          id
          username
        }
        updated_by {
          id
          username
        }
      }
    }
  `
}