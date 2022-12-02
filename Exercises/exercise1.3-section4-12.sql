select 	productid as id, 
		productname as name, 
        unitprice as price, 
        suppliers.CompanyName as supplier, 
        categories.CategoryName as category
from products
join suppliers on products.SupplierID = suppliers.SupplierID
join categories on products.CategoryID = categories.CategoryID
order by ProductName