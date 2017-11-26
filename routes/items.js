const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Item = require('../models/item');

// add or delete opinions
router.put('/updateOpinions/:id', function (req, res, next) {
    Item.update({ _id: req.params.id }, { $set: { opinions: req.body.opinions } }, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

// // update available quantity
// router.put('/updateAvailable/:id', function (req, res, next) {

//     Item.update({ _id: req.params.id }, { $set: { opinions: req.body.opinions } }, function (err, post) {
//         if (err) return next(err);
//         res.json(post);
//     });
// });

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
            res.json({ success: false, msg: 'Failed to add item' });
        } else {
            res.json({ success: true, msg: 'Item added' });
        }
    });

});

// load all gallery items
router.get('/getItems', (req, res) => {

    Item.getItems((err, items) => {
        if (err) throw err;
        res.json(items);
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
    Item.getItemById(req.params._id, (err, item) => {
        if (err) throw err;
        res.json(item);

    })
});
module.exports = router;