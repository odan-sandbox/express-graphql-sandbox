import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { buildSchema } from "graphql";
import users from "./user";

async function main(): Promise<void> {
  const app = express();

  const typeDefs = gql``;

  const resolvers = {};

  const server = new ApolloServer({ typeDefs, resolvers });
  server.applyMiddleware({ app });

  app.listen(3000, () =>
    console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
  );
}

main().catch(e => console.error(e));
