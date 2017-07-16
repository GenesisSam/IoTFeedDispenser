var express = require("express");
var gate = require("./motor");
var app = express();

app.get("/feed", (req, res) => {
  gate.hatchOpen();
  console.log("hatch open");
  setTimeout(() => {
    gate.hatchClose();
    console.log("hatch close");
    res.send("feed done");
  }, 2000);
});

app.listen(3000, () => {
  gate.powerOn();
  console.log("App listening on port 3000");
});
