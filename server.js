"use strict";
var ordermodule = require("./modules/ordersModule");
require('dotenv').config();
const settings=require('./settings');

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));

// Home page
app.get("/", (req, res) => {
  res.render("index");
});



app.get("/checkout", (req, res) => {
  res.render("checkout");
});


app.post("/checkout", (req, res) => {

  let frmArrayData = String(decodeURI(req.body.formdata)).split("&");

  let frmJsonObjData = {};

  for(let key of frmArrayData) {
    let tempArr = key.split("=");

    //Here cell is a form field name (If you change form field name, please make change it here)
    if(tempArr[0] == "cell") {
      tempArr[1] = "+1" + tempArr[1];
    }

    frmJsonObjData[tempArr[0]] = tempArr[1];
  }

  console.log("body: " , frmJsonObjData);
  console.log("Order items: ", req.body.orderitems);

  res.send("Hemant");

/*
  const accountSid = settings.accountSid;
const authToken = settings.authToken;
const client = require('twilio')(accountSid, authToken);

client.messages
 .create({
    body: 'I am watching you Ryan...!',
    from: '+12267991623',
    to: cellno
  })
 .then(message => console.log(message.sid))
 .done();
*/
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
