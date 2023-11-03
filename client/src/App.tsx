import { useEffect, useState } from "react";
import { Product } from "./types/product";
import Catalog from "./features/catalog/Catalog";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const url = "http://localhost:5000/api/products";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  function addProducts(newProduct: Product) {
    setProducts([...products, newProduct]);
  }

  return (
    <div>
      <h1>The Store</h1>
      <Catalog products={products} addProducts={addProducts} />
    </div>
  );
}

export default App;
