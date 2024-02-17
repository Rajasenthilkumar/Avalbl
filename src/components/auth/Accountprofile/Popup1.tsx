
import React, { useState } from 'react';
import { Button, Dialog, Box, Typography, Grid } from '@mui/material';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import profile from '../../../Assets/Images/Image (1).png';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const ReportArtist = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

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
          Report this artist?
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
        <Typography style={{ color: '#2CB512', fontSize: '18px', fontWeight: 600 }}> Are you sure you want to report this artist? </Typography>

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
        <Grid sx={{ marginTop: '40px', }}>
          <FormControl>
            <FormLabel sx={{ color: '#667085', fontSize: '18px', fontWeight: 600 }}>Select reason</FormLabel>
            <RadioGroup
              sx={{ color: '#8C87A2' }}
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel sx={{ color: '#848094', fontSize: '16px', fontWeight: 500 }} value="False identity" control={<Radio />} label="False identity" />
              <FormControlLabel sx={{ color: '#848094', fontSize: '16px', fontWeight: 500 }} value="Aggressive behavior" control={<Radio />} label="Aggressive behavior" />
              <FormControlLabel sx={{ color: '#848094', fontSize: '16px', fontWeight: 500 }} value="Plagiarism" control={<Radio />} label="Plagiarism" />
              <FormControlLabel sx={{ color: '#848094', fontSize: '16px', fontWeight: 500 }} value="Other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
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
          Report
          </Button>
        </div>
      </Dialog>
    </>
  );
};

export default ReportArtist;
