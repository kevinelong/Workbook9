select orderid, (
	select CONCAT(FirstName, " ", LastName) from employees where employees.EmployeeID = orders.EmployeeID
) AS NAME FROM orders
WHERE orders.orderid = 10266