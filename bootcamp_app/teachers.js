const { Pool } = require("pg");

const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "bootcampx",
});

const cohort_name = process.argv[2];
const values = [`%${cohort_name}%`];
const queryString = `
Select distinct teachers.name as teacher, cohorts.name as cohort
FROM assistance_requests
JOIN teachers ON  teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
ORDER BY teachers.name 
`;

pool
  .query(queryString, values)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error("error", err.stack));