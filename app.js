const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("./"));

app.get("/contentLook/:id", function (req, res) {
  var pageid = req.params["id"];
  console.log("pageid:", pageid);
  res.render("index");
});

app.listen(3000, () => {
  console.log("server running...");
});

