select orders.OrderID, orders.ShipName, orders.ShipAddress, shippers.CompanyName, ShipCountry
from orders
join shippers on shipvia = shippers.ShipperID
where orders.ShipCountry = "Germany"