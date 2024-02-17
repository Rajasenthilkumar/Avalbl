/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Stack, Switch, ToggleButton, ToggleButtonGroup, Button } from '@mui/material';
import '../../../Assets/css/Common.css';
import { styled } from '@mui/material/styles';
import Env from '../../../services/Env';
import { connect } from 'react-redux';

interface WorkDetailsProps {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
  userAccessToken: string;
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

const WorkDetails: React.FC<WorkDetailsProps> = ({ activeStep, handleNext, handleBack, userAccessToken }) => {
  const [alignment, setAlignment] = React.useState({
    avalbl: true,
    location: 'Remote',
    workType: 'Freelance',
    rate: 'Rate Based',
  });

  const [locationAvailability, setLocationAvailability] = useState([]);
  const [rateAndFees, setRateAndFees] = useState([]);
  const [work, setWork] = useState([]);

  useEffect(() => {
    workDetailsData();
  }, []);

  const workDetailsData = () => {
    const workdetails = Env.get(`user/workDetails`, userAccessToken);
    workdetails
      .then((response: any) => {
        if (response.status === 200) {
          setLocationAvailability(response.data.data.locationAvailability);
          setRateAndFees(response.data.data.rateAndFees);
          setWork(response.data.data.workType);
          // setToast({ message: response.data.message.value, type: 'success' });
        }
      })
      .catch((error: any) => {
        console.log('RESPONSE', error);
        // setToast({ message: error.response.data.message.value, type: 'error' });
      });
  };

  const handleWorkDetailsData = () => {
    console.log('WorkDetails');
    handleNext();
  };

  const handleSwitchChange = () => {
    setAlignment((prevAlignment) => ({
      ...prevAlignment,
      avalbl: !prevAlignment.avalbl,
    }));
  };

  const handleAlignmentChange = (group: any, newValue: any) => {
    setAlignment((prevAlignment) => ({
      ...prevAlignment,
      [group]: newValue,
    }));
  };

  return (
    <>
      <Typography
        sx={{
          fontSize: '30px',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: '38px',
          paddingTop: '30px',
        }}>
        Work Details
      </Typography>
      <Box style={{ width: '900px' }}>
        <Grid container>
          <Grid item sm={3}>
            <Typography
              className="lable-name"
              sx={{
                textAlign: 'left',
                mt: '15px',
                color: '#344054',
              }}>
              Profile visible on AVALBL?
            </Typography>
            <Grid
              alignItems="center"
              sx={{
                width: '150px',
                height: '40px',
                backgroundColor: '#fff',
                border: '1px solid var(--_Gray-300, #D0D5DD)',
                borderRadius: '8px',
                boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                mt: 1,
              }}>
              <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" sx={{ mt: 1 }}>
                <Typography>Off</Typography>
                <AntSwitch
                  name="switch"
                  inputProps={{ 'aria-label': 'ant design' }}
                  checked={alignment.avalbl}
                  onChange={handleSwitchChange}
                />
                <Typography>On</Typography>
              </Stack>
            </Grid>
          </Grid>
          <Grid item sm={9}>
            <Typography
              className="lable-name"
              sx={{
                textAlign: 'left',
                mt: '15px',
                color: '#344054',
              }}>
              Location Availability
            </Typography>
            <Grid alignItems="center" sx={{ mt: 1 }}>
              <ToggleButtonGroup
                color="primary"
                sx={{ border: '1px solid #D0D5DD', borderRadius: '6px' }}
                value={alignment.location}
                exclusive
                onChange={(event, newValue) => handleAlignmentChange('location', newValue)}
                aria-label="Location Availability">
                {locationAvailability.map((location: { key: string; label: string }) => (
                  <ToggleButton
                    key={location.key}
                    sx={{
                      width: '200px',
                      textTransform: 'none',
                      border: 'none',
                      color: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#000'),
                      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#fff'),
                      '&.Mui-selected': {
                        backgroundColor: '#fff',
                        color: '#2CB512',
                        boxShadow: `0 0px 10px 0px rgba(0,0,0,0.2), 0 2px 10px rgba(0,0,0,0.2)`,
                      },
                      '&.Mui-selected:hover': {
                        backgroundColor: '#fff',
                      },
                    }}
                    value={location.label}>
                    {location.label}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <Grid item sm={12}>
            <Typography
              className="lable-name"
              sx={{
                textAlign: 'left',
                mt: '15px',
                color: '#344054',
              }}>
              Type of Work
            </Typography>
            <Grid alignItems="center" sx={{ mt: 1 }}>
              <ToggleButtonGroup
                color="primary"
                sx={{ border: '1px solid #D0D5DD', borderRadius: '6px' }}
                value={alignment.workType}
                exclusive
                onChange={(event, newValue) => handleAlignmentChange('workType', newValue)}
                aria-label=" Type of Work">
                {work.map((work: { key: string; label: string }) => (
                  <ToggleButton
                    key={work.key}
                    sx={{
                      width: '275px',
                      textTransform: 'none',
                      border: 'none',
                      color: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#000'),
                      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#fff'),
                      '&.Mui-selected': {
                        backgroundColor: '#fff',
                        color: '#2CB512',
                        boxShadow: `0 0px 10px 0px rgba(0,0,0,0.2), 0 2px 10px rgba(0,0,0,0.2)`,
                      },
                      '&.Mui-selected:hover': {
                        backgroundColor: '#fff',
                      },
                    }}
                    value={work.label}>
                    {work.label}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Grid>
          </Grid>
          <Grid item sm={12}>
            <Typography
              className="lable-name"
              sx={{
                textAlign: 'left',
                mt: '15px',
                color: '#344054',
              }}>
              Rate and Fees
            </Typography>
            <Grid alignItems="center" sx={{ mt: 1 }}>
              <ToggleButtonGroup
                color="primary"
                sx={{ border: '1px solid #D0D5DD', borderRadius: '6px' }}
                value={alignment.rate}
                exclusive
                onChange={(event, newValue) => handleAlignmentChange('rate', newValue)}
                aria-label="Rate and Fees">
                {rateAndFees.map((rateAndFee: { key: any; label: string }) => (
                  <ToggleButton
                    key={rateAndFee.key}
                    sx={{
                      width: '275px',
                      textTransform: 'none',
                      border: 'none',
                      color: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#000'),
                      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#fff'),
                      '&.Mui-selected': {
                        backgroundColor: '#fff',
                        color: '#2CB512',
                        boxShadow: `0 0px 10px 0px rgba(0,0,0,0.2), 0 2px 10px rgba(0,0,0,0.2)`,
                      },
                      '&.Mui-selected:hover': {
                        backgroundColor: '#fff',
                      },
                    }}
                    value={rateAndFee.label}>
                    {rateAndFee.label}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ padding: '50px', paddingTop: '40px' }}>
        <Box sx={{ textAlign: 'center' }}>
          {activeStep === 1 ? (
            ''
          ) : (
            <Button
              className="common-button-white"
              type="submit"
              variant="contained"
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{
                marginRight: 1,
                mt: 3,
                mb: 2,
                '&:hover': {
                  color: 'var(--Primary, #2CB512)',
                  backgroundColor: '#fff',
                },
                alignItems: 'center',
              }}>
              Back
            </Button>
          )}

          <Button
            className="common-button-green"
            type="submit"
            variant="contained"
            onClick={handleWorkDetailsData}
            disabled={activeStep === 10}
            sx={{
              marginLeft: 1,
              mt: 3,
              mb: 2,
              '&:hover': {
                background: 'var(--Primary, #2CB512)',
              },
            }}>
            Save and Next
          </Button>
        </Box>
      </Box>
    </>
  );
};

function mapDispatchToProps(state: any) {
  return {
    userAccessToken: state.userAccessToken,
  };
}

export default connect(mapDispatchToProps)(WorkDetails);
