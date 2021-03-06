const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema(
   {
      title: String,
      realtime: Boolean,
      description: String,
      tags: [String],
      preOrder: {
         isActive: Boolean,
         days: Number
      },
      items: [
         {
            label: String,
            defaultRecipe: {
               type: Schema.Types.ObjectId,
               ref: 'recipes'
            },
            recipes: [
               {
                  recipe: {
                     type: Schema.Types.ObjectId,
                     ref: 'recipes'
                  },
                  defaultState: {
                     type: String,
                     default: 'MEAL_KIT',
                     enum: ['READY_TO_EAT', 'MEAL_KIT']
                  },
                  mealKit: [
                     {
                        size: Number,
                        price: Number,
                        discount: Number
                     }
                  ],
                  readyToEat: [
                     {
                        size: Number,
                        price: Number,
                        discount: Number
                     }
                  ],
                  accompaniments: [
                     {
                        type: {
                           type: Schema.Types.ObjectId,
                           ref: 'AccompanimentType'
                        },
                        products: [
                           {
                              product: {
                                 type: Schema.Types.ObjectId,
                                 ref: 'Product'
                              },
                              discount: {
                                 type: Number
                              }
                           }
                        ]
                     }
                  ]
               }
            ]
         }
      ]
   },
   { timestamps: true }
)

module.exports = mongoose.model('product', productSchema)
