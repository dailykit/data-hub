const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplierItemSchema = new Schema({
   name: {
      type: String,
      require: true
   },
   supplier: { type: Schema.Types.ObjectId, ref: 'Supplier' },
   sku: String,
   details: {
      unitSize: {
         value: {
            type: mongoose.Types.Decimal128,
            min: 0
         },
         unit: String
      },
      unitPrice: {
         value: {
            type: mongoose.Types.Decimal128,
            min: 0
         },
         unit: String
      },
      processing: { type: Schema.Types.ObjectId, ref: 'Processing' }
   },
   certificates: [
      { type: String }
   ],
   shippingDetails: {
      caseQuantity: {
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
      minOrderValue: {
         value: {
            type: mongoose.Types.Decimal128,
            min: 0
         },
         unit: String
      },
      leadTime: {
         value: {
            type: Number,
            min: 0,
            validate: {
               validator: Number.isInteger,
               message: '{VALUE} is not an integer value'
            }
         },
         unit: String
      }
   }
}, { timestamps: true });

module.exports = mongoose.model('SupplierItem', supplierItemSchema);