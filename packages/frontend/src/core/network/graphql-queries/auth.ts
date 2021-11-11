
import gql from 'graphql-tag';

export const BATTISTI_LOGIN_MUTATION = gql`
  mutation Login {
    login {
      accessToken
    }
  }
`