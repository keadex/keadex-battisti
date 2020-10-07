
import gql from 'graphql-tag';

export const QUOTES_QUERY = gql`
  query Quotes {
    quotes {
      quote
      author
      image
    }
  }
`