import { Menu, MenuItem, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { routePath } from "../../constants/route";
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
const HeaderMenu = ({ open, handleClose }) => {
  const openMenu = Boolean(open);
  return (
    <Menu
      id="basic-menu"
      anchorEl={open}
      open={openMenu}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <StyledLink to={`${routePath.categories}?category=popular`}>
        <MenuItem onClick={handleClose}>Popular</MenuItem>
      </StyledLink>
      <StyledLink to={`${routePath.categories}?category=toprated`}>
        <MenuItem onClick={handleClose}>Top Rated</MenuItem>
      </StyledLink>
      <StyledLink to={`${routePath.categories}?category=upcoming`}>
        <MenuItem onClick={handleClose}>Upcoming</MenuItem>
      </StyledLink>
    </Menu>
  );
};

export default HeaderMenu;
