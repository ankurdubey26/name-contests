// import type helpers from graphql

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require("graphql");

// defining the root type.
const rootQueryType = new GraphQLObjectType({
    name: "rootQueryType",
    fields: {
        hello: {
            type: GraphQLString,
            resolve: () => "world"
        }
    }
});

const ncSchema = new GraphQLSchema({
    query: rootQueryType
});

module.export = {
    ncSchema
};