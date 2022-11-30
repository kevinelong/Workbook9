SELECT ProductName, CompanyName
FROM products 
JOIN suppliers ON products.SupplierID =suppliers.SupplierID
WHERE CompanyName = "Tokyo Traders";