const express = require('express');
const router = express.Router();
const Order = require('../models/order');


// Add item to gallery
router.post('/addOrder', (req, res, next) => {

  let newOrder = new Order({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    date: req.body.date,
    shoppingCart: req.body.shoppingCart,
    totalPrice: req.body.totalPrice,
    fullAddress: req.body.fullAddress,
  });

  Order.addOrder(newOrder, (err, user) => {
    if (err) {
      res.json({
        success: false,
        msg: 'Failed to add order'
      });
    } else {
      res.json({
        success: true,
        msg: 'Order added'
      });
    }
  });
});

// load  items by category
router.get('/getOrdersByUserEmail/:email', (req, res) => {
  Order.getOrdersByUserEmail(req.params.email, (err, orders) => {
    if (err) throw err;
    res.json(orders);
  });
});

// // load single item by ID
// router.get('/getItemById/:_id', (req, res) => {
//   Item.getItemById(req.params._id, (err, item) => {
//     if (err) throw err;
//     res.json(item);
//   })
// });
module.exports = router;
