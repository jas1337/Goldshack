const mongoose = require('mongoose');
// const config = require('../config/database');

// Item Schema
const OrderSchema = mongoose.Schema({


  userId: {
    type: String
  },
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
  fullAddress: {},
  status: {
    type: String,
    default: "realization"
  }
});

const Order = module.exports = mongoose.model('Order', OrderSchema);

module.exports.addOrder = (order, callback) => {
  Order.create(order, callback);
}

module.exports.getOrdersByUserId = function (userId, callback) {
  Order.find({
    'userId': userId
  }, callback);
}
