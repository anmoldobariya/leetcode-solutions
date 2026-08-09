-- Last updated: 8/9/2026, 10:28:21 AM
-- Write your PostgreSQL query statement below
SELECT p.firstname AS "firstName", p.lastname AS "lastName", a.city, a.state
FROM Person p
LEFT JOIN Address a ON a.personId = p.personId