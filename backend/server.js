const express = require('express');
const cors = require('cors');
const bodyparser  = require('body-parser');
require('dotenv').config();

const app = express();
const PORT  = process.env.PORT || 5000;

//Middleware
const corsOpption = {
    origin: 'http://localhost:3000', //frontend URL
    optionsSuccessstatus : 200,
}
app.use(cors(corsOpption));
//Alternatively, Use Vite's Proxy (Preferred for Development)
app.use(bodyparser.json());
app.use(express.json());

//before API routes
const path = require('path');

app.use(express.static(path.join(__dirname, '../frontend/dist')));

//Handle SPA routing, return index.html for any unknown routes
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
})

//Routes
// const apiroute = require('./routes/api');
// app.use('/', apiroute);

//Start server
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});