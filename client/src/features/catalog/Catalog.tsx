import React, { useEffect, useState } from "react";
import { Product } from "../../types/product";
import ProductList from "./ProductList";
import agent from "../../api/agent";
import Loading from "../../components/Loading";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Catalog.list()
      .then((products) => setProducts(products))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading message="Loading products..." />;

  return (
    <React.Fragment>
      <ProductList products={products} />
    </React.Fragment>
  );
}
