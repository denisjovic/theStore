import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  List,
  ListItem,
  IconButton,
  Badge,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { NavLink } from "react-router-dom";
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

export default function Header({ toggleDarkMode, darkMode }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={NavLink}
          to="/"
          color="inherit"
          sx={{ textDecoration: "none" }}
        >
          TheStore
        </Typography>
        <Switch
          checked={darkMode}
          onChange={toggleDarkMode}
          checkedIcon={<ModeNightIcon />}
          icon={<LightModeIcon />}
        />
        <List sx={{ display: "flex" }}>
          {middleLinks.map(({ title, path }) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={{
                color: "inherit",
                typography: "h6",
                "&hover": {
                  color: "secondary.main",
                },
                "&.active": {
                  color: "text.secondary",
                },
              }}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        <IconButton size={"large"} edge="start" color="inherit" sx={{ mr: 2 }}>
          <Badge badgeContent="4" color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <List sx={{ display: "flex" }}>
          {rightLinks.map(({ title, path }) => (
            <ListItem
              component={NavLink}
              to={path}
              key={path}
              sx={{ color: "inherit", typography: "h6" }}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
}
