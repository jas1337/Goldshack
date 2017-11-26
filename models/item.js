const mongoose = require('mongoose');
const config = require('../config/database');

// Item Schema
const ItemSchema = mongoose.Schema({

    // _id: {
    //     type: Number
    // },
    brand: {
        type: String
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    sizes: {
        // type: [{String,Number}]
    },
    imgs: {
        type: [String]
    },
    details: {
        type: [String]
    },
    category: {
        type: String,
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
    Item.find({ 'category': category }, callback);
}

module.exports.getItemById = function (_id, callback) {

    if (mongoose.Types.ObjectId.isValid(_id)) {
        Item.findById(_id, callback);
    } else{
        console.log("Item not found");
    }
}

module.exports.getItems = function (callback) {
    Item.find(callback);
}

