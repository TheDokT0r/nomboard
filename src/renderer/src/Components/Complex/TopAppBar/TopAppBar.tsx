import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import useAppStates from "@renderer/Stores/appStore";

export default function TopAppBar() {
  const { theme, switchTheme } = useAppStates();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" fontFamily="monospace">
            NomBoard
          </Typography>

          <IconButton onClick={switchTheme} edge="end">
            {theme === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
