import React, { useState } from 'react';
// import { List, ListItem, ListItemText } from '@mui/material';
import '../../Assets/css/HomeScreen.css';
import profile from '../../Assets/Images/profile.svg';
import medal from '../../Assets/Images/medal.svg';
import tools from '../../Assets/Images/tools.svg';
import vuesax from '../../Assets/Images/vuesax.svg';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box, Button, Select, MenuItem, Typography } from '@mui/material';

interface SidebarProps {
  classes: {
    drawer: string;
    drawerPaper: string;
    toolbar: string;
  };
}

const Sidebar: React.FC<SidebarProps> = ({ classes }) => {
  const [sideBar, setSideBar] = useState({ roles: false, skills: false, tools: false, locate: false });
  const [country, setCountry] = React.useState(1);
  const [stateVal, setStateVal] = React.useState(1);
  const [lang, setlang] = React.useState(1);

  const handleCountryChange = (event: any) => {
    setCountry(event.target.value);
  };

  const handleStateChange = (event: any) => {
    setStateVal(event.target.value);
  };

  const handleLangChange = (event: any) => {
    setlang(event.target.value);
  };

  const handleRoles = (type: any) => {
    if (type === 'roles') {
      setSideBar({ roles: true, skills: false, tools: false, locate: false });
    } else if (type === 'skills') {
      setSideBar({ roles: false, skills: true, tools: false, locate: false });
    } else if (type === 'tools') {
      setSideBar({ roles: false, skills: false, tools: true, locate: false });
    } else if (type === 'locate') {
      setSideBar({ roles: false, skills: false, tools: false, locate: true });
    }
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            width: '200px',
            backgroundColor: '#F7F8F8',
            height: '100vh',
            // position: 'fixed',
            top: 0,
            left: 0,
          }}>
          {/* <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}> */}
          <div className={classes.toolbar}>{/* You can place your logo or any content here */}</div>
          {/* <List>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Contact" />
        </ListItem>
      </List> */}
          <aside className="sidebar-menu">
            <ul style={{ listStyleType: 'none' }}>
              <li>
                <a href="#" data-toggle="modal" data-target="#exampleModal-role" onClick={() => handleRoles('roles')}>
                  <img src={profile} alt="icon" />
                  <h4>Roles</h4>
                </a>
              </li>
              <li>
                <a href="#" data-toggle="modal" data-target="#exampleModal-skill" onClick={() => handleRoles('skills')}>
                  <img src={medal} alt="icon" />
                  <h4>Skills</h4>
                </a>
              </li>
              <li>
                <a href="#" data-toggle="modal" data-target="#exampleModal-tools" onClick={() => handleRoles('tools')}>
                  <img src={tools} alt="icon" />
                  <h4>Tools</h4>
                </a>
              </li>
              <li>
                <a href="#" data-toggle="modal" data-target="#exampleModal-locate" onClick={() => handleRoles('locate')}>
                  <img src={vuesax} alt="icon" />
                  <h4>Locate</h4>
                </a>
              </li>
            </ul>
          </aside>

          {/* </Drawer> */}
          {/* Main content */}
          <main style={{ flexGrow: 1, padding: '64px' }}>
            {/* Adjust padding value based on your AppBar's height */}
            {/* Your main content goes here */}
          </main>
        </div>

        {sideBar.roles ? (
          <div
            style={{
              width: '350px',
              backgroundColor: '#F7F8F8',
              height: '55vh',
              // position: 'fixed',
              top: 0,
              left: 0,
              marginLeft: '15px',
              marginTop: '20px',
            }}>
            <FormGroup style={{ width: '250px', borderRadius: '10px', marginLeft: '20px' }}>
              <FormControlLabel control={<Checkbox />} label="Director Level" />
              <FormControlLabel control={<Checkbox />} label="Concept Artist" />
              <FormControlLabel control={<Checkbox />} label="Experience Designer" />
              <FormControlLabel control={<Checkbox />} label="Designer" />
              <FormControlLabel control={<Checkbox />} label="Illustrator" />
              <FormControlLabel control={<Checkbox />} label="Sound & Music" />
              <FormControlLabel control={<Checkbox />} label="Motion Designer" />
              <FormControlLabel control={<Checkbox />} label="Compositor / VFX" />
              <FormControlLabel control={<Checkbox />} label="3D Artist" />
              <FormControlLabel control={<Checkbox />} label="Video Editor" />
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Button
                  className="common-button-white"
                  type="submit"
                  variant="outlined"
                  sx={{ mt: 3, mb: 2, textTransform: 'none' }}>
                  Reset
                </Button>

                <Button
                  className="common-button-green"
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, ml: 14, width: '100px', textTransform: 'none' }}>
                  Apply
                </Button>
              </Box>
            </FormGroup>
          </div>
        ) : (
          ''
        )}

        {sideBar.skills ? (
          <div
            style={{
              width: '350px',
              backgroundColor: '#F7F8F8',
              height: '30vh',
              // position: 'fixed',
              top: 0,
              left: 0,
              marginLeft: '15px',
              marginTop: '110px',
            }}>
            <Typography variant="h3" style={{ margin: '20px 20px 0px 20px', fontSize: '15px', fontWeight: 'bold' }}>
              Director Level
            </Typography>
            <FormGroup style={{ width: '250px', borderRadius: '10px', marginLeft: '20px' }}>
              <FormControlLabel control={<Checkbox />} label="Creation Direction" />
              <FormControlLabel control={<Checkbox />} label="Art Direction" />
              <FormControlLabel control={<Checkbox />} label="Animate Direction" />
              <FormControlLabel control={<Checkbox />} label="Live-Action Direction" />

              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Button
                  className="common-button-white"
                  type="submit"
                  variant="outlined"
                  sx={{ mt: 3, mb: 2, textTransform: 'none' }}>
                  Reset
                </Button>

                <Button
                  className="common-button-green"
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, ml: 14, width: '100px', textTransform: 'none' }}>
                  Apply
                </Button>
              </Box>
            </FormGroup>
          </div>
        ) : (
          ''
        )}

        {sideBar.tools ? (
          <div
            style={{
              width: '350px',
              backgroundColor: '#F7F8F8',
              height: '85vh',
              // position: 'fixed',
              top: 0,
              left: 0,
              marginLeft: '15px',
              marginTop: '200px',
            }}>
            <Typography variant="h3" style={{ margin: '20px 20px 0px 20px', fontSize: '15px', fontWeight: 'bold' }}>
              Design & Illustration
            </Typography>
            <FormGroup style={{ width: '250px', borderRadius: '10px', marginLeft: '20px' }}>
              <FormControlLabel control={<Checkbox />} label="Photoshop" />
              <FormControlLabel control={<Checkbox />} label="Illustrator" />
              <FormControlLabel control={<Checkbox />} label="Figma" />
              <FormControlLabel control={<Checkbox />} label="Procreate" />
              <FormControlLabel control={<Checkbox />} label="Toon Boom Storyboard Pro" />
              <FormControlLabel control={<Checkbox />} label="Affinity Designer" />
              <FormControlLabel control={<Checkbox />} label="Cip Studio Paint" />

              <Typography variant="h3" style={{ margin: '20px 20px 10px 0px', fontSize: '15px', fontWeight: 'bold' }}>
                2D Animation
              </Typography>
              <FormControlLabel control={<Checkbox />} label="After Effects" />
              <FormControlLabel control={<Checkbox />} label="Cavalry" />
              <FormControlLabel control={<Checkbox />} label="Adobe Animate" />
              <FormControlLabel control={<Checkbox />} label="TV Paint" />
              <FormControlLabel control={<Checkbox />} label="Moho" />
              <FormControlLabel control={<Checkbox />} label="Toon Boom Harmony" />
              <FormControlLabel control={<Checkbox />} label="Dragonframe" />
              <FormControlLabel control={<Checkbox />} label="Rive" />

              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Button
                  className="common-button-white"
                  type="submit"
                  variant="outlined"
                  sx={{ mt: 3, mb: 2, textTransform: 'none' }}>
                  Reset
                </Button>

                <Button
                  className="common-button-green"
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, ml: 14, width: '100px', textTransform: 'none' }}>
                  Apply
                </Button>
              </Box>
            </FormGroup>
          </div>
        ) : (
          ''
        )}

        {sideBar.locate ? (
          <div
            style={{
              width: '350px',
              backgroundColor: '#F7F8F8',
              height: '33vh',
              // position: 'fixed',
              top: 0,
              left: 0,
              marginLeft: '15px',
              marginTop: '280px',
            }}>
            <div style={{ display: 'flex' }}>
              <div>
                <Typography variant="h3" style={{ margin: '20px 20px 10px 20px', fontSize: '15px', fontWeight: 'bold' }}>
                  Country
                </Typography>
                <Select sx={{ width: '150px', marginLeft: '20px' }} value={country} onChange={handleCountryChange}>
                  <MenuItem value="" disabled>
                    Select Country
                  </MenuItem>
                  <MenuItem value="1">America</MenuItem>
                  <MenuItem value="2">Beligum</MenuItem>
                  <MenuItem value="3">Canada</MenuItem>
                  <MenuItem value="4">Denmark</MenuItem>
                </Select>
              </div>

              <div>
                <Typography variant="h3" style={{ margin: '20px 20px 10px 20px', fontSize: '15px', fontWeight: 'bold' }}>
                  State
                </Typography>

                <Select sx={{ width: '150px', marginLeft: '20px' }} value={stateVal} onChange={handleStateChange}>
                  <MenuItem value="" disabled>
                    Select State
                  </MenuItem>
                  <MenuItem value="1">California</MenuItem>
                  <MenuItem value="2">Texas</MenuItem>
                  <MenuItem value="3">Florida</MenuItem>
                  <MenuItem value="4">Alaska</MenuItem>
                </Select>
              </div>
            </div>

            <Typography variant="h3" style={{ margin: '20px 20px 10px 20px', fontSize: '15px', fontWeight: 'bold' }}>
              Language
            </Typography>
            <Select sx={{ width: '320px', marginLeft: '20px' }} value={lang} onChange={handleLangChange}>
              <MenuItem defaultValue="Select Language" selected disabled>
                Select Language
              </MenuItem>
              <MenuItem value="1" selected>
                English
              </MenuItem>
              <MenuItem value="2">French</MenuItem>
            </Select>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Button
                className="common-button-white"
                type="submit"
                variant="outlined"
                sx={{ mt: 3, mb: 2, ml: 2, textTransform: 'none' }}>
                Reset
              </Button>

              <Button
                className="common-button-green"
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, ml: 15, width: '100px', textTransform: 'none' }}>
                Apply
              </Button>
            </Box>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default Sidebar;
