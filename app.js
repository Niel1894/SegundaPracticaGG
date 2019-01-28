const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const errorHandler = require('errorhandler');
const app = express();

dotenv.load({ path: '.env' });

app.use(logger('dev'));

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI,{ useNewUrlParser: true, connectWithNoPrimary: true });
mongoose.connection.on('error', () => {
	console.log(' MongoDB connection error. Please make sure MongoDB is running.');
	process.exit();
});

app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(cors());

//routers folders
const homeRoutes = require('./routes/home');
const userRoutes = require('./routes/user');
const productoRoutes = require('./routes/product');
const providerRoutes = require('./routes/provider');
const ticketRoutes = require('./routes/ticket');

app.use('/', homeRoutes);
app.use('/usuarios', userRoutes);
app.use('/productos', productoRoutes);
app.use('/provider', providerRoutes);
app.use('/ticket', ticketRoutes );

module.exports = app;