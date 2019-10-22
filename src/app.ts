import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

import users from "./user";

async function main(): Promise<void> {
  const app = express();

  const typeDefs = gql`
    type User {
      id: Int
      name: String
      age: Int
      created_date: String
    }
    type Query {
      users: [User]
    }
  `;

  const resolvers = {
    Query: {
      users: () => users
    }
  };

  const server = new ApolloServer({ typeDefs, resolvers });
  server.applyMiddleware({ app });

  app.listen(3000, () =>
    console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
  );
}

main().catch(e => console.error(e));
