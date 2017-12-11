const mongoose = require('mongoose');

// Item Schema
const ItemSchema = mongoose.Schema({

  brand: {
    type: String
  },
  name: {
    type: String
  },
  price: {
    type: Number
  },
  sizes: {},
  imgs: {
    type: [String]
  },
  details: {
    type: [String]
  },
  category: {
    type: Array,
    default: [],
    lowercase: true
  },
  subcategory: {
    type: String
  },
  opinions: {
    type: Array,
    default: []
  }

});

const Item = module.exports = mongoose.model('Item', ItemSchema);

module.exports.addItem = (item, callback) => {
  Item.create(item, callback);
}

module.exports.getItemByCat = function (category, callback) {
  Item.find({
    'category': category
  }, callback);
}

module.exports.getItemById = function (_id, callback) {
  Item.findById(_id, (callback));
}
