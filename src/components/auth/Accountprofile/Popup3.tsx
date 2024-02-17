import React, { useState } from 'react';
import { Button, Dialog, Box, Typography, Grid, TextField } from '@mui/material';

const SendMessage = () => {
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
            width: '108px', 
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
         Message
        </Button>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiDialog-paper': {
            width: '90%', 
            maxWidth: '903px', 
            padding: '30px',
            height: 'auto', 
          },
        }}
      >
        <Typography style={{ color: '#2CB512', fontSize: '18px', fontWeight: 600 }}> Send message to selected artist </Typography>
        <Typography style={{ color: '#73787E', fontSize: '16px', fontWeight: 400,marginTop:'10px' }}> The message you wire it will directly share to induvial of their chats.</Typography>

        <Grid container spacing={2}> 
          <Grid item xs={12}>
            <Typography className="lable-name" sx={{ textAlign: 'left', mt: '30px' }}>
              Write message 
            </Typography>
            <TextField
              className="formFields"
              multiline
              rows={5}
              sx={{ mt: 0.5, width: '100%' }}
              type="text"
              placeholder="Type Something Here..."
            />
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button
            className="common-button-white"
            type="submit"
            variant="contained"
            onClick={handleClose}
            sx={{
              width: '100%', 
              maxWidth: '333px',
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
              maxWidth: '333px',
              height: '44px',
              marginRight: 2,
              mt: 3,
              mb: 2,
              '&:hover': {
                background: 'var(--Primary, #2CB512)',
              },
            }}
          >
            Send Message 
          </Button>
        </Box>
      </Dialog>
    </>
  );
};

export default SendMessage;
