import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Product } from "../../types/product";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const url = `http://localhost:5000/api/products/${id}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [url]);

  if (loading) return <h3>Loading...</h3>;
  if (!product) return <h3>Product not found</h3>;

  return <Typography variant="h2">{product.name}</Typography>;
}
