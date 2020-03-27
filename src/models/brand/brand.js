import mongoose from 'mongoose'

const BrandSchema = new mongoose.Schema(
   {
      name: String,
      logo: String,
      menus: [
         {
            name: String,
            menuId: String,
            zipcode: [Number]
         }
      ]
   },
   { timestamps: true }
)

export default mongoose.model('Brand', BrandSchema)
