import React from 'react';
import { Grid, TextField,Typography, Box,Button } from '@mui/material';
import image1 from '../../../Assets/Images/Gag1.png'
import uploadCloud from '../../../Assets/Images/uploadCloud.png'
import profile from '../../../Assets/Images/Image (1).png';
const TeamProfile = () => {
    const handleCancelClick = () => {
        // Handle cancel action
    };

    const handleSubmitClick = () => {
        // Handle save action
    };

    return (
        <>
          <div style={{ margin: '0px', position: 'relative' }}> 
        <Grid
          container
          sx={{
            position: 'absolute',
            top: -140,
            right: 0,
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
          }}
        >
          <Button
            className="common-button-white"
            type="submit"
            variant="contained"
            onClick={handleCancelClick}
            sx={{
              width: '167px',
              height: '44px',
              marginRight: 1,
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
            onClick={handleSubmitClick}
            sx={{
              width: '121px',
              height: '44px',
              marginLeft: 1,
              '&:hover': {
                background: 'var(--Primary, #2CB512)',
              },
            }}
          >
            Submit
          </Button>
        
        </Grid>
       
       
      </div>
      
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3} pr={0}>
                        <div style={{ color: '#667085', fontSize: '16px', fontWeight: 400 }}>
                            <p>Note: Set your team attributes here, As well as add and remove team members.</p>
                            <p>Only team admins can change this information</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Box sx={{ height: '409px' ,borderRadius:'10px',backgroundColor:'#FFFFFF'}}>
                            <div className="pers-box" style={{ padding: '20px' }}>
                                <form>
                                    <Grid container >
                                        <Grid item xs={12}>
                                            <Typography sx={{ fontsize: '14px', fontWeight: 400, color: '#344054',pb:1 }} className="lable-name"> Team Name</Typography>
                                            <TextField
                                                className="formFields"
                                                name="firstName"
                                                placeholder="Blue Need"
                                                required
                                                fullWidth
                                            />

                                        </Grid>
                                        <Grid item xs={12} sx={{ paddingTop:'20px',paddingBottom:'5px', }}>
                                            <Typography style={{  fontWeight: 400,color: '#344054' }} className="lable-name"> Team Logo (200*200)</Typography>
                                        </Grid>
                                        <Grid item xs={3} md={3} lg={1.3}>    
                                            <div className="profile-info">
                                                <div className="pro-image " style={{ width: '80px' ,paddingTop:'10px'}}>
                                                    <img src={image1} alt="img" id="img-logo" className="img-fluid profile-pic3" />
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={9} md={9} lg={10.7} pl={0}>

                                            <Box
                                                className="p-image imageBox"
                                                sx={{ height: '112px', textAlign: 'center', padding: '15px' }}>
                                                <img src={uploadCloud} alt="img" className="img-fluid upload-button" />
                                                <Typography className="note" sx={{ color: 'var(--Primary, #2CB512)', textAlign: 'center', fontSize: '12px', fontWeight: 600, lineHeight: '18px' }}>
                                                    Drop & Drag, or Click to upload
                                                </Typography>
                                                <Typography sx={{ color: 'var(--gray-400, #98A2B3)', textAlign: 'center', fontSize: '12px', fontWeight: 400, lineHeight: '18px' }}>
                                                    JPG, PNG Format (max. 500*500)
                                                </Typography>
                                            </Box>

                                        </Grid>
                                    </Grid>
                                </form>
                                <Box sx={{ mt: 3,  border: '2px solid #F2F4F7',borderRadius:'10px' }}>
                                    <div className="active-member">
                                        <div className="active-title" style={{ fontSize: '14px', fontWeight: 400, color: '#667085', backgroundColor: '#F2F4F7', }}>
                                            <Typography sx={{ padding: '10px', fontSize: '14px' }}>Active Members</Typography>
                                        </div>
                                        <div className="pro-cont member-content" style={{ display: "flex", padding: '10px' }}>
                                            <div className="pro-img">

                                                <img src={profile} width={'50px'} height={'50px'} alt="img" className="img-fluid" />
                                            </div>
                                            <div className="pro-info">
                                                <div className="acc-name dis-align" style={{ marginLeft: '20px' }}>
                                                    <Typography sx={{ color: '#101828', fontSize: '16px', fontWeight: 500 }}>Micheal Johns <span style={{ marginLeft: '20px', color: '#039855', fontSize: '14px', fontWeight: 500 }}>Admin</span></Typography>
                                                    <Typography sx={{ color: '#667085', fontSize: '14px', fontWeight: '400', paddingTop: '2px' }}>cogip41468@serbig.com</Typography>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </Box>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </>
    );
};

export default TeamProfile;
