import gql from "graphql-tag";
import { convertToStringArray } from "../../../../helper/array-helper";
import { ArchitectureModuleType } from "../../../../model/autogenerated-graphql-strapi";

export const ARCHITECTURE_MODULES = (types:ArchitectureModuleType[])=> {

  return gql`
    query ArchitectureModules {
      architectureModules(where: {type: [${convertToStringArray(types)}]}) {
        moduleId
        type
        name
        logo {
          url
        }
        description
        features {
          id
          title
          description
          codeSnippet {
            id
            filePath
            fileLink
            description
            code
            language
          }
        }
        roadmap
      }
    }
  `
}