# GraphQL-Yoga + Graphql Tools

- `pnpm init`
- `pnpm add express graphql graphql-yoga`

https://the-guild.dev/graphql/tools/docs/schema-loading

- `pnpm add @graphql-tools/load-files`
- `pnpm add -D nodemon`

Add this in package.json

- `"start": "nodemon index.js",`
- `pnpm start`

# GraphQL With Apollo

Please see `apollo-demo` branch

- `pnpm rm graphql graphql-yoga`
- `pnpm add @graphql-tools/schema`

- `import { makeExecutableSchema } from "@graphql-tools/schema";`

## Install Apollo Server

- `pnpm add @apollo/server`
- `pnpm add cors`
