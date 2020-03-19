const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplierItemProcessingSachetSchema = new Schema({
   itemDetails: {
      unitQuantity: {
         value: {
            type: mongoose.Types.Decimal128,
            min: 0
         },
         unit: String
      },
      supplierItemProcessing: { type: Schema.Types.ObjectId, ref: 'SupplierItemProcessing' }
   },
   inventoryDetails: {
      parLevel: {
         value: {
            type: mongoose.Types.Decimal128,
            min: 0
         },
         unit: String
      },
      maxInventoryLevel: {
         value: {
            type: mongoose.Types.Decimal128,
            min: 0
         },
         unit: String
      },
      status: {
         type: String,
         enum: ['below', 'instock', 'over'],
      },
      timestampsForStatus: {
         below: Date,
         instock: Date,
         over: Date
      },
      onhandQuantity: {
         value: {
            type: mongoose.Types.Decimal128,
            min: 0
         },
         unit: String
      },
      isAvailable: {
         type: Boolean,
         default: true
      },
   },

}, { timestamps: true });

module.exports = mongoose.model('SupplierItemProcessingSachet', supplierItemProcessingSachetSchema);