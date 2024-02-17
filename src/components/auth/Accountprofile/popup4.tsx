
import React, { useState } from 'react';
import { Button, Dialog, Box, Typography, Grid } from '@mui/material';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import profile from '../../../Assets/Images/Image (1).png';

const Challenge = () => {
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
            width: '141px',
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
         Challenge
        </Button>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiDialog-paper': {
            width: '561px',
            height: 'auto', 
            padding: '30px'
          },
        }}
      >
        <Typography style={{ color: '#2CB512', fontSize: '18px', fontWeight: 600 }}>This person is already is hold by someone </Typography>
        <Typography style={{ color: '#73787E', fontSize: '16px', fontWeight: 400,marginTop:'10px' }}> You can skip this artist or make change for hiring the artist </Typography>
        <Typography style={{ color: '#73787E', fontSize: '16px', fontWeight: 400,marginTop:'10px' }}> If you are going to challenge the 1st account holder has 24 hrs to accept the deal or you will going to hire this artist  </Typography>

        <Grid
          sx={{
            display: 'flex',
            width: '300px',
            height: '82px',
            borderRadius: '10px',
            border: '2px solid #F2F4F7',
            padding: '10px',
            marginTop: '40px',
            justifyContent: 'space-between'
          }}
        >
          <Grid item xs={2}>
            <img src={profile} alt="login02" style={{ width: '50px', height: '50px', }} />
          </Grid>
          <Grid item xs={8} >
            <Typography>
              Alisa  Hester
            </Typography>
            <Typography>
              Jr.Ux/Ui Designer ! U.S.
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <NorthEastIcon />
          </Grid>
        </Grid>
       
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button
            className="common-button-white"
            type="submit"
            variant="contained"
             onClick={handleClose}
            sx={{
              width: '244px',
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
            sx={{
              width: '244px',
              height: '44px',
              marginLeft: 1,
              mt: 3,
              mb: 2,
              '&:hover': {
                background: 'var(--Primary, #2CB512)',
              },
            }}
          >
          Change
          </Button>
        </div>
      </Dialog>
    </>
  );


  
};

export default Challenge;
