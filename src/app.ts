import express from "express";
import expressGraphql from "express-graphql";
import * as graphql from "graphql";

async function main(): Promise<void> {
  const app = express();

  const schema = graphql.buildSchema(`
    type Query {
      message: String
    }
  `);

  const root = {
    message: () => "Hello World!"
  };

  app.use(
    "/graphql",
    expressGraphql({
      schema,
      rootValue: root,
      graphiql: true
    })
  );

  app.listen(3000, () =>
    console.log("Express GraphQL Server Now Running On localhost:3000/graphql")
  );
}

main().catch(e => console.error(e));
