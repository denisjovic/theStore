import { AppBar, Toolbar, Typography, Switch } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";

interface Props {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ toggleDarkMode, darkMode }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">TheStore</Typography>
        <Switch
          checked={darkMode}
          onChange={toggleDarkMode}
          checkedIcon={<ModeNightIcon />}
          icon={<LightModeIcon />}
        />
      </Toolbar>
    </AppBar>
  );
}
