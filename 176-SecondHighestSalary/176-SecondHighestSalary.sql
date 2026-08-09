-- Last updated: 8/9/2026, 10:28:13 AM
-- Write your PostgreSQL query statement below
SELECT (
    SELECT DISTINCT salary
    FROM employee
    ORDER BY salary DESC
    LIMIT 1 OFFSET 1
) AS "SecondHighestSalary"