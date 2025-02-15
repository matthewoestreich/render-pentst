const nodePath = require("node:path");
const express = require("express");
const app = express();

app.get("/rtchat/csrf", (req, res) => {
  res.sendFile(nodePath.resolve(__dirname, "./rtchat.csrf.html"));
});

app.get("*", (req, res) => {
  res.status(404).send("not found");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('server listening on port', port);
});