const express = require('express');
const { default: mongoose } = require('mongoose');
const monggose = require('mongoose');
const app = express ();

const dbConnect = async () =>{
    mongoose.connect('mongodb://localhost:27017/e-comm');
    const productSchema = mongoose.Schema( {} );
    const product = mongoose.model("product",productSchema);
    const data = await product.find();
    console.log(data);
}


app.listen(5000); 

dbConnect ();