select orderid, (
	select CONCAT(customers.CompanyName, ", ", customers.ContactName) from customers where customers.customerid = orders.CustomerID
) AS NAME FROM orders
WHERE orders.orderid = 10266