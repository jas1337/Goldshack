const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);

//Configuration file
const config = require('./config/database');
//Port number
const port = 3000;
//  process.env.PORT || 8080;

const app = express();
const users = require('./routes/users');
const items = require('./routes/items');
const orders = require('./routes/orders');

// GalleryItem = require('./models/galleryItem');

// Connect to MongoDB
mongoose.connect(config.database);
//Log on connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database :' + config.database);
});
//Log on error
mongoose.connection.on('error', (err) => {
  console.log('Database error :' + err);
});


//Static folder for client-side files
app.use(express.static(path.join(__dirname, '/src/assets')));

//Use CORS Middleware. Allows communication to API from different Port
app.use(cors());
//Use Body Parser Middleware
app.use(bodyParser.json());

// app.use(session({
//     secret: config.secret,
//     store: new MongoStore({ mongooseConnection: mongoose.connection, ttl: 2 * 24 * 60 * 60 })
// }));

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/users', users);
app.use('/items', items);
app.use('/orders', orders);

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// })

app.listen(port, () => console.log("Server running on port :" + port));
