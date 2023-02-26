const express = require('express');
require("./DB/config");
const user = require("./DB/user");
const Product = require("./DB/product")
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
   let User = new user(req.body);
   let result = await User.save();
   result = result.toObject();
   delete result.pass;
   resp.send(result);
});

app.post("/add-product", async (req, resp) => {
   let data = new Product(req.body);
   let result = await data.save();
   resp.send(result);
});

app.get("/Products", async (req, resp) => {
   let products = await Product.find();
   if (products.length > 0) {
   return resp.send(products);
   }
   return resp.send({ result: "No Products Found..." })
});


app.post("/login", async (req, resp) => {
   if (req.body.pass && req.body.email) {
      let result = await user.findOne(req.body).select("-pass")
      if (result) {
        resp.send(result);
      }
      else {
         resp.send({ result: "Not found" });
      }
   }
   else {
      resp.send({ result: "Not found" });
   }
})





app.listen(5000); 