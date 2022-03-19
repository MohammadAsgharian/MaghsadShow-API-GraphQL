const express = require("express");
const app = express();

const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(5000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
