const express = require("express");
const app = express();

app.get("/rtchat/csrf", (req, res) => {
	res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script>
    const ws = new WebSocket("wss://rtchat-a7ul.onrender.com/");
    ws.onopen(event => {
      console.log("opened!", {event});
    });
    ws.onmessage(event => {
      console.log("onmessage", {event});
    });
  </script>
</body>
</html>`);
});

app.get("*", (req, res) => {
  res.status(404).send("not found");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('server listening on port', port);
});