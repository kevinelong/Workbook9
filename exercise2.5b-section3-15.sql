SELECT ProductName, UnitPrice FROM products WHERE UnitPrice = (
	SELECT max(UnitPrice) as MostExpensiveItemPrice
	FROM products 
)
