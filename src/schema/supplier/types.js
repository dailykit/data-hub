const { gql } = require('apollo-server-express')

module.exports = gql`
   type Supplier{
      id: ID!
      logo: String
      address: Address
      personOfContact: PersonOfContact
      active: Boolean
      termsAndConditions: TermsAndConditions
      createdAt: String
      updatedAt: String
   }
   type Address{
      coordinates: Coordinates
      addressLine1: String!
      addressLine2: String
      zipCode: Int
      city: String!
      state: String
      country: String!
      specialInstruction: String
   }
   type Coordinates{
      latitude: Float
      longitude: Float
   }
   type PersonOfContact{
      firstName: String!
      lastName: String!
      email: String!
      phoneCode: String!
      phoneNumber: Int!
      profileImage: String
   }
   type TermsAndConditions{
      paymentTerms: String
      shippingTerms: String
   }

   input SupplierInput{
      logo: String
      address: AddressInput
      personOfContact:PersonOfContactInput
      termsAndConditions: TermsAndConditionsInput
   }
   input PersonOfContactInput{
      firstName: String!
      lastName: String!
      email: String!
      phoneCode: String!
      phoneNumber: Int!
      profileImage: String
   }
   input TermsAndConditionsInput {
      paymentTerms: String
      shippingTerms: String
   }
   input AddressInput{
      coordinates: CoordinatesInput
      addressLine1: String!
      addressLine2: String
      zipCode: Int
      city: String!
      state: String
      country: String!
      specialInstruction: String
   }
   input CoordinatesInput{
      latitude: Float
      longitude: Float
   }
`

