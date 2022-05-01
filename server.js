const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(__dirname + "/dist/Issue-Tracker"));
app.listen(process.env.PORT || 8081);

app.get("", function (req, res) {
  res.sendFile(path.join(__dirname + "Issue-Tracker/dist/index.html"));
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "Issue-Tracker/dist/index.html"));
});
