const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;
const _ = require("lodash");

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

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    Id: { type: GraphQLString },
    UserName: { type: GraphQLString },
    FirstName: { type: GraphQLString },
    LastName: { type: GraphQLString },
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getuserById: {
      type: UserType,
      args: { Id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return _.find(users, { Id: args.Id });
      },
    },
    user: {
      type: UserType,
      args: {},
      resolve(parentValue, args) {
        return users;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
