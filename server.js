//-----------------------////////
// Modules
//-----------------------////////
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
require('./Database/config')();
require('dotenv').config();
const app = express();
//-----------------------////////
// Environment Variables
//-----------------------////////
const { PORT, DB_STRING } = process.env;

//-----------------------////////
// Routes
//-----------------------////////
const gigsRoute = require('./Applications/cetamd/Routers/gigsPage');

//-----------------------////////
// Middleware
//-----------------------////////

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//-----------------------////////
// Route Handlers
//-----------------------////////
app.use('/api/cetamd', gigsRoute);
app.use('/api/cheese');
app.use('/api/tavern');

// Auth Route

// app.get("/", auth, (req,res)=> {
//     res.json(req.payload)
// })

//-----------------------////////
// The app is always listening
//-----------------------////////
app.listen(PORT, () => {
	console.log(`listening on ${PORT}`);
});
