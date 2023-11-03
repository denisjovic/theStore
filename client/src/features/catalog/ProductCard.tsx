import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import { Product } from "../../types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <ListItem key={product.id}>
      <ListItemAvatar>
        <Avatar src={product.pictureUrl} />
      </ListItemAvatar>
      <ListItemText>
        {product.name} - {product.price}
      </ListItemText>
    </ListItem>
  );
}
