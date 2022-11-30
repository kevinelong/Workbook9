select 	productid as id, 
		productname as name, 
        unitprice as price, 
        categories.CategoryName as category
from products
join categories on products.CategoryID = categories.CategoryID
where unitprice = (
	select max(unitprice) from products
)