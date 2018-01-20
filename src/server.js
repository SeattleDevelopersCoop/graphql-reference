import express from 'express';
import { buildSchema } from 'graphql';
import graphqlHTTP from 'express-graphql';

const app = express();
const PORT = process.env.PORT || 3000;

// Construct a schema, using GraphQL schema language
let schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
let rootValue = {
  hello: () => {
    return 'Hello world!';
  },
};

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}));

app.listen(PORT, () => console.log(`🚀 GraphQL server listening on port ${PORT} at /graphql!`));
