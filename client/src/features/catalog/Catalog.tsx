import React from "react";
import { Product, AddProducts } from "../../types/product";
import { Button } from "@mui/material";
import ProductList from "./ProductList";

export default function Catalog({
  products,
  addProducts,
}: {
  products: Product[];
  addProducts: AddProducts;
}) {
  const tempId = Math.floor(Math.random() * 10000);
  const newProduct = {
    id: tempId,
    name: `product_${tempId}`,
    price: Math.floor(Math.random() * 8788),
  };
  return (
    <React.Fragment>
      <Button variant="contained" onClick={() => addProducts(newProduct)}>
        Add product
      </Button>
      <ProductList products={products} />
    </React.Fragment>
  );
}
