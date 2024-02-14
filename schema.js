import { createSchema } from "graphql-yoga";
import { loadFiles } from "@graphql-tools/load-files";

// https://github.com/odziem/graphql-example/blob/master/orders/orders.resolvers.js
// https://the-guild.dev/graphql/tools/docs/schema-loading
export const schema = createSchema({
  typeDefs: await loadFiles("**/*.graphql"),
  resolvers: await loadFiles("**/*.resolvers.js"),
});
