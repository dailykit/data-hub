const merge = require('lodash.merge')
const { makeExecutableSchema } = require('graphql-tools')

const { types: RecipeTypes, resolvers: RecipeResolvers } = require('./recipes')

const Queries = require('./queries')
const Mutations = require('./mutations')
const ResponseResolvers = require('./responses')

module.exports = makeExecutableSchema({
   typeDefs: [Queries, Mutations, RecipeTypes],
   resolvers: merge(ResponseResolvers, RecipeResolvers)
})
