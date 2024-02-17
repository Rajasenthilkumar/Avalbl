/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Grid,
  Stack,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
  // TextField,
  Select,
  MenuItem,
  Button,
} from '@mui/material';
import '../../../Assets/css/Common.css';
import { styled } from '@mui/material/styles';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Env from '../../../services/Env';
import { connect } from 'react-redux';

interface AvailabilityDetailsProps {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
  userAccessToken: string;
}

interface AvailabilityDetail {
  label: string;
  key: string;
  description: string;
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

const AvailabilityDetails: React.FC<AvailabilityDetailsProps> = ({
  activeStep,
  handleNext,
  handleBack,
  userAccessToken,
}) => {
  const localizer = momentLocalizer(moment);
  const [alignment, setAlignment] = React.useState('Available');
  const [useCalendar] = React.useState(false);
  const [availableStatus, setAvailableStatus] = React.useState(10);
  const [availability, setAvailability] = useState<AvailabilityDetail[]>([]);
  // const [selectedKey, setSelectedKey] = React.useState<string>('');

  useEffect(() => {
    availabilityData();
  }, []);

  const availabilityData = () => {
    const getAvailabiltyDatas = Env.get(`user/getAvailability?isCalender=${useCalendar}`, userAccessToken);
    getAvailabiltyDatas
      .then((response: any) => {
        if (response.status === 200) {
          setAvailability(response.data.data);
          // setToast({ message: response.data.message.value, type: 'success' });
        }
      })
      .catch((error: any) => {
        console.log('RESPONSE', error);
        // setToast({ message: error.response.data.message.value, type: 'error' });
      });
  };

  const handleAvailabilityDetailsData = () => {
    console.log('ProfilePic');
    handleNext();
  };

  const handleStatusChange = (event: any) => {
    setAvailableStatus(event.target.value);
  };

  const handleChange = (event: any, newAlignment: any) => {
    setAlignment(newAlignment);
    // setSelectedKey(newAlignment);
  };

  // const handleSwitchChange = () => {
  //   setUseCalendar((prevAlignment) => ({
  //     ...prevAlignment,
  //     useCalendar: !prevAlignment.useCalendar,
  //   }));
  // };

  // const handleSwitchChange = () => {
  //   setUseCalendar((prevUseCalendar) => !prevUseCalendar);
  // };

  const CustomDay: React.FC<{ day: Date }> = ({ day }) => {
    const isAvailable = events.some(
      (event) => moment(day).isSameOrAfter(event.start, 'day') && moment(day).isSameOrBefore(event.end, 'day')
    );

    return (
      <div style={{ position: 'relative', height: '100%', width: '100%' }}>
        {isAvailable && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'green',
              color: 'white',
              padding: '4px',
              borderRadius: '4px',
              fontFamily: "'Onest', sans-serif",
            }}>
            Available
          </div>
        )}
      </div>
    );
  };

  const events = [
    {
      title: 'Available',
      start: new Date(2023, 7, 1),
      end: new Date(2023, 7, 1),
    },
    {
      title: 'Not Available',
      start: new Date(2023, 7, 5),
      end: new Date(2023, 7, 5),
    },
    {
      title: 'Part-time',
      start: new Date(2023, 7, 10),
      end: new Date(2023, 7, 10),
    },
  ];

  CustomDay.propTypes = {
    day: PropTypes.instanceOf(Date).isRequired,
  };

  const renderContent = () => {
    const selectedAvailability = availability.find((item: any) => item.label === alignment);

    switch (alignment) {
      case 'Available':
      case 'Not Available':
      case 'Part Time':
      case 'Available Soon':
      case 'Off Market':
        return selectedAvailability?.description || null;
      default:
        return null;
    }
  };

  // const renderContent = () => {
  //   switch (alignment) {
  //     case 'Available':
  //       return (
  //         <>
  //           In manual availability mode, these options will need to be refreshed weekly. Avalbl will send weekly reminders to
  //           you to update this unless you switch to calendar mode. If you do not update your status, Avalbl will
  //           automatically opt you out of being listed on Avalbl and you will no longer show up in search results.
  //         </>
  //       );
  //     case 'Not Available':
  //       return (
  //         <>
  //           In manual not-availability mode, these options will need to be refreshed weekly. Avalbl will send weekly
  //           reminders to you to update this unless you switch to calendar mode. If you do not update your status, Avalbl will
  //           automatically opt you out of being listed on Avalbl and you will no longer show up in search results.
  //         </>
  //       );
  //     case 'Part Time':
  //       return (
  //         <>
  //           In manual part-time mode, these options will need to be refreshed weekly. Avalbl will send weekly reminders to
  //           you to update this unless you switch to calendar mode. If you do not update your status, Avalbl will
  //           automatically opt you out of being listed on Avalbl and you will no longer show up in search results.
  //         </>
  //       );
  //     case 'Available Soon':
  //       return (
  //         <>
  //           In manual availability soon mode, these options will need to be refreshed weekly. Avalbl will send weekly
  //           reminders to you to update this unless you switch to calendar mode. If you do not update your status, Avalbl will
  //           automatically opt you out of being listed on Avalbl and you will no longer show up in search results.
  //         </>
  //       );
  //     case 'Off Market':
  //       return (
  //         <>
  //           In manual Off-market mode, these options will need to be refreshed weekly. Avalbl will send weekly reminders to
  //           you to update this unless you switch to calendar mode. If you do not update your status, Avalbl will
  //           automatically opt you out of being listed on Avalbl and you will no longer show up in search results.
  //         </>
  //       );
  //     default:
  //       return null;
  //   }
  // };

  return (
    <>
      <Grid container>
        <Grid item sm={10}>
          <Typography
            sx={{
              fontFamily: "'Onest', sans-serif",
              fontSize: '30px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '38px',
              paddingTop: '30px',
            }}>
            {useCalendar === true ? 'Set Your availability' : 'Availability Details'}
          </Typography>
        </Grid>
        <Grid item sm={2} sx={{ mt: 3.5 }}>
          <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" sx={{ mt: 1 }}>
            <Typography>Use Calendar</Typography>
            {/* <AntSwitch inputProps={{ 'aria-label': 'ant design' }} checked={alignment} onChange={handleSwitchChange} /> */}
          </Stack>
        </Grid>
      </Grid>
      {useCalendar === true ? (
        <>
          <Box style={{ width: '900px' }}>
            <Grid container sx={{ mt: 5 }}>
              <Grid container>
                <Grid item sm={5.5}>
                  <Typography
                    className="lable-name"
                    sx={{
                      textAlign: 'left',
                      mt: '15px',
                      color: '#344054',
                    }}>
                    Start Date
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateTimePicker']}>
                      {/* <DateTimePicker
                        textField={(props: any) => <TextField {...props} placeholder="Enter date here" variant="outlined" />}
                      /> */}
                      {/* <DateTimePicker
                        renderInput={(props: any) => (
                          <TextField {...props} placeholder="Enter date here" variant="outlined" />
                        )}
                      /> */}
                      {/* <DateTimePicker
                        TextFieldComponent={(props: any) => (
                          <TextField {...props} placeholder="Enter date here" variant="outlined" />
                        )}
                      /> */}
                      {/* <DateTimePicker
                        // Use the TextFieldProps prop to customize the input field
                        TextFieldProps={{
                          renderInput: (props: any) => (
                            <TextField {...props} placeholder="Enter date here" variant="outlined" />
                          ),
                        }}
                      /> */}
                      {/* <DateTimePicker
                        // Use the following way to customize the input field
                        renderInput={(props: any) => (
                          <TextField {...props} placeholder="Enter date here" variant="outlined" />
                        )}
                      /> */}
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                <Grid item sm={5.5} sx={{ ml: 4 }}>
                  <Typography
                    className="lable-name"
                    sx={{
                      textAlign: 'left',
                      mt: '15px',
                      color: '#344054',
                    }}>
                    End Date
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateTimePicker']}>
                      {/* <DateTimePicker
                        textField={(props: any) => <TextField {...props} placeholder="Enter date here" variant="outlined" />}
                      /> */}
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item sm={6}>
                  <Typography
                    className="lable-name"
                    sx={{
                      textAlign: 'left',
                      mt: '15px',
                      color: '#344054',
                    }}>
                    Availability Status
                  </Typography>
                  <Select sx={{ width: '350px' }} value={availableStatus} onChange={handleStatusChange}>
                    <MenuItem value={10}>Available</MenuItem>
                    <MenuItem value={20}>Non Available</MenuItem>
                    <MenuItem value={30}>Part-Time</MenuItem>
                    <MenuItem value={40}>Available Soon</MenuItem>
                  </Select>
                </Grid>
                <Grid item sm={3}>
                  <Typography
                    className="lable-name"
                    sx={{
                      textAlign: 'left',
                      mt: '15px',
                      color: '#344054',
                    }}>
                    Off Market?
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
                        // checked={alignment.avalbl}
                        // onChange={handleSwitchChange}
                      />
                      <Typography>On</Typography>
                    </Stack>
                  </Grid>
                </Grid>
                <Grid item sm={3}>
                  <Button
                    className="common-button-green"
                    type="submit"
                    variant="contained"
                    sx={{
                      marginLeft: 1,
                      mt: 5,
                      mb: 2,
                      '&:hover': {
                        background: 'var(--Primary, #2CB512)',
                      },
                    }}>
                    Add to calendar
                  </Button>
                </Grid>
              </Grid>
              <Grid item sm={12} sx={{ mt: 3 }}>
                <Calendar
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 500 }}
                  components={{
                    month: {
                      // dateHeader: ({ date, label, localizer }: { date: any; label: any; localizer: any }) => {
                      //   const formattedDate = new Date(date);

                      //   return <CustomDay day={formattedDate} label={label} localizer={localizer} />;
                      // },
                      dateHeader: ({ date }: { date: Date }) => {
                        const formattedDate = new Date(date);
                        // const label = localizer.format(date, 'monthAndYear');

                        return <CustomDay day={formattedDate} />;
                      },
                    },
                  }}
                  step={30}
                  defaultDate={new Date(2023, 7, 1)}
                />
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
                onClick={handleAvailabilityDetailsData}
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
      ) : (
        <>
          <Box style={{ width: '900px' }}>
            <Grid>
              <Grid item sm={12} sx={{ mt: 5 }}>
                <Typography
                  className="lable-name"
                  sx={{
                    textAlign: 'left',
                    mt: '15px',
                    color: '#344054',
                  }}>
                  My Availability Details
                </Typography>
                <Grid alignItems="center" sx={{ mt: 1 }}>
                  <ToggleButtonGroup
                    color="primary"
                    sx={{ border: '1px solid #D0D5DD', borderRadius: '6px' }}
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label=" Type of Work">
                    {availability.map((availabilitydetail: { key: string; label: string }) => (
                      <ToggleButton
                        key={availabilitydetail.key}
                        sx={{
                          width: '171px',
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
                        value={availabilitydetail.label}>
                        {availabilitydetail.label}
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                </Grid>

                <Grid>
                  <Typography
                    className="lable-name"
                    sx={{
                      mt: '15px',
                      color: '#98A2B3',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      lineHeight: '20px',
                      width: '850px',
                    }}>
                    {renderContent()}
                  </Typography>
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
                onClick={handleAvailabilityDetailsData}
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
      )}
    </>
  );
};

function mapDispatchToProps(state: any) {
  return {
    userAccessToken: state.userAccessToken,
  };
}

export default connect(mapDispatchToProps)(AvailabilityDetails);
