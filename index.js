const nodePath = require("node:path");
const express = require("express");
const app = express();

const RTCHAT_URL = "https://rtchat-a7ul.onrender.com/"

app.get("/rtchat/websocket-csrf", (req, res) => {
  res.sendFile(nodePath.resolve(__dirname, "./rtchat.websocket.csrf.html"));
});

app.get("/rtchat/csrf", async (req, res) => {
  res.sendFile(nodePath.resolve(__dirname, "./rtchat.csrf.html"));
});

app.get("/script.js", (req, res) => {
  // For Wizer CTF Challenge #48
  res.setHeader("Content-Type", "application/javascript");
  res.send("alert('Wizer');");
});

app.get("*", (req, res) => {
  res.status(404).send("not found");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('server listening on port', port);
});