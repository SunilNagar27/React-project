const express = require('express');
require("./DB/config");
const user = require("./DB/user");
const app = express();

app.use(express.json());

app.post("/register", async (req,resp) =>{
   let User = new user(req.body);
   let result = await User.save();
   resp.send(result);
});

app.listen(5000); 