const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplierItemProcessingSchema = new Schema({
   itemDetails: {
      supplierItem: { type: Schema.Types.ObjectId, ref: 'SupplierItem' },
      processing: { type: Schema.Types.ObjectId, ref: 'Processing' },//is from another database
      photo: String,
      requireRefrigeration: {
         type: Boolean,
         default: false
      },
      labourTime: {
         value: {
            type: Number,
            min: 0,
            validate: {
               validator: Number.isInteger,
               message: '{VALUE} is not an integer value'
            }
         },
         unit: String
      },
      shelfLife: {
         value: {
            type: Number,
            min: 0,
            validate: {
               validator: Number.isInteger,
               message: '{VALUE} is not an integer value'
            }
         },
         unit: String
      },
      percentYield: {
         type: mongoose.Types.Decimal128,
         min: 0,
         max: 100
      },
      bulkDensity: {
         value: {
            type: mongoose.Types.Decimal128,
            min: 0
         },
         unit: String
      },
      nutritionalValues: {
         calories: {
            value: {
               type: mongoose.Types.Decimal128,
               min: 0
            },
            unit: String
         },
         fat: {
            saturatedFat: {
               value: {
                  type: mongoose.Types.Decimal128,
                  min: 0
               },
               unit: String
            },
            transFat: {
               value: {
                  type: mongoose.Types.Decimal128,
                  min: 0
               },
               unit: String
            }
         },
         cholesterol: {
            value: {
               type: mongoose.Types.Decimal128,
               min: 0
            },
            unit: String
         },
         sodium: {
            value: {
               type: mongoose.Types.Decimal128,
               min: 0
            },
            unit: String
         },
         carbohydrates: {
            dietryFibre: {
               value: {
                  type: mongoose.Types.Decimal128,
                  min: 0
               },
               unit: String
            },
            sugar: {
               value: {
                  type: mongoose.Types.Decimal128,
                  min: 0
               },
               unit: String
            }
         },
         protein: {
            value: {
               type: mongoose.Types.Decimal128,
               min: 0
            },
            unit: String
         },
         microNutrients: {
            vitaminA: {
               value: {
                  type: mongoose.Types.Decimal128,
                  min: 0
               },
               unit: String
            },
            vitaminB: {
               value: {
                  type: mongoose.Types.Decimal128,
                  min: 0
               },
               unit: String
            },
            vitaminC: {
               value: {
                  type: mongoose.Types.Decimal128,
                  min: 0
               },
               unit: String
            },
            vitaminD: {
               value: {
                  type: mongoose.Types.Decimal128,
                  min: 0
               },
               unit: String
            },
            calcium: {
               value: {
                  type: mongoose.Types.Decimal128,
                  min: 0
               },
               unit: String
            },
            iron: {
               value: {
                  type: mongoose.Types.Decimal128,
                  min: 0
               },
               unit: String
            }
         }

      },

      allergens: [
         { type: String } //this will contain ID's of allergens from another database
      ],
      sop: [
         { type: String }
      ],
      equipments: [
         { type: String } //this will contain ID's of the equipments from another database 
      ],
   },
   inventoryDetails: {
      parLevel: {
         value: {
            type: mongoose.Types.Decimal128,
            min: 0
         },
         unit: String
      },
      maxInventoryLevel: {
         value: {
            type: mongoose.Types.Decimal128,
            min: 0
         },
         unit: String
      },
      status: {
         type: String,
         enum: ['below', 'instock', 'over'],
      },
      timestampsForStatus: {
         below: Date,
         instock: Date,
         over: Date
      },
      onhandQuantity: {
         value: {
            type: mongoose.Types.Decimal128,
            min: 0
         },
         unit: String
      },
      isAvailable: {
         type: Boolean,
         default: false
      }
   }

}, { timestamps: true });

module.exports = mongoose.model('SupplierItemProcessing', supplierItemProcessingSchema);