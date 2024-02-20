// import React, { useState } from 'react';
// import { Box, Toolbar, IconButton, Typography, Menu, Button, Tooltip, MenuItem, useMediaQuery } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import logo from '../../../Assets/Images/logo.png';
// import profile from '../../../Assets/Images/Profile.png';
// import Chat from "../Message/Chat";
// import Booking from '../Message/Booking';
// import PremiumBooking from '../Message/PremiumBooking';
// import './Navbar.css';

// interface User {
//   _id: string;
//   name: string;
//   email: string;
//   password: string;
//   profilePic: string;
// }

// interface ResponsiveChatProps {
//   user: User;
// }

// const pages = ['Conversations', 'My Bookings', 'Availability', 'PremiumBooking'];
// const settings = ['Account Dashboard', 'Change Password', 'Logout'];

// const Navbar: React.FC<ResponsiveChatProps> = ({ user }) => {
//   const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
//   const [selectedMenu, setSelectedMenu] = useState<string>('');
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [activeItem, setActiveItem] = useState<string>('');

//   const isMobileOrTablet = useMediaQuery('(max-width: 960px)');

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
//     setActiveItem(menuItem);
//     handleCloseNavMenu(); // close the menu after selecting an item
//   };

//   const handleNavOpen = () => {
//     setIsNavOpen(true);
//   };

//   const handleNavClose = () => {
//     setIsNavOpen(false);
//   };

//   const handleNavigation = (page: string) => {
//     setSelectedMenu(page);
//     setActiveItem(page);
//     handleNavClose(); // close the navigation drawer after selecting an item
//   };

//   return (
//     <>
//       <div>
//         <Toolbar sx={{ backgroundColor: '#fff', pl: '10px', pr: '10px' }} disableGutters>
        
//           <img src={logo} alt="logo" />

//           <Box sx={{ flexGrow: 1 }}>
//             <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//               {isMobileOrTablet && (
//                 <IconButton
//                   size="large"
//                   aria-label="account of current user"
//                   aria-controls="menu-appbar"
//                   aria-haspopup="true"
//                   onClick={handleNavOpen}
//                   color="inherit"
//                   sx={{ marginLeft: 'auto' }}>
//                   <MenuIcon />
//                 </IconButton>
//               )}
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorElNav}
//                 anchorOrigin={{
//                   vertical: 'bottom',
//                   horizontal: 'left',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'left',
//                 }}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{
//                   display: { xs: 'block', md: 'none' },
//                 }}>
//                 {pages.map((page) => (
//                   <MenuItem key={page} onClick={() => handleMenuItemClick(page)}>
//                     <Typography textAlign="center">{page}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>

//             <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//               {pages.map((page) => (
//                 <Button
//                   key={page}
//                   onClick={() => handleMenuItemClick(page)}
//                   sx={{
//                     my: 2,
//                     color: '#73787E',
//                     display: 'block',
//                     textTransform: 'none',
//                     padding: '10px 24px',
//                     ml: '20px',
//                     fontSize: '20px',
//                     backgroundColor: selectedMenu === page ? '#D3EDCE' : 'inherit',
//                     borderRadius: '12px',
//                     '&:hover': {
//                       backgroundColor: '#D3EDCE',
//                     },
//                   }}
//                   className={activeItem === page ? 'active-item' : ''}
//                 >
//                   {page}
//                 </Button>
//               ))}
//             </Box>
//           </Box>

//           <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'block' } }}>
//             <Tooltip title="Open settings">
//               {/* header profile image  */}
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
//         {selectedMenu === 'My Bookings' && <Booking />}
//         {selectedMenu === 'PremiumBooking' && <PremiumBooking />}
//       </div>
   
//       <header className="navbar">

//         <div id="mySidenav" className={`sidenav ${isNavOpen ? 'open' : ''}`}>
//           <a href="javascript:void(0)" className="closebtn" onClick={handleNavClose}>&times;</a>
//           <ul className="navbar-nav">
//             {pages.map((page, index) => (
//               <li className="nav-item" key={index}>
//                 <button
//                   className={`active-item ${activeItem === page ? 'active' : ''}`}
//                   onClick={() => handleNavigation(page)}>{page}</button>
//               </li>
//             ))}        
//           </ul>
//           <form className="search-box">
//             <div className="form-group">
//               <input className="form-control" type="search" placeholder="Search Talent" />
//               <span className="fa fa-search" aria-hidden="true"></span>
//             </div>
//           </form>
//           <Box sx={{ padding:'10px' }}>
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
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { Box, Toolbar, IconButton, Typography, Menu, Button, Tooltip, MenuItem, useMediaQuery } from '@mui/material';
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

const pages = ['Conversations', 'My Bookings', 'Availability', 'PremiumBooking'];
const settings = ['Account Dashboard', 'Change Password', 'Logout'];

const Navbar: React.FC<ResponsiveChatProps> = ({ user }) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [selectedMenu, setSelectedMenu] = useState<string>('');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>('');

  const isMobileOrTablet = useMediaQuery('(max-width: 960px)');

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
          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              {isMobileOrTablet && (
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleNavOpen}
                  color="inherit"
                  sx={{ marginLeft: 'auto' }}>
                  <MenuIcon />
                </IconButton>
              )}
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

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
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
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'block' } }}>
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
