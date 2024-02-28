import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import MailIcon from "@mui/icons-material/Mail";
import React, { useState } from "react";
import { Notifications } from "@mui/icons-material";

const StyledToobar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [openNotif, setOpenNotif] = useState(false);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <StyledToobar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            T DEV
          </Typography>
          <AllInclusiveIcon sx={{ display: { xs: "block", sm: "none" } }} />
          <Search>
            <InputBase placeholder="search" />
          </Search>
          <Icons>
            <Badge badgeContent={1} color="error">
              <MailIcon />
            </Badge>
            <Badge badgeContent={1} color="error">
              <Notifications />
            </Badge>
            <Avatar
              onClick={(e) => setOpenProfile(true)}
              src="pfp.jpeg"
              sx={{ width: 30, height: 30 }}
            />
          </Icons>
          <UserBox>
            <Avatar
              onClick={(e) => setOpenProfile(true)}
              src="pfp.jpeg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography variant="span">Tugcan</Typography>
          </UserBox>
        </StyledToobar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={openProfile}
          onClose={(e) => setOpenProfile(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Log out</MenuItem>
        </Menu>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={openNotif}
          onClose={(e) => setOpenNotif(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Log out</MenuItem>
        </Menu>
      </AppBar>
    </>
  );
};

export default Navbar;
