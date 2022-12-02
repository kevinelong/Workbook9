Select supplierid, count(*) as QTY
From products
GROUP BY supplierid
having QTY >= 5
