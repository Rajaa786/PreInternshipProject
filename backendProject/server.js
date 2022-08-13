const express = require("express");
const app = express();
const path = require("path");
const port = 5000;

const data = require("./data.json");
// console.log(path.join(__dirname + "/public"));
app.use(express.static(path.join(__dirname + "/public")));

app.set("views", "./views");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/getJsonData", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
