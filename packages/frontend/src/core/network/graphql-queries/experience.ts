import gql from 'graphql-tag';

export const EXPERIENCES_QUERY = gql`
  query Experiences {
    experiences {
      _id
      avatarFileName
      from
      to
      role
      tasks {
        _id
        key
      }
      employers {
        _id
        company {
          _id
          city
          country
          logoFilename
          name
        }
        from
        to
      }
      customers {
        _id
        city
        country
        logoFilename
        name
      }
      sectors {
        _id
        key
      }
      skills {
        _id
        usagePercentage
        skill {
          _id
          name
        }
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