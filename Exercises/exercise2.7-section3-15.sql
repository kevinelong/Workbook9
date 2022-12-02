SELECT CategoryID, avg(UnitPrice) as AveragePriceForCategory
 FROM Products
 GROUP BY CategoryID