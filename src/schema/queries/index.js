import { gql } from 'apollo-server-express'

const typeDefs = gql`
   type Query {
      recipes: [Recipe]
   }
`

export default typeDefs
