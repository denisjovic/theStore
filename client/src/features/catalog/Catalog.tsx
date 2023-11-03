import React, { useEffect, useState } from "react";
import { Product } from "../../types/product";
import { Button } from "@mui/material";
import ProductList from "./ProductList";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  const url = "http://localhost:5000/api/products";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <React.Fragment>
      <ProductList products={products} />
    </React.Fragment>
  );
}
