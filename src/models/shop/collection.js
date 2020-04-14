import mongoose from 'mongoose'
const Schema = mongoose.Schema

const MenuCollectionSchema = new Schema(
   {
      title: String,
      priority: Number, //acts like z-index in case of css that helps decide the priority between menus
      categories: [
         {
            title: String,
            products: [{ type: Schema.Types.ObjectId, ref: 'product' }],
            subcategories: [
               {
                  subcategory: {
                     type: Schema.Types.ObjectId,
                     ref: 'menuLabels'
                  }, //this will come from menulabels masterlist
                  products: [{ type: Schema.Types.ObjectId, ref: 'product' }]
               }
            ]
         }
      ],
      active: Boolean
   },
   {
      timestamps: true
   }
)

export default mongoose.model('MenuCollection', MenuCollectionSchema)
