import { makeExecutableSchema } from "@graphql-tools/schema";
import { loadFiles } from "@graphql-tools/load-files";

// https://github.com/odziem/graphql-example/blob/master/orders/orders.resolvers.js
// https://the-guild.dev/graphql/tools/docs/schema-loading
export const schema = makeExecutableSchema({
  typeDefs: await loadFiles("**/*.graphql"),
  resolvers: await loadFiles("**/*.resolvers.js"),
});

// we remove the graphql-yoga and replace it with @graphql-tools/schema
