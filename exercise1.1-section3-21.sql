select ProductName from products where unitprice = (
	select max(unitprice) from products
)
