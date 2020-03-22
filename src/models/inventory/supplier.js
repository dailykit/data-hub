const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplierSchema = new Schema({
   logo: String,
   address: {
      coordinates: {
         latitude: {
            type: mongoose.Types.Decimal128,
            min: -90,
            max: 90
         },
         longitude: {
            type: mongoose.Types.Decimal128,
            min: -180,
            max: 180
         }
      },
      addressLine1: {
         type: String,
         require: true
      },
      addressLine2: String,
      zipCode: {
         type: Number,
         min: 0,
         validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
         },
         require: true
      },
      city: {
         type: String,
         require: true
      },
      state: {
         type: String	//china has provinces not states
      },
      country: {
         type: String,
         require: true
      },
      specialInstruction: String
   },
   personOfContact: {
      firstName: {
         type: String,
         require: true
      },
      lastName: {
         type: String,
         require: true
      },
      email: {
         type: String,
         require: true,
         validate: {
            validator: function (v) {
               var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
               return emailRegex.test(v);
            },
            message: 'enter valid email id'
         }
      },
      phoneCode: {
         type: String,
         require: true
      },
      phoneNumber: {
         type: Number,
         require: true,
         validate: {
            validator: function (v) {
               return /^$|^\d{10}$/.test(v);
            },
            message: '{VALUE} is not a valid 10 digit number!'
         }
      },
      profileImage: String
   },
   active: {
      type: Boolean,
      default: false
   },
   termsAndCondition: {
      paymentTerms: {
         type: String,
         require: true
      },
      shippingTerms: {
         type: String,
         require: true
      }
   }
}, { timestamps: true });

module.exports = mongoose.model('Supplier', supplierSchema);