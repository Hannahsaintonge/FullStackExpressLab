"use strict";

const express = require("express");
const cartRouter = express.Router();

const items = [
    {
        product: "Cereal",
        price: 4,
        quantity: 2,
        id: 0
    },
    {
        product: "Ice Cream",
        price: 6,
        quantity: 1,
        id: 1
    },
    {
        product: "Coffee",
        price: 3,
        quantity: 1,
        id: 2
    },
    {
        product: "Cucumber",
        price: 1,
        quantity: 3,
        id: 3
    },
    {
        product: "Gummy Worms",
        price: 2,
        quantity: 1,
        id: 4
    }
];

let idCount = 6;

//get 
cartRouter.get("/items", (req, res) => {
 //the array from above
  res.send(items);
});

//post
cartRouter.post("/items", (req, res) => {
    console.log(req.body);
    items.push({
      product: req.body.product,
      price: req.body.price,
      quantity: req.body.quantity,
      id: idCount++
    });
    res.send(items);
  });

  //delete
  cartRouter.delete("/items/:id", (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    for (let item of items) {
      if (item.id == req.params.id) {
        items.splice(items.indexOf(item), 1);
      }
    }
    res.send(items);
  });

  //put
  cartRouter.put("/items/:id", (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    for (let item of items) {
      if (item.id == req.params.id) {
        items.splice(items.indexOf(item), 1, {
          product: req.body.product,
          price: req.body.price,
          quantity: req.body.quantity,
          id: item.id
        });
      }
    }
    res.send(items);
  });




//export the router object
module.exports = cartRouter;