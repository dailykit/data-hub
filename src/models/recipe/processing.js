import mongoose from 'mongoose'

const ProcessingSchema = new mongoose.Schema(
   {
      isValid: {
         type: Boolean,
         default: false
      },
      name: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'ProcessingName'
      },
      sachets: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Sachet'
         }
      ],
      recipes: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Recipe'
         }
      ]
   },
   {
      timestamps: true
   }
)

export default mongoose.model('Processing', ProcessingSchema)
