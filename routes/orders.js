const express = require('express');
const router = express.Router();
const Order = require('../models/order');


// Add item to gallery
router.post('/addOrder', (req, res, next) => {

  let newOrder = new Order({
    userId: req.body.userId,
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
router.get('/getOrdersByUserId/:userId', (req, res) => {
  Order.getOrdersByUserId(req.params.userId, (err, orders) => {
    if (err) throw err;
    res.json(orders);
  });
});

module.exports = router;
