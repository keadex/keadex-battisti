import express from "express";
import { ApolloServer, gql, addMockFunctionsToSchema } from "apollo-server-express";
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { join } from "path";
import faker from 'faker';
import { addResolversToSchema } from '@graphql-tools/schema';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';

const PORT = 4000;

const app = express();

const schema = loadSchemaSync(join(__dirname, 'schema.graphql'), { loaders: [new GraphQLFileLoader()] });

const mocks = {
  // Horse: () => ({
  //   description: () => faker.random.arrayElement(["ciao1", "coap2", "ciao3"])
  // }),
  Query: () => ({
    experiences: ()=> require('./mocks/experiences.json'),
    quotes: ()=> require('./mocks/quotes.json'),
    experienceGraph: ()=> require('./mocks/experience-graph.json')
  })
};

const server = new ApolloServer({ schema,  mocks });
server.applyMiddleware({ app });

app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://local.keadex.io:4000${server.graphqlPath}`)
})