import express from "express";
import { schema } from "./schema.js";
import { createYoga } from "graphql-yoga";

const app = express();
const yoga = createYoga({ schema });

app.use("/graphql", yoga);
app.get("/", (_, res) => {
  res.send("Hello GraphQL Yoga");
});

app.listen(3000, () => {
  console.log("express is running on port 3000...");
});
