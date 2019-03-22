import "reflect-metadata";
import { Apollo, App } from "./app";
import { createConnection } from "typeorm";

const server = new Apollo().server;
const app = new App().express;

server.applyMiddleware({ app });

createConnection()
  .then(() => {
    app.listen({ port: 4000 }, () =>
      console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
    );
  })
  .catch(err => {
    console.log(err);
  });
