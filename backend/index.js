const express = require('express');
require("./DB/config");
const user = require("./DB/user");
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors());

app.post("/register", async (req,resp) =>{
   let User = new user(req.body);
   let result = await User.save();
   resp.send(result);
});

app.listen(5000); 