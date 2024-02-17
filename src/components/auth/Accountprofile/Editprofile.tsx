import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import PlanBillinginfo from './PlanBillinginfo';
import PersonalInfoadmin from './Personalinfobar';
import TeamSettings from './TeamSettings';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ backgroundColor: '#f7f8f8' }}>
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
                fontSize:'16px',
                fontWeight:500,
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
                fontSize:'16px',
                fontWeight:500,
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
                fontSize:'16px',
                fontWeight:500,
                color: value === 2 ? '#2CB512 !important' : '#81899A',
                '&:hover': {
                  backgroundColor: 'transparent !important',
                },
              }}
            />
          </Tabs>
          <CustomTabPanel value={value} index={0}>
           
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
           
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
         
          </CustomTabPanel>
        </Box>
      </Container>
    </React.Fragment>
  );
}
