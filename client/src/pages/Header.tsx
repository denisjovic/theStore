import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  List,
  ListItem,
  IconButton,
  Badge,
  Box,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";

interface Props {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const middleLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

const navStyles = {
  color: "inherit",
  textDecoration: "none",
  typography: "h6",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "text.secondary",
  },
};

export default function Header({ toggleDarkMode, darkMode }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h6"
            component={NavLink}
            to="/"
            color="inherit"
            sx={navStyles}
          >
            TheStore
          </Typography>
          <Switch checked={darkMode} onChange={toggleDarkMode} />
        </Box>
        <List sx={{ display: "flex" }}>
          {middleLinks.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        <Box display={"flex"} alignItems={"center"}>
          <IconButton
            size={"large"}
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            component={Link}
            to="/basket"
          >
            <Badge badgeContent="4" color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <List sx={{ display: "flex" }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
