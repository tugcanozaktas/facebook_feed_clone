import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Notifications } from "@mui/icons-material";

const BottomNav = ({ value, setValue }) => {
  return (
    <Box
      bgcolor={"background.default"}
      sx={{
        width: "100%",
        display: { xs: "block", sm: "none" },
        position: "fixed",
        bottom: 0,
        top: "auto",
        zIndex: 9999,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Menu" icon={<MenuIcon />} />
        <BottomNavigationAction label="Feed" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Notifications"
          icon={<Notifications />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default BottomNav;
