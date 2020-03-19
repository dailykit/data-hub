const { gql } = require('apollo-server-express')

module.exports = gql`
   type SupplierItemProcessing{
      id: ID!
      itemDetails: ItemDetailsBulk
      inventoryDetails: InventoryDetails
      createdAt: String
      updatedAt: String
   }
   type ItemDetailsBulk{
      supplierItem: SupplierItem
     # processing: Processing
      photo: String
      requireRefrigeration: Boolean
      labourTime: ValueInt
      shelfLife: ValueInt
      percentYield: Float
      bulkDensity: ValueFloat
      nutritionalValues: NutritionalValues
      allergens: [String]!
      sop: [String]!
      equipments: [String]!
   }
   type NutritionalValues{
      calories: ValueFloat
      fat: Fat
      cholestrol: ValueFloat
      sodium: ValueFloat
      carbohydrates: Carbohydrates
      protein: ValueFloat
      microNutrients: MicroNutrients
   }
   type Fat{
      saturatedFat: ValueFloat
      transFat: ValueFloat
   }
   type Carbohydrates{
      dietryFibre: ValueFloat
      sugar: ValueFloat
   }
   type MicroNutrients{
      vitaminA: ValueFloat
      vitaminB: ValueFloat
      vitaminC: ValueFloat
      vitaminD: ValueFloat
      calcium: ValueFloat
      iron: ValueFloat
   }

   input SupplierItemProcessingInput{
      itemDetails: ItemDetailsBulkInput
      inventoryDetails: InventoryDetailsInput
      createdAt: String
      updatedAt: String
   }
   input ItemDetailsBulkInput{
      supplierItem: SupplierItemInput
     # processing: Processing
      photo: String
      requireRefrigeration: Boolean
      labourTime: ValueIntInput
      shelfLife: ValueIntInput
      percentYield: Float
      bulkDensity: ValueFloatInput
      nutritionalValues: NutritionalValuesInput
      allergens: [String]!
      sop: [String]!
      equipments: [String]!
   }
   input NutritionalValuesInput{
      calories: ValueFloatInput
      fat: FatInput
      cholestrol: ValueFloatInput
      sodium: ValueFloatInput
      carbohydrates: CarbohydratesInput
      protein: ValueFloatInput
      microNutrients: MicroNutrientsInput
   }
   input FatInput{
      saturatedFat: ValueFloatInput
      transFat: ValueFloatInput
   }
   input CarbohydratesInput{
      dietryFibre: ValueFloatInput
      sugar: ValueFloatInput
   }
   input MicroNutrientsInput{
      vitaminA: ValueFloatInput
      vitaminB: ValueFloatInput
      vitaminC: ValueFloatInput
      vitaminD: ValueFloatInput
      calcium: ValueFloatInput
      iron: ValueFloatInput
   }

`
