import {
  Button,
  Card,
  CardMedia,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  const url =
    "https://media.tenor.com/YJ3WjJVBjIQAAAAC/gandalf-i-have-no-memory-of-this-place.gif";
  return (
    <Container component={Paper}>
      <Typography gutterBottom variant="h3">
        Oops, nothing to see here!
      </Typography>
      <Card>
        <CardMedia
          sx={{
            height: 400,
            backgroundSize: "fill",
            bgcolor: "lightgrey",
          }}
          image={url}
        />
      </Card>
      <Button fullWidth component={Link} to="/catalog">
        Go back to catalog
      </Button>
    </Container>
  );
}
