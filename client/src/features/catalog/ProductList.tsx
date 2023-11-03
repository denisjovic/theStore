import { List } from "@mui/material";
import { Product } from "../../types/product";
import ProductCard from "./ProductCard";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <List>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </List>
  );
}
