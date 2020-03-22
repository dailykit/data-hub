import mongoose from 'mongoose'
const Schema = mongoose.Schema

const RecipeSchema = new Schema({ name: String }, { timestamps: true })

export default mongoose.model('recipe', RecipeSchema)
