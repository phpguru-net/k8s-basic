const db = require("./db");
const EventModel = require("./event_model");

(async () => {
  await db.init();
  await EventModel.seedEvents();
  process.exit(0);
})();
