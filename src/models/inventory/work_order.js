const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workOrderSchema = new Schema({
   inputInventory: { type: Schema.Types.ObjectId, ref: 'SupplierItemProcessing' },
   inputQuantity: {
      value: {
         type: mongoose.Types.Decimal128,
         min: 0
      },
      unit: String
   },
   outputInventory: {
      bulk: {
         type: Schema.Types.ObjectId,
         ref: 'SupplierItemProcessing'
      },
      sachet: {
         type: Schema.Types.ObjectId,
         ref: 'SupplierItemProcessingSachets'
      }
   },
   scheduledTime: {
      type: Date,
      min: Date.now
   },
   status: {
      type: String,
      enum: ['pending', 'completed'],
      default: 'pending'
   },
   timestampForStatus: {
      pending: Date,
      completed: Date
   }

}, { timestamps: true });

module.exports = mongoose.model('WorkOrder', workOrderSchema);