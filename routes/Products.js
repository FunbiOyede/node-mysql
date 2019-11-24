const Route = require("express").Router();
const ProductsController = require("../controllers/controllers");

// get all products
Route.get("/products", ProductsController.get_all_products);

//updates product name
Route.put("/products/name/:id", ProductsController.update_product_name);

//updates product price
Route.put("/products/price/:id", ProductsController.update_product_price);

//updates product description
Route.put(
  "/products/description/:id",
  ProductsController.update_product_description
);
//updates product status
Route.put("/products/status/:id", ProductsController.update_product_status);

//creates new products
Route.post("/products", ProductsController.create_products);

Route.get("/products/name", ProductsController.get_product_name);

Route.get("/products/:id", ProductsController.get_product_id);

Route.delete("/products", ProductsController.delete_all_products);

Route.delete("/products/:id", ProductsController.delete_by_id);
module.exports = Route;
