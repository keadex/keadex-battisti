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

// const typeDefs = gql`
// type Cat {
//   id: ID!
//   name: String!
//   age: Int!
//   nice: Boolean
// }
// type Horse {
//   id: ID!
//   name: String!
//   netWorth: Float!
//   description: String
// }
// type Query {
//   allCats: [Cat!]!
//   allHorses: [Horse!]!
// }
// `;


// const CatResolver = {
//   Cat: {
//     id: () => '123'
//   },
// };

const mocks = {
  // Horse: () => ({
  //   description: () => faker.random.arrayElement(["ciao1", "coap2", "ciao3"])
  // }),
  Query: () => ({
    experiences: ()=> require('./mock-responses/get-experience.json')
  })
};

const server = new ApolloServer({ schema,  mocks });
server.applyMiddleware({ app });

app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
})