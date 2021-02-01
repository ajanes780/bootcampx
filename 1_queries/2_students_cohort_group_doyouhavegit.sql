SELECT name, id, email, phone
FROM students
WHERE github IS NULL
and end_date IS NOT NULL
ORDER BY cohort_id