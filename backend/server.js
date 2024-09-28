const express = require('express');
const cors = require('cors');
const bodyparser  = require('body-parser');
require('dotenv').config();

const app = express();
const PORT  = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(bodyparser.json());
app.use(express.json());

//Routes
// const apiroute = require('./routes/api');
// app.use('/', apiroute);

//Start server
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});