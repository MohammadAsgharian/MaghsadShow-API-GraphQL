const graphql = require("graphql");
const { GraphQLDateTime } = require("graphql-iso-date");
const { GraphQLObjectType } = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    Id: { type: GraphQLString },
    FirstName: { type: GraphQLString },
    LastName: { type: GraphQLSrting },
    Tel: { type: GraphQLSrting },
    ActivateSms: { type: GraphQLInt },
    AvatarPhotoName: { type: GraphQLString },
    SinginDate: { type: GraphQLDateTime },
  },
});
const resolvers = {
  /* your other resolvers */
  DateTime: GraphQLDateTime,
};
