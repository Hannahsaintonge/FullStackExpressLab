"use strict";
//requiring express module
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const items = require("./routes/cart");


app.use(bodyParser.json());
app.use("/portal", items);
app.use(express.static(__dirname + "/public"));




let port = 8080;
app.listen(port, () => console.log(`App is listening on port ${port}.`));

