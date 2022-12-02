select CategoryName, productname
from products
join categories on products.CategoryID = categories.CategoryID
order by CategoryName, productname