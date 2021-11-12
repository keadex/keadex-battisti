import gql from 'graphql-tag';

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
    }
  }
`