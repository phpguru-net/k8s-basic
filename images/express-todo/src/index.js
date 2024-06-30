const express = require("express");
const db = require("./db");
const EventModel = require("./event_model");
const app = express();
const port = process.env.PORT || 1337;

require("dotenv").config();
console.log(process.env); // remove this after you've confirmed it is working
// connect db
db.init();

// Get the pod IP address
const podIpAddress = process.env.POD_IP || "undefined POD IP";

app.get("/", (req, res) => {
  res.send(`Hello from pod with IP address: ${podIpAddress}`);
});

app.get("/events", async (req, res) => {
  const events = await EventModel.getAllEvents();
  res.json(events);
});

app.get("/events/:eventId", async (req, res) => {
  const eventId = parseInt(req.params["eventId"]);
  const events = await EventModel.getAllEvents();
  const event = events.find((e) => e.id === eventId);
  res.json(event);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
