const express = require("express");
const app = express();
const port = process.env.PORT || 1337;

// Get the pod IP address
const podIpAddress = process.env.POD_IP || "IP not found";

app.get("/", (req, res) => {
  res.send(`Hello from pod with IP address: ${podIpAddress}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
