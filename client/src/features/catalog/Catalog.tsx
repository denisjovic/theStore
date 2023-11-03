import React from "react";
import { Product, AddProducts } from "../../types/product";

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
      <button onClick={() => addProducts(newProduct)}>Add product</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}
