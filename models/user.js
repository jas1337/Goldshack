const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// User Schema
const UserSchema = mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  shoppingCart: {
    type: Array,
    default: []
  },
  // orderHistory: {
  //   type: Array,
  //   default: []
  // },
  addressList: {
    type: Array,
    default: []
  },
  lastAddress: {}
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserByEmail = function (email, callback) {
  const query = {
    email: email
  }
  User.findOne(query, callback);
}

module.exports.addUser = function (newUser, callback) {
  //Password hashing
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
}
