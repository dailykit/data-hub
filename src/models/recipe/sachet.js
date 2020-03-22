import mongoose from 'mongoose'

const SachetSchema = new mongoose.Schema(
   {
      quantity: {
         value: Number,
         unit: String
      },
      modes: [
         {
            label: String,
            station: {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'Station'
            },
            station: {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'Station'
            },
            items: [
               {
                  supplierItem: {
                     type: mongoose.Schema.Types.ObjectId,
                     ref: 'SupplierItem'
                  },
                  isWeighable: {
                     type: Boolean,
                     default: true
                  },
                  accuracy: Number,
                  packaging: {
                     type: mongoose.Schema.Types.ObjectId,
                     ref: 'Packaging'
                  },
                  isLabelled: {
                     type: Boolean,
                     default: false
                  },
                  labelTemplate: {
                     type: mongoose.Schema.Types.ObjectId,
                     ref: 'LabelTemplate'
                  }
               }
            ]
         }
      ]
   },
   { timestamps: true }
)

export default mongoose.model('Sachet', SachetSchema)
