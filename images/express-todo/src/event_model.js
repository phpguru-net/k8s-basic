const db = require("./db");

const EventModel = {
  async getAllEvents() {
    sql = "SELECT * from events";
    return db.query(sql);
  },
  async createEvent(event) {
    query = `
        INSERT INTO events(name, description, location, dateTime, user_id)
        VALUES(?, ?, ?, ?, ?)`;
    values = [
      event.name,
      event.description,
      event.location,
      event.dateTime,
      event.userID,
    ];
    return db.query(query, values);
  },
  async seedEvents() {
    const events = [
      {
        name: "Event 1",
        description: "Description 1",
        location: "Location 1",
        dateTime: "2023-06-01 12:00:00",
        userID: 1,
      },
      {
        name: "Event 2",
        description: "Description 2",
        location: "Location 2",
        dateTime: "2023-06-02 13:00:00",
        userID: 2,
      },
      {
        name: "Event 3",
        description: "Description 3",
        location: "Location 3",
        dateTime: "2023-06-03 14:00:00",
        userID: 3,
      },
      {
        name: "Event 4",
        description: "Description 4",
        location: "Location 4",
        dateTime: "2023-06-04 15:00:00",
        userID: 4,
      },
      {
        name: "Event 5",
        description: "Description 5",
        location: "Location 5",
        dateTime: "2023-06-05 16:00:00",
        userID: 5,
      },
    ];

    return await Promise.all(events.map((e) => EventModel.createEvent(e)));
  },
};

module.exports = EventModel;
