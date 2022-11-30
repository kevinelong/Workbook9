select orders.OrderID, OrderDate, ShipName, ShipAddress, ProductName
from orders
join `order details` AS details ON details.OrderID = orders.OrderID
join products on details.ProductID = products.ProductID
where ProductName = "Sasquatch Ale"