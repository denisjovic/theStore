import { useEffect, useState } from "react";
import { Product } from "./types/product";

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

  const tempId = Math.floor(Math.random() * 10000);
  const newProduct = {
    id: tempId,
    name: `product_${tempId}`,
    price: Math.floor(Math.random() * 8788),
  };

  return (
    <div>
      <h1>The Store</h1>
      <button onClick={() => addProducts(newProduct)}>Add product</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
