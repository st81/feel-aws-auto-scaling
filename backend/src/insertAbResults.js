const insertAbResults = (requests, concurrency, runningCount, takenTime) => {
  let results = null;

  const mysql = require("mysql");
  const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
  });

  connection.connect();

  const query = `
    INSERT INTO ab_results 
      (number_of_requests, number_of_concurrency, number_of_ecs_tasks, taken_time)
      VALUES (?, ?, ?, ?)
  `;
  connection.query(query, [requests, concurrency, runningCount, takenTime], function (
    error,
    results,
    fields
  ) {
    if (error) throw error;
  });

  connection.end();
  return results;
};

module.exports = insertAbResults;
