import React, { useState } from 'react';
import {
  Typography,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import '../../../Assets/css/Common.css';
import { connect } from 'react-redux';

const details = {
  "data": {
    "profileVisible": true,
    "locationAvailable": {
      "label": "On-Site",
      "key": "On-site"
    },
    "workType": {
      "label": "fulltime",
      "key": "fulltime"
    },
    "rateFees": {
      "label": "Flat Fee",
      "key": "flatFee"
    }
  },
};

const Social: React.FC = () => {
  const [alignment, setAlignment] = useState({
    location: details.data.locationAvailable.key,
    workType: details.data.workType.key,
    rate: details.data.rateFees.key,
  });

  const LocationAvailability = [
    { key: 'remote', label: 'Remote' },
    { key: 'On-site', label: 'On-site' },
    { key: 'Either', label: 'Either' },
  ];

  const WorkTypes = [
    { key: 'freelance', label: 'Freelance' },
    { key: 'fulltime', label: 'Full Time' },
    { key: 'Both', label: 'Both' },
  ];

  const RateAndFees = [
    { key: 'rateBased', label: 'Rate Based' },
    { key: 'flatFee', label: 'Flat Fee' },
    { key: 'Both', label: 'Both' },
  ];

  const handleAlignmentChange = (group: string, newValue: string) => {
    setAlignment((prevAlignment) => ({
      ...prevAlignment,
      [group]: newValue,
    }));
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item sm={6}>
          <Typography
            className="lable-name"
            sx={{
              textAlign: 'left',
              mt: '15px',
              color: '#344054',
            }}
          >
            Location Availability
          </Typography>
          <Grid alignItems="center" sx={{ mt: 1 }}>
            <ToggleButtonGroup
              color="primary"
              sx={{ border: '1px solid #D0D5DD', borderRadius: '6px', width: '100%' }}
              value={alignment.location}
              exclusive
              onChange={(event, newValue) => handleAlignmentChange('location', newValue)}
              aria-label="Location Availability"
            >
              {LocationAvailability.map((location) => (
                <ToggleButton
                  key={location.key}
                  sx={{
                    width: '100%',  
                    height: '36px',
                    margin: '3px',
                    textTransform: 'none',
                    border: 'none',
                    color: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#000'),
                    backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#fff'),
                    '&.Mui-selected': {
                      backgroundColor: '#fff',
                      color: '#2CB512',
                      boxShadow: `0 0px 2px 0px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.2)`,
                      borderRadius:'5px'
                    },
                    '&.Mui-selected:hover': {
                      backgroundColor: '#fff',
                    },
                  }}
                  value={location.label}
                >
                  {location.label}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Grid>
        </Grid>

        <Grid item sm={6}>
          <Typography
            className="lable-name"
            sx={{
              textAlign: 'left',
              mt: '15px',
              color: '#344054',
            }}
          >
            Type of Work
          </Typography>
          <Grid alignItems="center" sx={{ mt: 1 }}>
            <ToggleButtonGroup
              color="primary"
              sx={{ border: '1px solid #D0D5DD', borderRadius: '6px', width: '100%' }}
              value={alignment.workType}
              exclusive
              onChange={(event, newValue) => handleAlignmentChange('workType', newValue)}
              aria-label="Type of Work"
            >
              {WorkTypes.map((work) => (
                <ToggleButton
                  key={work.key}
                  sx={{
                    width: '100%', 
                    height: '36px',
                    margin: '3px',
                    textTransform: 'none',
                    border: 'none',
                    color: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#000'),
                    backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#fff'),
                    '&.Mui-selected': {
                      backgroundColor: '#fff',
                      color: '#2CB512',
                      boxShadow: `0 0px 2px 0px rgba(0,0,0,0.2), 0 2px 5px rgba(0,0,0,0.2)`,
                      borderRadius:'5px'
                    },
                    '&.Mui-selected:hover': {
                      backgroundColor: '#fff',
                    },
                  }}
                  value={work.key} // Use work.key instead of work.label
                >
                  {work.label}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Grid>
        </Grid>
      </Grid>

      <Typography
        className="lable-name"
        sx={{
          textAlign: 'left',
          mt: '15px',
          color: '#344054',
        }}
      >
        Rate and Fees
      </Typography>
      <Grid item sm={12}>
        <Grid alignItems="center" sx={{ mt: 1 }}>
          <ToggleButtonGroup
            color="primary"
            sx={{ border: '1px solid #D0D5DD', borderRadius: '6px', width: '100%' }}
            value={alignment.rate}
            exclusive
            onChange={(event, newValue) => handleAlignmentChange('rate', newValue)}
            aria-label="Rate and Fees"
          >
            {RateAndFees.map((rateAndFee) => (
              <ToggleButton
                key={rateAndFee.key}
                sx={{
                  width: '100%',
                  height: '36px',
                  margin: '3px',
                  textTransform: 'none',
                  border: 'none',
                  color: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#000'),
                  backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#fff'),
                  '&.Mui-selected': {
                    backgroundColor: '#fff',
                    color: '#2CB512',
                    boxShadow: `0 0px 2px 0px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.2)`,
                    borderRadius:'5px'
                  },
                  '&.Mui-selected:hover': {
                    backgroundColor: '#fff',
                  },
                }}
                value={rateAndFee.key} // Use rateAndFee.key instead of rateAndFee.label
              >
                {rateAndFee.label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Grid>
      </Grid>
    </>
  );
};

export default connect()(Social);
