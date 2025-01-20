INSERT INTO test_cases (cis_string, description)
SELECT cis_string, 'Generated test case'
FROM (
    SELECT cis_string, ROW_NUMBER() OVER (ORDER BY NULL) AS rn
    FROM (
        SELECT DISTINCT cis_string 
        FROM cis_source
    )
) 
WHERE MOD(rn, 5) = 0 AND ROWNUM <= 10; -- Adjust the MOD value and limit as needed