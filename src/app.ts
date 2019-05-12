import { ApolloServer } from "apollo-server-express";
import schema from "./schema";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import DecodeJwt from "./helper/decodejwt";
import { Users } from "./entity/Users";
var file = require("./route/File/upload/file");

export class Apollo {
  public server: ApolloServer;
  constructor() {
    this.server = new ApolloServer({
      schema,
      context: ({ req }): any => {
        return {
          req: req.body.user
        };
      },
      uploads: true
    });
  }
}

export class App {
  public express: express.Application;
  constructor() {
    this.express = express();
    this.middleware();
  }
  private middleware = (): void => {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(cors());
    this.express.use(this.jwt);
    this.express.use("/file", file);
  };
  private jwt = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<void> => {
    const token: string = req.headers.authorization;
    if (token === undefined) {
      next();
    } else {
      const jwt = token.split(" ")[1];
      token.split(" ")[1];
      if (jwt !== "null") {
        const user: Users = await DecodeJwt(jwt);
        if (user) {
          req.body.user = user;
        } else {
          req.body.user = undefined;
        }
      }
      next();
    }
  };
}
