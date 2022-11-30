select suppliers.CompanyName, productname, unitprice
from products
join suppliers on products.SupplierID = suppliers.SupplierID
where unitprice > 75
order by productname