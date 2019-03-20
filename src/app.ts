import { ApolloServer } from "apollo-server-express";
import { GraphQLServer } from "graphql-yoga";
import schema from "./schema";
import * as express from "express";

class App {
  public server: GraphQLServer;
  constructor() {
    this.server = new GraphQLServer({
      schema,
      context: (req): any => {
        const { connection: { context = null } = {} } = req;
        return {
          req: req.request
        };
      }
    });
  }
}

export default new App().server;
