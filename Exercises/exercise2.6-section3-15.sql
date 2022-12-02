SELECT CategoryID, avg(UnitPrice) as NumberOfProduct
 FROM Products
 GROUP BY CategoryID