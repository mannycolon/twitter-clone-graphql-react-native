/* eslint-disable no-console */

import express from 'express';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import bodyParser from 'body-parser';
import { createServer } from 'http';

import './config/db';
import constants from './config/constants';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import mocks from './mocks';

const app = express();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use(bodyParser.json());

// graphql express id
app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: constants.GRAPHQL_PATH,
  }),
);

// graphql express middleware
app.use(
  constants.GRAPHQL_PATH,
  graphqlExpress({
    schema,
  }),
);

const graphQLServer = createServer(app);

mocks().then(() => {
  graphQLServer.listen(constants.PORT, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(`App listening on port: ${constants.PORT}`);
    }
  });
});
