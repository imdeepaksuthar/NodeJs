const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.PORT || 3000


app.listen(port, ()=>{
    console.log(`server start on port = `,port);
})