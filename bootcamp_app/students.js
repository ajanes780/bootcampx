const { Pool } = require("pg");

const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "bootcampx",
});

const cohort_name = process.argv[2];
const limit = process.argv[3];
const values = [`%${cohort_name}%`, limit];
const queryString = `SELECT students.id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name Like $1
LIMIT $2
`;
pool
  .query(queryString, values)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error("error", err.stack));