import React, { useState } from 'react';
import { Button, Dialog, Box, Typography, Grid, TextField } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const BookingRequest = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ textAlign: 'center' }}>
        <Button
          className="common-button-white"
          onClick={handleOpen}
          type="submit"
          variant="contained"
          sx={{
            width: '341px',
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
          Send booking request
        </Button>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiDialog-paper': {
            width: '100%', 
            maxWidth: '903px', 
            height: 'auto', 
            padding: '30px',
          },
        }}
      >
        <Typography style={{ color: '#2CB512', fontSize: '18px', fontWeight: 600 }}> Send booking request </Typography>
        <Typography style={{ color: '#73787E', fontSize: '16px', fontWeight: 400 ,marginTop:'10px'}}> Define your project name and details and add a timeline for the talent member.</Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Typography className="lable-name" sx={{ textAlign: 'left', mt: '30px' }}>
              Project Name
            </Typography>
            <TextField
              className="formFields"
              sx={{ mt: 0.5, width: '100%', maxHeight: '200px' }}
              type="text"
              placeholder="Enter Project Name Here"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              className="lable-name"
              sx={{
                textAlign: 'left',
                color: '#344054',
              }}>
              Start Date
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DateTimePicker']}>
                <DateTimePicker />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              className="lable-name"
              sx={{
                textAlign: 'left',
                color: '#344054',
              }}>
              End Date
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DateTimePicker']}>
                <DateTimePicker />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <Typography className="lable-name" sx={{ textAlign: 'left',  color: '#344054',}}>
              Description (Required)
            </Typography>
            <TextField
              className="formFields"
              multiline
              rows={4}
              sx={{ mt: 0.5, width: '100%', maxHeight: '200px' }}
              type="text"
              placeholder="Type Something Here..."
            />
          </Grid>
        </Grid>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button
            className="common-button-white"
            type="submit"
            variant="contained"
            onClick={handleClose}
            sx={{
              width: '100%', 
              maxWidth: '271px', 
              height: '44px',
              marginRight: 2,
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
            sx={{
              width: '100%', 
              maxWidth: '271px', 
              height: '44px',
              marginRight: 2,
              mt: 3,
              mb: 2,
              '&:hover': {
                background: 'var(--Primary, #2CB512)',
              },
            }}
          >
            Request to hold
          </Button>
          <Button
            className="common-button-green"
            type="submit"
            variant="contained"
            sx={{
              width: '100%',
              maxWidth: '271px', 
              height: '44px',
              marginRight: 2,
              mt: 3,
              mb: 2,
              '&:hover': {
                background: 'var(--Primary, #2CB512)',
              },
            }}
          >
            Request to Hire
          </Button>
        </div>
      </Dialog>
    </>
  );
};

export default BookingRequest;
