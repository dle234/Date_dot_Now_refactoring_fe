const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
nunjucks.configure("view", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njs");

app.use(express.static("./"));
app.get("/contentLook/:id", function (req, res) {
  var pageid = req.params["id"];
  console.log("pageid:", pageid);

  res.render("index");
});

app.listen(3000, () => {
  console.log("server running...");
});
