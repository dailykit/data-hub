import mongoose from 'mongoose'

const CollectionSchema = new mongoose.Schema(
   {
      title: String,
      categories: [
         {
            title: String,
            recipes: [
               {
                  recipe: {
                     type: mongoose.Schema.Types.ObjectId,
                     ref: 'Recipe'
                  }
               }
            ]
         }
      ]
   },
   {
      timestamps: true
   }
)

export default mongoose.model('Collection', CollectionSchema)
