SELECT day, count(*) as total_assignments 
FROM assignments WHERE assignments > 10
GROUP BY day
ORDER BY day;