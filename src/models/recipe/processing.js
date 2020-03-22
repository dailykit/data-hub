import mongoose from 'mongoose'

const ProcessingSchema = new mongoose.Schema(
   {
      name: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'ProcessingName'
      },
      sachets: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Sachet'
         }
      ]
   },
   {
      timestamps: true
   }
)

export default mongoose.model('Processing', ProcessingSchema)
