const nodePath = require("node:path");
const express = require("express");
const app = express();

const RTCHAT_URL = "https://rtchat-a7ul.onrender.com/"

app.use(express.static(nodePath.resolve(__dirname, "./public")));

app.get("/rtchat/websocket-csrf", (req, res) => {
  res.sendFile(nodePath.resolve(__dirname, "./rtchat.websocket.csrf.html"));
});

app.get("/rtchat/csrf", async (req, res) => {
  res.sendFile(nodePath.resolve(__dirname, "./rtchat.csrf.html"));
});

// For Wizer Challenge #48
app.get("/challenge48", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script src="/script.js" />
</body>
</html>    
`);
});
// END for Wizer Challenge 48

app.get("*", (req, res) => {
  res.status(404).send("not found");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('server listening on port', port);
});