import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

const PORT = 4000;

const app = express();

const typeDefs = gql`
type Cat {
  id: ID!
  name: String!
  age: Int!
  nice: Boolean
}
type Horse {
  id: ID!
  name: String!
  netWorth: Float!
  description: String
}
type Query {
  allCats: [Cat!]!
  allHorses: [Horse!]!
}
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  },
};

const server = new ApolloServer({ typeDefs, mocks: true });
server.applyMiddleware({ app });

app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
})