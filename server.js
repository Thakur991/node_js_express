const express = require("express");
const app = express();
const port = 3000;


app.get('/', (req, res)=>{
    res.send("<h1> Node js Express Demo </h1>  <h4>Message: Success</h4>  <p> version: 3.0</p>");
})


app.get('/products', (req, res)=>{
    res.send([
        {
            productId: "p01",
            price:"3000",
            productname:"Watch"
        },
        {
            productId: "p02",
            price:"4000",
            productname:"Laptop"
        },
        {
            productId: "p03",
            price:"5000",
            productname:"Camera"
        }
    ]);
})


app.listen(port, ()=>{
    console.log("App listening to " + port)
})