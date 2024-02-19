// import React, { useState } from 'react';
// import { Box, Toolbar, IconButton, Typography, Menu, Button, Tooltip, MenuItem } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import logo from '../../../Assets/Images/logo.png';
// import profile from '../../../Assets/Images/Profile.png'
// import Chat from "../Message/Chat"
// import Booking from '../Message/Booking'
// import PremiumBooking from '../Message/PremiumBooking'


// interface User {
//   _id: string;
//   name: string;
//   email: string;
//   password: string;
//   profilePic: string;
// }

// interface ResponsiveChatProps {
//   user: User
// }

// const pages = ['Conversations', 'My Bookings', 'Availability','PremiumBooking','My Bookings'];
// const settings = ['Account Dashboard', 'Change Password', 'Logout'];

// const Navbar: React.FC<ResponsiveChatProps> = ({ user }) => {
//   const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
//   const [selectedMenu, setSelectedMenu] = useState<string>('');

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const handleMenuItemClick = (menuItem: string) => {
//     setSelectedMenu(menuItem);
//     handleCloseNavMenu(); // close the menu after selecting an item
//   };

//   return (
//     <>
//       <div>
//         <Toolbar sx={{ backgroundColor: '#fff', pl: '10px', pr: '10px' }} disableGutters>
//           <img src={logo} alt="logo" />

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit">
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}>
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={() => handleMenuItemClick(page)}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={() => handleMenuItemClick(page)}
//                 sx={{
//                   my: 2,
//                   color: '#73787E',
//                   display: 'block',
//                   textTransform: 'none',
//                   padding: '10px 24px',
//                   ml: '20px',
//                   fontSize: '20px',
//                   backgroundColor: selectedMenu === page ? '#D3EDCE' : 'inherit',
//                   borderRadius: '12px',
//                 }}>
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <img src={profile} alt="profile" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}>
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>

//         {selectedMenu === 'Conversations' && <Chat user={user} />}
//         {selectedMenu === 'My Bookings' && <Booking/>}
//         {selectedMenu === 'PremiumBooking' && <PremiumBooking/>}
        
//       </div>
//     </>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../../Assets/Images/logo.png';
// import './Navbar.css'
// const Header = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const handleNavOpen = () => {
//     setIsNavOpen(true);
//   };

//   const handleNavClose = () => {
//     setIsNavOpen(false);
//   };

//   return (
//     <header className="navbar">
//       <nav className="navbar">
//         <div className="container-fluid">
        
//           <button className="navbar-toggler" onClick={handleNavOpen} type="button">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//         </div>
//       </nav>
//       <div id="mySidenav" className={`sidenav ${isNavOpen ? 'open' : ''}`}>
//         <a href="javascript:void(0)" className="closebtn" onClick={handleNavClose}>&times;</a>
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link to="/premium-filter-dash" className="nav-link">Feed</Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/premium-roster-dash" className="nav-link">My Roster</Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/premium-chat" className="nav-link">Conversations</Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/premium-booking-list" className="nav-link">Bookings</Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/premium-profile-plan" className="nav-link">Availability</Link>
//           </li>
//         </ul>
//         <form className="search-box">
//           <div className="form-group">
//             <input className="form-control" type="search" placeholder="Search Talent" />
//             <span className="fa fa-search" aria-hidden="true"></span>
//           </div>
//         </form>
//         <div className="profile-info">
//           <ul>
//             <li className="button-dropdown">
//               <a href="javascript:void(0)" className="dropdown-toggle">
//                 <img src="assets/images/profile.png" alt="demo" />
//               </a>
//               <ul className="dropdown-menu">
//                 <li>
//                   <Link to="/premium-view-profile"><img src="assets/images/profile.svg" alt="icon" />Account Dashboard</Link>
//                 </li>
//                 <li>
//                   <Link to="/premium-profile-change-password"><img src="assets/images/lock.svg" alt="icon" />Change Password</Link>
//                 </li>
//                 <li>
//                   <Link to="/signin"><img src="assets/images/logout.svg" alt="icon" />Log Out</Link>
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import { Box, Toolbar, IconButton, Typography, Menu, Button, Tooltip, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../../Assets/Images/logo.png';
import profile from '../../../Assets/Images/Profile.png';
import Chat from "../Message/Chat";
import Booking from '../Message/Booking';
import PremiumBooking from '../Message/PremiumBooking';
import './Navbar.css';

interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  profilePic: string;
}

interface ResponsiveChatProps {
  user: User;
}

const pages = ['Conversations', 'My Bookings', 'Availability', 'PremiumBooking', 'My Bookings'];
const settings = ['Account Dashboard', 'Change Password', 'Logout'];

const Navbar: React.FC<ResponsiveChatProps> = ({ user }) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [selectedMenu, setSelectedMenu] = useState<string>('');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>('');

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
    setActiveItem(menuItem);
    handleCloseNavMenu(); // close the menu after selecting an item
  };

  const handleNavOpen = () => {
    setIsNavOpen(true);
  };

  const handleNavClose = () => {
    setIsNavOpen(false);
  };

  const handleNavigation = (page: string) => {
    setSelectedMenu(page);
    setActiveItem(page);
    handleNavClose(); // close the navigation drawer after selecting an item
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
              onClick={handleNavOpen}
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
                  '&:hover': {
                    backgroundColor: '#D3EDCE',
                  },
                }}
                className={activeItem === page ? 'active-item' : ''}
              >
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
        {selectedMenu === 'My Bookings' && <Booking />}
        {selectedMenu === 'PremiumBooking' && <PremiumBooking />}
      </div>
   
      <header className="navbar">

        <div id="mySidenav" className={`sidenav ${isNavOpen ? 'open' : ''}`}>
          <a href="javascript:void(0)" className="closebtn" onClick={handleNavClose}>&times;</a>
          <ul className="navbar-nav">
            {pages.map((page, index) => (
              <li className="nav-item" key={index}>
                <button
                  className={`active-item ${activeItem === page ? 'active' : ''}`}
                  onClick={() => handleNavigation(page)}>{page}</button>
              </li>
            ))}        
          </ul>
          <form className="search-box">
            <div className="form-group">
              <input className="form-control" type="search" placeholder="Search Talent" />
              <span className="fa fa-search" aria-hidden="true"></span>
            </div>
          </form>
          <Box sx={{ padding:'10px' }}>
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
        </div>
      </header>
    </>
  );
};

export default Navbar;
