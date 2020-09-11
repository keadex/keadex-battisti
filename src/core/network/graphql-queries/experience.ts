import gql from 'graphql-tag';

export const EXPERIENCES_QUERY = gql`
  query Experiences {
    experiences {
      id
      from
      to
      avatarFilename
      tasks {
        id
      }
      companies {
        name
        from
        to
        city
        country
        logoFilename
      }
      customers {
        id
        name
        logoFilename
      }
      sectors {
        id
      }
      skills {
        name
        usagePercentage
      }
    }
  }
`

export const EXPERIENCE_GRAPH_QUERY = gql`
  query ExperienceGraph {
    experienceGraph {
      nodes {
        id
        name
        val
        group
      }
      links {
        source
        target
      }
    }
  }
`