SELECT name, id, email, cohort_id
FROM students
WHERE end_date IS null
ORDER BY cohort_id