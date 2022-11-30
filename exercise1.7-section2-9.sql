SELECT ProductID, ProductName, UnitPrice,UnitsInStock
FROM northwind.products 
WHERE UnitsInStock <= 0 
AND UnitsOnOrder > 0
ORDER BY ProductName;