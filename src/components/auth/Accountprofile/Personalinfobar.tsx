import React, { useState } from 'react';
import '../../../Assets/css/Profile.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Personaldetails from './Personaldetails';
import Personallocation from './Personallocation';
import PersonalPortfolios from './PersonalPortfolios';
import PersonalSkills from './PersonalSkills';
import PersonalTool from './PersonalTool';
import PersonalExpression from './PersonalExpression';
import PersonalAvailability from './PersonalAvailability';
import Menu1 from '../../../Assets/Images/personalcard.png';
import Menu2 from '../../../Assets/Images/language-circle.png';
import Menu3 from '../../../Assets/Images/Work.png';
import Menu4 from '../../../Assets/Images/Skills.png';
import Menu5 from '../../../Assets/Images/Tools.png';
import Menu6 from '../../../Assets/Images/profile-tick.png';
import Menu7 from '../../../Assets/Images/clock.png';
import { Typography } from '@mui/material';


const Personalinfobar = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>('PersonalInfo');

  const handleSidebarItemClick = (component: string) => {
    setActiveComponent(component);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} md={2.5}>
          <Box  sx={{ p: '15px', borderRadius: '10px', width: '287px',backgroundColor:'#FFFFFF' }}>
            <div className="sidebar">
              <div
                className={`sidebar-item ${activeComponent === 'PersonalInfo' ? 'active-menu' : ''}`}
                onClick={() => handleSidebarItemClick('PersonalInfo')}
              >
                <div className="menu-item-content" style={{ padding: '5px' }}>
                  <img src={Menu1} alt="Personal Info" className="menu-icon" />
                  <Typography style={{ fontWeight: 500, fontSize: '16px', }} className="menu-text">Personal Info</Typography>
                </div>
              </div>
              <div
                className={`sidebar-item ${activeComponent === 'LanguageLocation' ? 'active-menu' : ''}`}
                onClick={() => handleSidebarItemClick('LanguageLocation')}
              >
                <div className="menu-item-content" style={{ padding: '5px' }}>
                  <img src={Menu2} alt="Language & Location" className="menu-icon" />
                  <Typography style={{ fontWeight: 500, fontSize: '16px', }} className="menu-text">Language & Location</Typography>
                </div>
              </div>
              <div
                className={`sidebar-item ${activeComponent === 'PersonalPortfolios' ? 'active-menu' : ''}`}
                onClick={() => handleSidebarItemClick('PersonalPortfolios')}
              >
                <div className="menu-item-content" style={{ padding: '5px' }}>
                  <img src={Menu3} alt="Work & Social" className="menu-icon" />
                  <Typography style={{ fontWeight: 500, fontSize: '16px', }} className="menu-text">Work & Social</Typography>
                </div>
              </div>
              <div
                className={`sidebar-item ${activeComponent === 'PersonalSkills' ? 'active-menu' : ''}`}
                onClick={() => handleSidebarItemClick('PersonalSkills')}
              >
                <div className="menu-item-content" style={{ padding: '5px' }}>
                  <img src={Menu4} alt="Skills" className="menu-icon" />
                  <Typography style={{ fontWeight: 500, fontSize: '16px', }} className="menu-text">Skills</Typography>
                </div>
              </div>
              <div
                className={`sidebar-item ${activeComponent === 'PersonalTool' ? 'active-menu' : ''}`}
                onClick={() => handleSidebarItemClick('PersonalTool')}
              >
                <div className="menu-item-content" style={{ padding: '5px' }}>
                  <img src={Menu5} alt="Tools" className="menu-icon" />
                  <Typography style={{ fontWeight: 500, fontSize: '16px', }} className="menu-text">Tools</Typography>
                </div>
              </div>
              <div
                className={`sidebar-item ${activeComponent === 'PersonalExpression' ? 'active-menu' : ''}`}
                onClick={() => handleSidebarItemClick('PersonalExpression')}
              >
                <div className="menu-item-content" style={{ padding: '5px' }}>
                  <img src={Menu6} alt="Rate & Experience" className="menu-icon" />
                  <Typography style={{ fontWeight: 500, fontSize: '16px', }} className="menu-text">Rate & Experience</Typography>
                </div>
              </div>
              <div
                className={`sidebar-item ${activeComponent === 'PersonalAvailability' ? 'active-menu' : ''}`}
                onClick={() => handleSidebarItemClick('PersonalAvailability')}
              >
                <div className="menu-item-content" style={{ padding: '5px' }}>
                  <img src={Menu7} alt="Rate & Experience" className="menu-icon" />
                  <Typography style={{ fontWeight: 500, fontSize: '16px', }} className="menu-text">Availability</Typography>
                </div>
              </div>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={9} md={9.5}>
          <Box >
            {activeComponent === 'PersonalInfo' && <Personaldetails />}
            {activeComponent === 'LanguageLocation' && <Personallocation />}
            {activeComponent === 'PersonalPortfolios' && <PersonalPortfolios />}
            {activeComponent === 'PersonalSkills' && <PersonalSkills />}
            {activeComponent === 'PersonalTool' && <PersonalTool />}
            {/* {activeComponent === 'PersonalExpression' && <PersonalExpression />} */}
            {activeComponent === 'PersonalExpression' && <PersonalExpression />}
            {activeComponent === 'PersonalAvailability' && <PersonalAvailability />}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Personalinfobar;