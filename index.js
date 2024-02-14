import express from "express";
import cors from "cors";
import { schema } from "./schema.js";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({ schema });
  await server.start();
  app.use(cors());
  // graphql FE typically make request to server by using POST with JSON body
  app.use(express.json());
  app.use("/graphql", expressMiddleware(server));
  app.get("/", (_, res) => res.send("Using Apollo Server!"));
  app.listen(3000, () => {
    console.log("express is running on port 3000...");
  });
}

// call the function
startApolloServer();
