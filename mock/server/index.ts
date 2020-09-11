import express from "express";
import { ApolloServer } from "apollo-server-express";
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { join } from "path";


const PORT = 4000;

const app = express();

const schema = loadSchemaSync(join(__dirname, 'schema.graphql'), { loaders: [new GraphQLFileLoader()] });

export default function runMockServer(mocksMap:Map<String,String>) {
  const mocks = {
    // Horse: () => ({
    //   description: () => faker.random.arrayElement(["ciao1", "coap2", "ciao3"])
    // }),
    Query: () => ({
      experiences: ()=> require('../mocks/'+mocksMap.get("experiences")),
      quotes: ()=> require('../mocks/'+mocksMap.get("quotes")),
      experienceGraph: ()=> require('../mocks/'+mocksMap.get("experienceGraph"))
    })
  };
  
  const server = new ApolloServer({ schema,  mocks });
  server.applyMiddleware({ app });
  
  app.listen({ port: PORT }, () => {
    console.log(`Server ready at http://local.keadex.io:4000${server.graphqlPath}`)
  })
}