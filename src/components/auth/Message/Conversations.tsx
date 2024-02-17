import React, { useState } from 'react';
import { Box, Toolbar, IconButton, Typography, Menu, Button, Tooltip, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../../Assets/Images/logo.png';
import profile from '../../../Assets/Images/Profile.png'
import Chat from "../Message/Chat"
import Booking from '../Message/Booking'
import PremiumBooking from '../Message/PremiumBooking'


interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  profilePic: string;
}

interface ResponsiveChatProps {
  user: User
}

const pages = ['Conversations', 'My Bookings', 'Availability','PremiumBooking'];
const settings = ['Account Dashboard', 'Change Password', 'Logout'];

const Navbar: React.FC<ResponsiveChatProps> = ({ user }) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [selectedMenu, setSelectedMenu] = useState<string>('');

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenuItemClick = (menuItem: string) => {
    setSelectedMenu(menuItem);
    handleCloseNavMenu(); // close the menu after selecting an item
  };

  return (
    <>
      <div>
        <Toolbar sx={{ backgroundColor: '#fff', pl: '10px', pr: '10px' }} disableGutters>
          <img src={logo} alt="logo" />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleMenuItemClick(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleMenuItemClick(page)}
                sx={{
                  my: 2,
                  color: '#73787E',
                  display: 'block',
                  textTransform: 'none',
                  padding: '10px 24px',
                  ml: '20px',
                  fontSize: '20px',
                  backgroundColor: selectedMenu === page ? '#D3EDCE' : 'inherit',
                  borderRadius: '12px',
                }}>
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <img src={profile} alt="profile" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>

        {selectedMenu === 'Conversations' && <Chat user={user} />}
        {selectedMenu === 'My Bookings' && <Booking/>}
        {selectedMenu === 'PremiumBooking' && <PremiumBooking/>}
      </div>
    </>
  );
};

export default Navbar;
