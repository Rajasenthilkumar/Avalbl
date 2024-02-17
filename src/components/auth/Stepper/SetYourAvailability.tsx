import React from 'react';
import { Box, Typography, Grid, Stack, Switch, Select, MenuItem, Button } from '@mui/material';
import '../../../Assets/css/Common.css';
import { styled } from '@mui/material/styles';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import PropTypes from 'prop-types';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

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

const SetYourAvailability = () => {
  const localizer = momentLocalizer(moment);
  const [availableStatus, setAvailableStatus] = React.useState(10);

  const handleChange = (event: any) => {
    setAvailableStatus(event.target.value);
  };

  const CustomDay = ({ day }: { day: Date }) => {
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
            }}>
            Available
          </div>
        )}
      </div>
    );
  };

  CustomDay.propTypes = {
    day: PropTypes.instanceOf(Date).isRequired,
  };

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
            Set Your availability
          </Typography>
        </Grid>
        <Grid item sm={2} sx={{ mt: 3.5 }}>
          <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" sx={{ mt: 1 }}>
            <Typography>Use Calendar</Typography>
            <AntSwitch inputProps={{ 'aria-label': 'ant design' }} />
          </Stack>
        </Grid>
      </Grid>
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
                    textField={(props) => <TextField {...props} placeholder="Enter date here" variant="outlined" />}
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
                    textField={(props) => <TextField {...props} placeholder="Enter date here" variant="outlined" />}
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
              <Select sx={{ width: '350px' }} value={availableStatus} onChange={handleChange}>
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
              // views={['week']}
              components={{
                month: {
                  // dateHeader: ({ label, date, localizer }) => {
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
    </>
  );
};

export default SetYourAvailability;
