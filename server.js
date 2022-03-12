const express = require("express");
const app = express();
const users = [
  {
    Id: "1",
    UserName: "Mass2007",
    FirstName: "Mohammad",
    LastName: "Asgharian",
  },

  {
    Id: "2",
    UserName: "Marzieh.Vahid",
    FirstName: "Marzieh",
    LastName: "Vahid",
  },
];

const { graphqlHTTP } = require("express-graphql");
const graphiql = require("graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphiql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    Id: { type: GraphQLString },
    UserName: { type: GraphQLString },
    FirstName: { type: GraphQLString },
    LastName: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      args: { Id: { type: GraphQLString } },
      resolve(parent, args) {
        return users;
      },
    },
  },
});
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        Id: { type: GraphQLString },
        FirstName: { type: GraphQLString },
        LastName: { type: GraphQLString },
        UserName: { type: GraphQLString },
      },
      resolve(parent, args) {
        users.push({
          Id: args.Id,
          FirstName: args.FirstName,
          LastName: args.LastName,
          UserName: args.UserName,
        });
        return args;
      },
    },
  },
});

// Construct a schema, using GraphQL schema language
const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(5000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
