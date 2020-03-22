const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseOrderSchema = new Schema({
   supplier: { type: Schema.Types.ObjectId, ref: 'Supplier' },
   orderedItems: [
      {
         supplierItem: { type: Schema.Types.ObjectId, ref: 'SupplierItem' },
         ordered: {
            value: {
               type: mongoose.Types.Decimal128,
               min: 0
            },
            unit: String
         },
         received: {
            value: {
               type: mongoose.Types.Decimal128,
               min: 0
            },
            unit: String
         },
         expectedDelivery: {
            type: Date,
            min: Date.now
         },
         deliveryStatus: {
            type: String,
            enum: ['awaiting', 'received', 'cancelled'],
            default: 'awaiting',
         },
         timestampForDeliveryStatus: {
            awaiting: Date,
            received: Date,
            cancelled: Date
         },
         timestampsForStatus: [Date]
      }
   ],
   status: {
      order: {
         type: String,
         enum: ['pending_confirmation', 'draft', 'cancelled', 'fulfilled'],
         default: 'draft',
      },
      timestampForOrder: {
         pending_confirmation: Date,
         draft: Date,
         completed: Date,
         fulfilled: Date
      },
      payment: {
         type: String,
         enum: ['unpaid', 'paid', 'cancelled'],
         default: 'unpaid',
      },
      timestampForPayment: {
         unpaid: Date,
         paid: Date,
         cancelled: Date
      }
   },

}, { timestamps: true });

module.exports = mongoose.model('PurchaseOrder', purchaseOrderSchema)