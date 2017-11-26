const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');




// register new user
router.post('/register', (req, res, next) => {
    if (req.body.firstName &&
        req.body.lastName &&
        req.body.email &&
        req.body.password &&
        req.body.confirmPassword
    ) {
        //passwords compare
        if (req.body.password !== req.body.confirmPassword) {
            var err = new Error('Passwords do not match.');
            err.status = 400;
            return next(err);
        }
        //create new user object
        let newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            lastAddress: [],
            shoppingCart: [],
            orderHistory: [],
            addressList: [],
        });

        User.addUser(newUser, (err, user) => {
            if (err) {
                res.json({ success: false, msg: 'Failed to register user' });
            } else {
                res.json({ success: true, msg: 'User registered' });
            }
        });

    } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
    }

});

// authenticate on login
router.post('/authenticate', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;


    User.getUserByEmail(email, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: 'User not found' });
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800
                });

                res.json({
                    success: true,
                    token: 'bearer ' + token,
                    user: {
                        id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        shoppingCart: user.shoppingCart,
                        lastAddress: user.lastAddress,
                        orderHistory: user.orderHistory,
                        addressList: user.addressList
                    }
                });
            } else {
                return res.json({ success: false, msg: 'Wrong password' });
            }
        });
    });
});


//updates user.shoppingCart
router.put('/updateCart/:id', function (req, res, next) {
    User.update({ _id: req.params.id }, { $set: { shoppingCart: req.body.shoppingCart } }, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

//updates user.addressList
router.put('/setLastAddress/:id', function (req, res, next) {
    User.update({ _id: req.params.id }, { $set: { lastAddress: req.body.lastAddress } }, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

//updates user.addressList
router.put('/updateAddressList/:id', function (req, res, next) {
    User.update({ _id: req.params.id }, { $set: { addressList: req.body.addressList } }, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({
        user: {
            id: req.user._id,
            firstName: req.user.firstName,
            lastName: req.user.lastName,
            email: req.user.email,
            lastAddress: req.user.lastAddress,
            shoppingCart: req.user.shoppingCart,
            orderHistory: req.user.orderHistory,
            addressList: req.user.addressList
        }
    });
});

module.exports = router;