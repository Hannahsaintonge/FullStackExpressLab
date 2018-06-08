"use strict";

const express = require("express");
const pg = require("pg");
const pool = require("../pg-connection-pool");
const cartRouter = express.Router();

//get 
cartRouter.get("/items", (req, res) => {
  pool.query("SELECT * FROM ShoppingCart ORDER BY id").then((result) => {
    res.send(result.rows);
  });
});

//post
cartRouter.post("/items", (req, res) => {
  pool.query("INSERT INTO ShoppingCart(product, price, quantity) VALUES($1::text, $2::int, $3::int)", 
  [req.body.product, req.body.price, req.body.quantity])
    .then(() => {
      pool.query("SELECT * FROM ShoppingCart ORDER BY id").then((result) => {
        res.send(result.rows);
      });
    });
  });

  //delete
  cartRouter.delete("/items/:id", (req, res) => {
    pool.query("DELETE FROM ShoppingCart WHERE id=$1::int", [req.params.id])
      .then(() => {
        pool.query("SELECT * FROM ShoppingCart ORDER BY id").then((result) => {
          res.send(result.rows);
        });
      });
  });

  //put
  cartRouter.put("/items/:id", (req, res) => {
    pool.query("UPDATE ShoppingCart SET product=$1::text, price=$2::int, quantity=$3::int WHERE id=$4::int",
     [req.body.product, req.body.price, req.body.quantity, req.params.id]).then(() => {
       pool.query("SELECT * FROM ShoppingCart ORDER BY id").then((result) => {
         res.send(result.rows);
       })
     })
  });

//export the router object
module.exports = cartRouter;