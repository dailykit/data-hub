const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema(
   {
      title: String,
      realtime: Boolean,
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
                  ]
               }
            ]
         }
      ]
   },
   { timestamps: true }
)

module.exports = mongoose.model('product', productSchema)
