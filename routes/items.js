const express = require('express');
const router = express.Router();
const Item = require('../models/item');
const mongoose = require('mongoose');

// add or delete opinions
router.put('/updateOpinions/:id', function (req, res, next) {
  Item.update({
    _id: req.params.id
  }, {
    $set: {
      opinions: req.body.opinions
    }
  }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/updateAvailability/:id', function (req, res, next) {
  Item.update({
    _id: req.params.id
  }, {
    $set: {
      sizes: req.body.sizes
    }
  }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// Add item to gallery
router.post('/addItem', (req, res, next) => {

  let newItem = new Item({
    brand: req.body.brand,
    name: req.body.name,
    price: req.body.price,
    sizes: req.body.sizes,
    imgs: req.body.imgs,
    details: req.body.details,
    category: req.body.category,
    subcategory: req.body.subcategory,
    opinions: req.body.opinions
  });

  Item.addItem(newItem, (err, user) => {
    if (err) {
      res.json({
        success: false,
        msg: 'Failed to add item'
      });
    } else {
      res.json({
        success: true,
        msg: 'Item added'
      });
    }
  });
});

router.put('/updateAvailability/:id', function (req, res, next) {
  Item.update({
    _id: req.params.id
  }, {
    $set: {
      sizes: req.body.sizes
    }
  }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// load  items by category
router.get('/getItemByCat/:category', (req, res) => {
  Item.getItemByCat(req.params.category, (err, items) => {
    if (err) throw err;
    res.json(items);
  });
});

// load single item by ID
router.get('/getItemById/:_id', (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params._id)) {
    Item.getItemById(req.params._id, (err, item) => {
      if (err) throw err;
      res.json(item);
    })
  } else {
    return res.json({
      notFound: true,
      msg: 'Item does not exist in the database'
    });
  }
});
module.exports = router;
