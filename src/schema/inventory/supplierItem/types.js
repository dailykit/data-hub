const { gql } = require('apollo-server-express')

const typeDefs = gql`
   type Fat {
      saturated: Int
      trans: Int
   }
   type Carbohydrate {
      dietry_fibre: Int
      sugar: Int
   }
   type Nutritions {
      calories: Int
      fat: Fat
      cholestrol: Int
      sodium: Int
      carbohydrate: Carbohydrate
      protein: Int
      vitamin_a: Int
      vitamin_c: Int
      calcium: Int
      iron: Int
   }
   type ProcessingInfo {
      name: String
      par_level: Quantity
      max_inventory_level: Quantity
      labor_time: Quantity
      yield: Int
      shelf_life: Quantity
      bulk_density: Int
      nutritions: Nutritions
      # allergens: [Allergens]!
   }
   type SupplierItem {
      name: String
      sku: String
      unit_quantity: Quantity
      unit_price: Quantity
      case_quantity: Quantity
      min_order_value: Quantity
      lead_time: Quantity
      processing: ProcessingInfo
   }
`

export default typeDefs
