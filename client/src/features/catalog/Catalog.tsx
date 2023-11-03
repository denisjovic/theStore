import React from "react";
import { Product, AddProducts } from "../../types/product";
import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

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
      <List>
        {products.map((product) => (
          <ListItem key={product.id}>
            <ListItemAvatar>
              <Avatar src={product.pictureUrl} />
            </ListItemAvatar>
            <ListItemText>
              {product.name} - {product.price}
            </ListItemText>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" onClick={() => addProducts(newProduct)}>
        Add product
      </Button>
    </React.Fragment>
  );
}
