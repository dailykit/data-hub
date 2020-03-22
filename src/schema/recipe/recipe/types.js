const { gql } = require('apollo-server-express')

module.exports = gql`
   enum Difficulty {
      BEGINNER
      INTERMEDIATE
      EXPERT
   }

   enum Type {
      VEGETARIAN
      NONVEGETARIAN
      VEGAN
   }

   type Image {
      url: String
      caption: String
   }

   type Asset {
      images: [Image]!
      videos: String
   }

   type Nutritions {
      calories: String
      sugar: String
      carbs: String
   }

   type Serving {
      size: Int
      cost: Int
      # Needs to be calculated at runtime
      nutritions: Nutritions
   }

   type Ingredient {
      processing: Processing
      quantity: [String]!
   }

   type Step {
      title: String
      photos: [String]
      description: String!
   }

   type Recipe {
      id: ID!
      title: String
      # There's no field for subtitle in designs
      subtitle: String
      # There's no field for description in designs
      description: String
      author: String
      # How's it going to be calculated
      cost: Int
      # There's no field for cuisine in designs
      cuisine: String
      # There's no field for cookingTime in designs
      cookingTime: String
      # There's no designs for allergens master list in settings
      allergens: [String]!
      difficulty: Difficulty
      assets: [Asset]!
      # There's no designs for tags master list in settings
      tags: [String]!
      type: Type
      servings: [Serving]
      ingredients: [Ingredient]!
      # The current procedure field design won't work with this schema
      process: [Step]!
   }
`
