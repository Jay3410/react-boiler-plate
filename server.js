const express = require("express");
const path = require("path");

console.log(
  path.join(__dirname, "src", "index.js"),
  path.join(__dirname, "public")
);
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => console.log("server is up"));
