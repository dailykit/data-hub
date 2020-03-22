const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type Processing {
      name: String
      sachets: [Sachet]!
   }
`

export default typeDefs
