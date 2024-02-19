// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Container from '@mui/material/Container';
// import PlanBillinginfo from './PlanBillinginfo';
// import PersonalInfoadmin from './Personalinfobar';
// import TeamSettings from './TeamSettings';

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

// function CustomTabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ pt: 3, pb: 3 }}>
//           <Typography>
//             {index === 0 && <PlanBillinginfo />}
//             {index === 1 && <TeamSettings />}
//             {index === 2 && <PersonalInfoadmin />}
//             {children}
//           </Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// function a11yProps(index: number) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// export default function Editprofile() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="xl">
//         <Box sx={{ backgroundColor: '#f7f8f8' }}>
//           <Tabs
//             value={value}
//             onChange={handleChange}
//             aria-label="basic tabs example"
//             TabIndicatorProps={{ style: { backgroundColor: '#2CB512' } }}
//           >
//             <Tab
//               label="Plan & Billing info"
//               {...a11yProps(0)}
//               sx={{
//                 textTransform: 'none',
//                 fontSize:'16px',
//                 fontWeight:500,
//                 color: value === 0 ? '#2CB512 !important' : '#81899A',
//                 '&:hover': {
//                   backgroundColor: 'transparent !important',
//                 },
//               }}
//             />
//             <Tab
//               label="Team Settings"
//               {...a11yProps(1)}
//               sx={{
//                 textTransform: 'none',
//                 fontSize:'16px',
//                 fontWeight:500,
//                 color: value === 1 ? '#2CB512 !important' : '#81899A',
//                 '&:hover': {
//                   backgroundColor: 'transparent !important',
//                 },
//               }}
//             />
//             <Tab
//               label="Personal Info"
//               {...a11yProps(2)}
//               sx={{
//                 textTransform: 'none',
//                 fontSize:'16px',
//                 fontWeight:500,
//                 color: value === 2 ? '#2CB512 !important' : '#81899A',
//                 '&:hover': {
//                   backgroundColor: 'transparent !important',
//                 },
//               }}
//             />
//           </Tabs>
//           <CustomTabPanel value={value} index={0}>

//           </CustomTabPanel>
//           <CustomTabPanel value={value} index={1}>

//           </CustomTabPanel>
//           <CustomTabPanel value={value} index={2}>

//           </CustomTabPanel>
//         </Box>
//       </Container>
//     </React.Fragment>
//   );
// }
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import PlanBillinginfo from './PlanBillinginfo';
import PersonalInfoadmin from './Personalinfobar';
import TeamSettings from './TeamSettings';
import { Grid, Box, Button, Typography, Switch } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogActions, } from '@mui/material';
import { styled } from '@mui/material/styles';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#2CB512',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-thumb:hover': {
    color: 'red',
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3, pb: 3 }}>
          <Typography>
            {index === 0 && <PlanBillinginfo />}
            {index === 1 && <TeamSettings />}
            {index === 2 && <PersonalInfoadmin />}
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Editprofile() {
  const [value, setValue] = React.useState(0);
  const [openDialog, setOpenDialog] = useState(false); // State to control the visibility of the dialog

  const handleSwitchToggle = () => {
    setOpenDialog(true); // Open the dialog when the switch is toggled on
  };

  const handleDialogClose = () => {
    setOpenDialog(false); // Close the dialog
  };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleCancelClick = () => {
    // Handle cancel action
  };

  const handleSubmitClick = () => {
    // Handle save action
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ backgroundColor: '#f7f8f8', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{ style: { backgroundColor: '#2CB512' } }}
          >
            <Tab
              label="Plan & Billing info"
              {...a11yProps(0)}
              sx={{
                textTransform: 'none',
                fontSize: '16px',
                fontWeight: 500,
                color: value === 0 ? '#2CB512 !important' : '#81899A',
                '&:hover': {
                  backgroundColor: 'transparent !important',
                },
              }}
            />
            <Tab
              label="Team Settings"
              {...a11yProps(1)}
              sx={{
                textTransform: 'none',
                fontSize: '16px',
                fontWeight: 500,
                color: value === 1 ? '#2CB512 !important' : '#81899A',
                '&:hover': {
                  backgroundColor: 'transparent !important',
                },
              }}
            />
            <Tab
              label="Personal Info"
              {...a11yProps(2)}
              sx={{
                textTransform: 'none',
                fontSize: '16px',
                fontWeight: 500,
                color: value === 2 ? '#2CB512 !important' : '#81899A',
                '&:hover': {
                  backgroundColor: 'transparent !important',
                },
              }}
            />
          </Tabs>
          <div>
            <Button
              className="common-button-white"
              type="submit"
              variant="contained"
              onClick={handleCancelClick}
              sx={{
                width: '167px',
                height: '44px',
                marginRight: 1,
                mt: 3,
                mb: 2,
                '&:hover': {
                  color: 'var(--Primary, #2CB512)',
                  backgroundColor: '#fff',
                },
              }}
            >
              Cancel
            </Button>
            <Button
              className="common-button-green"
              type="submit"
              variant="contained"
              onClick={handleSubmitClick}
              sx={{
                width: '121px',
                height: '44px',
                marginLeft: 1,
                mt: 3,
                mb: 2,
                '&:hover': {
                  background: 'var(--Primary, #2CB512)',
                },
              }}
            >
              Submit
            </Button>

            <Grid
              container
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ backgroundColor: '#FFFFFF', padding: '15px', borderRadius: '10px' }}
            >
              <Typography sx={{ color: '#1D2939', fontSize: '16px', fontWeight: 600, marginRight: '5px' }}>
                OPT out of being listed on Avalbl
              </Typography>

              <AntSwitch inputProps={{ 'aria-label': 'ant design' }} onChange={handleSwitchToggle} />
            </Grid>


            <Dialog
              open={openDialog}
              onClose={handleDialogClose}
              style={{ width: '514px', height: '464px', position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', margin: 'auto' }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px'
              }}
            >
              <DialogTitle sx={{ textAlign: 'center', fontSize: '24px', fontWeight: 600, }}>Are You Sure?</DialogTitle>
              <DialogContent sx={{ textAlign: 'center', color: '#73787E', fontSize: '16px', fontWeight: 400 }}>
                When this option is enabled, your account will NOT show up in any searches on Avalbl. You will NOT be found and solicited for projects. You will still have full access to all other features as an Avalbl Premium user.
              </DialogContent>
              <DialogActions sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <Button
                  className="common-button-white"
                  type="submit"
                  variant="contained"
                  // onClick={handleCancelClick}

                  onClick={handleDialogClose}
                  sx={{
                    width: '87px',
                    height: '44px',
                    '&:hover': {
                      color: 'var(--Primary, #2CB512)',
                      backgroundColor: '#fff',
                    },
                  }}
                >
                  Cancel
                </Button>
                <Button
                  className="common-button-green"
                  type="submit"
                  variant="contained"
                  sx={{
                    width: '132px',
                    height: '44px',
                    '&:hover': {
                      background: 'var(--Primary, #2CB512)',
                    },
                  }}
                >
                  Okay, Got It.
                </Button>
              </DialogActions>
            </Dialog>

          </div>
        </Box>
        <CustomTabPanel value={value} index={0}>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
        </CustomTabPanel>
      </Container>
    </React.Fragment>
  );
}
