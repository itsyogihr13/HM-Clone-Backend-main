const express = require("express");

// const ejs = require("ejs")

const connect = require("./configs/db");

const womenController = require("./controllers/womens.controller");
const menController = require("./controllers/mens.controller");
const kidController = require("./controllers/kids.controller");

const app = express();
app.use(express.json());

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/index", (req, res) => {
    return res.render("index");
  });

  app.get("/signIn", (req, res) => {
    return res.render("signIn");
  });

  app.get("/signUp", (req, res) => {
    return res.render("signUp");
  });

  app.get("/cart", (req, res) => {
    return res.render("cart");
  });

  app.get("/customer", (req, res) => {
    return res.render("customer");
  });
  
  app.get("/checkout", (req, res) => {
    return res.render("checkout");
  });
  app.get("/ladies", (req, res) => {
    return res.render("ladies");
  });
  app.get("/gents", (req, res) => {
    return res.render("gents");
  });
  app.get("/baby", (req, res) => {
    return res.render("baby");
  });
  app.get("/children", (req, res) => {
    return res.render("children");
  });
  app.get("/divide", (req, res) => {
    return res.render("divide");
  });
  app.get("/sale", (req, res) => {
    return res.render("sale");
  });
  app.get("/sustainability", (req, res) => {
    return res.render("sustainability");
  });

app.use('/women', womenController);
app.use('/kid', kidController);
// app.use('/women/:id', womenController);

app.use('/men', menController);
app.use('/men/:id', menController);

app.listen(1313, async()=>{
    await connect();
    console.log("Listining on port 1313")
});

// onClick = window.location.href = `/route/${mongo._id}`

