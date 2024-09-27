const express = require('express')
const app = express();
app.use(express.json());

app.listen(3000, ()=>{
    console.log("connected to port 3000")
})