"use strict";

const pg = require("pg");
const pool = new pg.Pool({
    user: "postgres",
    password: "password",
    host: "localhost",
    port: 5432,
    //DON'T FORGET TO CHANGE THE DATABASE ***
    database: "ExpressShopDB",
    ssl: false
});

module.exports = pool;