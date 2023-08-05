import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  InputBase,
} from "@mui/material";
import { Menu, BookmarkAdd, ExpandMore } from "@mui/icons-material";
import { logoURL } from "../../constants/constant";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import HeaderMenu from "./HeaderMenu";
import { routePath } from "../../constants/route";

const StyledToolbar = styled(Toolbar)`
  background: #121212;
  min-height: 56px !important;
  padding: 0px 115px !important;
  justify-content: space-between;
  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    & > p {
      font-size: 14px;
      font-weight: 600;
    }
  }
  & > * {
    padding: 0 16px;
  }

  & > p {
    font-size: 14px;
    font-weight: 600;
  }
`;

const InputSearchField = styled(InputBase)`
  background: #fff;
  border-radius: 3px;
  height: 30px;
  width: 55%;
`;

const Logo = styled("img")({
  width: 64,
});
const Header = () => {
  const [open, setOpen] = useState();
  const navigate = useNavigate();
  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Logo
          src={logoURL}
          alt="logo"
          onClick={() => navigate(routePath.home)}
        />
        <Box onClick={handleClick}>
          <Menu />
          <Typography>Menu</Typography>
        </Box>
        <HeaderMenu open={open} handleClose={handleClose} />
        <InputSearchField />
        <Typography>
          IMDb<Box component="span">Pro</Box>
        </Typography>
        <Box>
          <BookmarkAdd />
          <Typography>Watchlist</Typography>
        </Box>
        <Typography>Sign In</Typography>
        <Box>
          <Typography>EN</Typography>
          <ExpandMore />
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
