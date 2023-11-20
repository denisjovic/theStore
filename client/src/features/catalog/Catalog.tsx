import React, { useEffect, useState } from "react";
import { Product } from "../../types/product";
import { Button } from "@mui/material";
import ProductList from "./ProductList";
import agent from "../../api/agent";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    agent.Catalog.list().then((products) => setProducts(products));
  }, []);

  return (
    <React.Fragment>
      <ProductList products={products} />
    </React.Fragment>
  );
}
