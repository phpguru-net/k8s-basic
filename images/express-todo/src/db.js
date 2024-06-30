require("dotenv").config();
console.log(process.env); // remove this after you've confirmed it is working
const mysql = require("mysql2");
const connection = mysql.createConnection({
  uri: process.env.DB_URI || "mysql://root:123456@localhost/k8s",
});

const db = {
  init: async function () {
    await db.query(`
        CREATE TABLE IF NOT EXISTS events (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name TEXT NOT NULL,
            description TEXT NOT NULL,
            location TEXT NOT NULL,
            dateTime DATETIME NOT NULL,
            user_id INT
        );
    `);
  },
  query: function (sql, params) {
    return new Promise((resolve, reject) => {
      connection.execute(sql, params, function (err, results, fields) {
        if (err) {
          reject(err);
        }
        resolve(results);
      });
    });
  },
};

module.exports = db;
