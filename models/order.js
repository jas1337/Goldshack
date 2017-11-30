const mongoose = require('mongoose');
// const config = require('../config/database');

// Item Schema
const OrderSchema = mongoose.Schema({

  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  shoppingCart: {
    type: Array
  },
  totalPrice: {
    type: Number
  },
  fullAddress: {}
});


const Order = module.exports = mongoose.model('Order', OrderSchema);

module.exports.addOrder = (order, callback) => {
  Order.create(order, callback);
}

module.exports.getOrdersByUserEmail = function (email, callback) {
  Order.find({
    'email': email
  }, callback);
}

// module.exports.getItemByUser = function (_id, callback) {

//   if (mongoose.Types.ObjectId.isValid(_id)) {
//     Item.findById(_id, callback);
//   } else {
//     console.log("Item not found");
//   }
// }

// module.exports.getItems = function (callback) {
//   Item.find(callback);
// }
