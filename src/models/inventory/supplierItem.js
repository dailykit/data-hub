import mongoose from 'mongoose'

const SupplierItemSchema = new mongoose.Schema(
   {
      title: String,
      sku: String,
      unit_quantity: {
         min: 0,
         unit: String,
         value: mongoose.Types.Decimal128
      },
      unit_price: {
         min: 0,
         unit: String,
         value: mongoose.Types.Decimal128
      },
      case_quantity: {
         min: 0,
         unit: String,
         value: mongoose.Types.Decimal128
      },
      min_order_value: {
         min: 0,
         unit: String,
         value: mongoose.Types.Decimal128
      },
      lead_time: {
         min: 0,
         unit: String,
         value: mongoose.Types.Decimal128
      },
      processing: {
         name: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ProcessingName'
         },
         par_level: {
            min: 0,
            unit: String,
            value: mongoose.Types.Decimal128
         },
         max_inventory_level: {
            min: 0,
            unit: String,
            value: mongoose.Types.Decimal128
         },
         labor_time: {
            min: 0,
            unit: String,
            value: mongoose.Types.Decimal128
         },
         yield: {
            min: 0,
            value: mongoose.Types.Decimal128
         },
         shelf_life: {
            min: 0,
            unit: String,
            value: mongoose.Types.Decimal128
         },
         bulk_density: {
            min: 0,
            value: mongoose.Types.Decimal128
         },
         nutritions: {
            calories: {
               min: 0,
               value: mongoose.Types.Decimal128
            },
            fat: {
               saturated: {
                  min: 0,
                  value: mongoose.Types.Decimal128
               },
               trans: { min: 0, value: mongoose.Types.Decimal128 }
            },
            cholestrol: { min: 0, value: mongoose.Types.Decimal128 },
            sodium: {
               min: 0,
               value: mongoose.Types.Decimal128
            },
            carbohydrate: {
               dietry_fibre: {
                  min: 0,
                  value: mongoose.Types.Decimal128
               },
               sugar: {
                  min: 0,
                  value: mongoose.Types.Decimal128
               }
            },
            protein: {
               min: 0,
               value: mongoose.Types.Decimal128
            },
            vitamin_a: {
               min: 0,
               value: mongoose.Types.Decimal128
            },
            vitamin_c: {
               min: 0,
               value: mongoose.Types.Decimal128
            },
            calcium: {
               min: 0,
               value: mongoose.Types.Decimal128
            },
            iron: {
               min: 0,
               value: mongoose.Types.Decimal128
            }
         },
         allergens: [
            {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'Allergens'
            }
         ]
      }
   },
   { timestamps: true }
)

export default mongoose.model('SupplierItem', SupplierItemSchema)
