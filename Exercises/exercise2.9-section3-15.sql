Select	productid, 
		productname, 
        (UnitPrice * UnitsInStock) AS InventoryValue
FROM products
ORDER BY InventoryValue DESC, ProductName;