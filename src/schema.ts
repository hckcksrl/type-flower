import { GraphQLSchema } from "graphql";
import {
  makeExecutableSchema,
  IResolvers,
  ITypeDefinitions
} from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import * as path from "path";

const allTypes: string[] = fileLoader(
  path.join(__dirname, "./API/**/**/*.graphql")
);

const allResolvers: IResolvers[] = fileLoader(
  path.join(__dirname, "./API/**/**/resolvers.*")
);

const mergedTypes = mergeTypes(allTypes);
const mergedResolvers = mergeResolvers(allResolvers);

const schema = makeExecutableSchema({
  typeDefs: mergedTypes,
  resolvers: mergedResolvers
});

export default schema;
