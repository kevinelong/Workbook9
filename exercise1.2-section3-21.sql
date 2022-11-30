select orderid, ShipName, ShipAddress, shipvia from orders where orders.ShipVia = (
	select shipperid from shippers WHERE CompanyName = "Federal Shipping"
)