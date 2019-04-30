import { makeExecutableSchema, IResolvers } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import * as path from "path";

const allTypes: string[] = fileLoader(
  path.join(__dirname, "./route/**/**/*.graphql")
);

const allResolvers: IResolvers[] = fileLoader(
  path.join(__dirname, "./route/**/**/resolvers.*")
);

const mergedTypes = mergeTypes(allTypes, { all: true });
const mergedResolvers = mergeResolvers(allResolvers);

const schema = makeExecutableSchema({
  typeDefs: mergedTypes,
  resolvers: mergedResolvers
});

export default schema;
