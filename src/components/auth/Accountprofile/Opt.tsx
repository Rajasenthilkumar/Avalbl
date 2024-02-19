import React, { useState } from 'react';
import { Grid,Button, Typography, Switch } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogActions, } from '@mui/material';
import { styled } from '@mui/material/styles';

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
export default function Opt() {
    const [openDialog, setOpenDialog] = useState(false); // State to control the visibility of the dialog

  const handleSwitchToggle = () => {
    setOpenDialog(true); // Open the dialog when the switch is toggled on
  };

  const handleDialogClose = () => {
    setOpenDialog(false); // Close the dialog
  };
  return (
    <div>
        
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
  )
}
