import React, { useState } from 'react';
import { Avatar, Box, Button, Chip, Divider, Stack, Typography, Switch } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogActions, } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import headerPofile from '../../../Assets/Images/header profile.png';
import profileheader from '../../../Assets/Images/profile header.png';

import FmdGoodIcon from '@mui/icons-material/FmdGood';
import BusinessCenterSharpIcon from '@mui/icons-material/BusinessCenterSharp';
import StaticMap from '../../../Assets/Images/static_map.png';
import Editprofile from './Editprofile';
import Carousel from './Carousel/Carousel';
import Container from '@mui/material/Container';

import '../../../Assets/css/Skills.css';
//  import Changepassword from './Changepassword';
// import dummyurl from '../../../Assets/Images/stretched-1920-1080-1331311.png';
// import profilePic from '../../../Assets/Images/banner-04.png';

// Your provided JSON data
const profileData =
{
  "status": true,
  "data": {
    "firstName": "Yuvaraj",
    "lastName": "Test",
    "jobTitle": "Test Title",
    "email": "mailto:yuvaraj.sinontechs@gmail.com",
    "userName": "Yuv1453",
    "profilePath": "imageProfilePath",
    "headerPath": "headerProfilePath",
    "location": "India",
    "portfolioLink": "sinontech.in",
    "experience": 50,
    "about": "Empty Bio",
    "workType": {
      "label": "Full-Time",
      "key": "fulltime"
    },
    "rateFee": {
      "label": "Flat Fee",
      "key": "flatFee"
    },
    "range": {
      "label": "$25/hr-$50/hr",
      "key": "25hr50hr"
    },
    "language": [
      "Arabic",
      "English"
    ],
    "socialMedia": [
      {
        "label": "Facebook",
        "key": "facebook",
        "logoPath": "https://d1b0o98gwlv9wy.cloudfront.net/socialMedia/facebook.png",
        "link": "https://www.facebook.com/yuvaraj"
      },
      {
        "label": "LinkedIn",
        "key": "linkedin",
        "logoPath": "https://d1b0o98gwlv9wy.cloudfront.net/socialMedia/linkedin.png",
        "link": "https://www.linkedin.com/yuvaraj"
      }
    ],
    "porfolio": [
      "image1",
      "image2",
      "image3"
    ],
    "skills": [
      {
        "category": {
          "label": "Director Level",
          "key": "directorLevel"
        },
        "skills": [
          {
            "label": "Art Direction",
            "key": "artDirection",
            "information": "Sample Information"
          },
          {
            "label": "Animation Direction",
            "key": "animationDirection",
            "information": "Sample Information"
          }
        ]
      },
      {
        "category": {
          "label": "Concept Artist",
          "key": "conceptArtist"
        },
        "skills": [
          {
            "label": "Concept Art",
            "key": "conceptArt",
            "information": "Sample Information"
          },
          {
            "label": "Storyboard",
            "key": "storyboard",
            "information": "Sample Information"
          }
        ]
      }
    ],
    "tools": [
      {
        "category": {
          "label": "Design & Illustration",
          "key": "designIllustration"
        },
        "tools": [
          {
            "label": "Photoshop",
            "key": "photoshop"
          },
          {
            "label": "Procreate",
            "key": "procreate"
          }
        ]
      },
      {
        "category": {
          "label": "2D Animation",
          "key": "2dAnimation"
        },
        "tools": [
          {
            "label": "After Effects",
            "key": "afterEffects"
          },
          {
            "label": "Tv Paint",
            "key": "tvPaint"
          }
        ]
      }
    ],
    "company": [
      "ABC",
      "CDE"
    ],
    "availableLocation": {
      "label": "On-Site",
      "key": "onsite"
    },
    "availability": {
      "label": "Available Until(12/02/2024)"
    }
  },
  "message": {
    "codes": "success",
    "value": "Success!",
    "html": "Success!"


  }
}

const UserProfile = () => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };


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
  const [openDialog, setOpenDialog] = useState(false); // State to control the visibility of the dialog

  const handleSwitchToggle = () => {
    setOpenDialog(true); // Open the dialog when the switch is toggled on
  };

  const handleDialogClose = () => {
    setOpenDialog(false); // Close the dialog
  };

  return (
    <>
      <div className="Profile" style={{ backgroundColor: '#f7f8f8' }}>
        <div className='Profile_left'>
          <img src={headerPofile} alt="Header" style={{ width: '100%', height: 'auto' }} />


        </div>
        <Container maxWidth="xl">
          <Stack alignItems="right" pt={2} mt={0} >
            <Avatar
              sx={{
                border: '2px solid white',
                borderRadius: '8px',
                width: '182px',
                height: '182px',
              }}
              // src={profileData.data.profilePath}profileheader
              src={profileheader}
              variant="rounded"
            ></Avatar>
            <Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: { xs: '20px', md: '210px' }, marginTop: { xs: '-20px', md: '-80px' } }}>
                  <Box sx={{ display: 'flex', }}>
                    <Typography sx={{ textTransform: 'none', fontWeight: 600, fontSize: '28px' }} mr={2}>{`${profileData.data.firstName} ${profileData.data.lastName}`}</Typography>
                    <Stack direction="row" sx={{ display: 'inline-flex' }}>
                      <Chip
                        sx={{
                          backgroundColor: '#D5EBD1',
                          color: '#2CB512',
                          fontWeight: 500,
                          fontSize: '16px',

                        }}
                        label={`• ${profileData.data.availability.label}`}
                      />
                    </Stack>
                  </Box>
                  <Box sx={{ display: 'flex', marginTop: '1rem' }}>
                    <BusinessCenterSharpIcon style={{ color: '#73787E' }} />
                    <Typography>
                      <span style={{ color: '#73787E', fontWeight: 400, fontSize: '16px', marginLeft: '5px' }}>{profileData.data.jobTitle}</span>
                      <span style={{ color: '#667085', fontWeight: 500, fontSize: '16px', }}> Username</span>
                      <span style={{ fontWeight: 500, marginLeft: '8px', fontSize: '16px' }}>{profileData.data.userName}</span>
                    </Typography>

                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: { xs: 'center', md: 'flex-end' },
                    marginTop: { xs: '-10px', md: '-60px' },
                  }}
                >
                  <Stack direction="column" spacing={1} sx={{ display: 'inline-flex', marginTop: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      {isEditing ? (
                        <>
                          <div>
                            <Button
                              className="common-button-white"
                              type="submit"
                              variant="contained"
                              onClick={handleCancelClick}
                              sx={{
                                width: '167px',
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
                                width: '121px',
                                height: '44px',
                                marginLeft: 1,
                                mt: 3,
                                mb: 2,
                                '&:hover': {
                                  background: 'var(--Primary, #2CB512)',
                                },
                              }}
                            >
                              Save
                            </Button>
                          </div>
                        </>
                      ) : (
                        <>
                          <Button
                            className="common-button-green"
                            type="submit"
                            variant="contained"
                            sx={{
                              marginLeft: 1,
                              mt: 3,
                              mb: 2,
                              '&:hover': {
                                background: 'var(--Primary, #2CB512)',
                              },
                            }}
                          >
                            Upgrade Premium
                          </Button>
                          <span style={{ marginRight: '10px' }} />
                          <Button
                            className="common-button-white"
                            type="submit"
                            variant="contained"
                            onClick={handleEditClick}
                            sx={{
                              width: '130px!important',
                              marginRight: 1,
                              mt: 3,
                              mb: 2,
                              '&:hover': {
                                color: 'var(--Primary, #2CB512)',
                                backgroundColor: '#fff',
                              },
                            }}
                          >
                            Edit Profile
                          </Button>
                        </>

                      )}
                    </div>
                    {/* Typography and AntSwitch components */}
                    {isEditing && (
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
                    )}
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </div>
      {isEditing ? (
        <div className="editProfile" style={{ backgroundColor: '#f7f8f8', height: '100vh' }} >
          <Editprofile />
        </div>
      ) : (
        <>

          <div className="carousel" style={{ backgroundColor: '#f7f8f8' }}>
            <Carousel />
            {/* <Changepassword/> */}

          </div>

          <Box
            sx={{
              display: 'flex',
              padding: '20px 0px',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              flex: '1 0 0',
              alignSelf: 'stretch',
              backgroundColor: '#f7f8f8!important',

            }}>
            <Box
              sx={{
                borderRadius: '24px',
                background: 'var(--White, #FFF)',
                width: '50%',
                borderTop: '8px solid #D3FACC',



              }}>
              <Box sx={{ padding: '50px', borderTopRadius: 0 }}>
                <Typography
                  style={{
                    margin: '0px 0px 0px 0px',
                    fontSize: '22px',
                    fontWeight: 'bold',
                    textAlign: 'left',
                    color: 'var(--green)',

                  }}>
                  About {`${profileData.data.firstName} ${profileData.data.lastName}`}
                </Typography>
                <Typography
                  style={{
                    margin: '20px 0px 0px 0px',
                    fontSize: '14px',
                    fontWeight: 600,
                    textAlign: 'left',
                    color: '#0000005c',
                    lineHeight: '25px',
                  }}>
                  {/* My name is James van. I live in Argentina and I love what I do. I grew up watching cartoons, drawing, making my
                  own Post-it animations, so becoming an Animator was meant to be. All of that made what in today. Being in this
                  business from atmost 15 years, gave me the experience, speed, skills and resources to transform an idea into a
                  beautiful animated product . */}
                  {profileData.data.about}
                </Typography>


                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <div>
                      <Typography
                        variant="h3"
                        style={{
                          margin: '30px 0px 0px 0px',
                          fontSize: '22px',
                          fontWeight: 'bold',
                          textAlign: 'left',
                          color: 'var(--green)',
                        }}>

                        Availability
                      </Typography>
                      <Typography
                        style={{
                          margin: '10px 0px 0px 0px',
                          fontSize: '15px',
                          fontWeight: 'bold',
                          textAlign: 'left',
                          color: '#00000052',
                        }}>
                        {profileData.data.availability.label}
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={8}>
                    <div>
                      <Typography
                        variant="h3"
                        style={{
                          margin: '30px 0px 0px 50px',
                          fontSize: '22px',
                          fontWeight: 'bold',
                          textAlign: 'left',
                          color: 'var(--green)',
                        }}>
                        Rate Range
                      </Typography>

                      <Typography
                        style={{
                          margin: '10px 0px 0px 50px',
                          fontSize: '15px',
                          fontWeight: 'bold',
                          textAlign: 'left',
                          color: '#00000052',
                        }}>
                        {profileData.data.range.label}
                      </Typography>
                    </div>
                  </Grid>

                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <div>
                      <Typography
                        variant="h3"
                        style={{
                          margin: '30px 0px 0px 0px',
                          fontSize: '22px',
                          fontWeight: 'bold',
                          textAlign: 'left',
                          color: 'var(--green)',
                        }}>
                        Job Title
                      </Typography>
                      <Typography
                        style={{
                          margin: '10px 0px 0px 0px',
                          fontSize: '15px',
                          fontWeight: 'bold',
                          textAlign: 'left',
                          color: '#00000052',
                        }}>
                        {profileData.data.jobTitle}
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={8}>
                    <div>
                      <Typography
                        variant="h3"
                        style={{
                          margin: '30px 0px 0px 50px',
                          fontSize: '22px',
                          fontWeight: 'bold',
                          textAlign: 'left',
                          color: 'var(--green)',
                        }}>
                        Total Experience
                      </Typography>

                      <Typography
                        style={{
                          margin: '10px 0px 0px 50px',
                          fontSize: '14px',
                          fontWeight: 600,
                          color: '#0000005c',
                          display: 'flex',
                        }}
                      >
                        <BorderLinearProgress variant="determinate" value={Math.min(100, profileData.data.experience * 20)} style={{ width: '100px', height: '12px' }} />
                        <BorderLinearProgress variant="determinate" value={Math.min(100, (profileData.data.experience - 5) * 20)} style={{ width: '100px', height: '12px' }} />
                        <BorderLinearProgress variant="determinate" value={Math.min(100, (profileData.data.experience - 10) * 20)} style={{ width: '100px', height: '12px' }} />

                      </Typography>
                      <Typography
                        style={{
                          margin: '0px 0px 0px 50px',
                          fontSize: '14px',
                          fontWeight: 600,
                          color: '#0000005c',
                          display: 'flex',
                        }}
                      >
                        <div style={{ width: '100px', textAlign: 'center' }}>1-5</div>
                        <div style={{ width: '100px', textAlign: 'center' }}>5-10</div>
                        <div style={{ width: '100px', textAlign: 'center' }}>10+</div>
                      </Typography>
                    </div>
                  </Grid>

                </Grid>


                <Typography
                  style={{
                    margin: '20px 0px 0px 0px',
                    fontSize: '22px',
                    fontWeight: 'bold',
                    textAlign: 'left',
                    color: 'var(--green)',
                  }}>
                  Client List
                </Typography>

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  {profileData.data.company.map((company, index) => (
                    <Typography
                      key={index}
                      style={{
                        margin: '10px 50px 0px 0px',
                        fontSize: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left',
                        color: '#00000052',
                        width: 'auto',
                      }}>
                      {company}
                    </Typography>
                  ))}
                </div>
                <Typography
                  style={{
                    margin: '20px 0px 20px 0px',
                    fontSize: '22px',
                    fontWeight: 'bold',
                    textAlign: 'left',
                    color: 'var(--green)',
                  }}>
                  Skills
                </Typography>
                <div className="box-content" style={{ display: 'flex', overflow: 'hidden' }}>
                  {profileData.data.skills.map((category) => (
                    <List
                      key={category.category.key}
                      sx={{
                        width: '274px',
                        bgcolor: '#f7f8f8',
                        marginRight: '20px',
                        borderRadius: '10px',
                        color: '#667085'
                        // border: '1px solid #d0d5dd', // Added border
                      }}
                      component="nav"
                      aria-labelledby="nested-list-subheader"
                    >

                      <Typography style={{ fontSize: '20px', fontWeight: 'bold', color: '#667085', backgroundColor: '#f7f8f8', margin: '10px 15px 10px 15px ', }}>
                        {category.category.label}
                      </Typography>


                      <Divider />
                      {category.skills.map((skill) => (
                        <Typography key={skill.key} sx={{ padding: '10px 15px 10px 15px ', margin: '10px' }} >
                          {skill.label}
                        </Typography>
                      ))}

                    </List>
                  ))}
                </div>

                <Typography
                  style={{
                    margin: '20px 0px 20px 0px',
                    fontSize: '22px',
                    fontWeight: 'bold',
                    textAlign: 'left',
                    color: 'var(--green)',
                  }}>
                  Tools
                </Typography>


                <div className="box-content" style={{ display: 'flex', overflow: 'hidden' }}>
                  {profileData.data.tools.map((category) => (
                    <List
                      key={category.category.key}
                      sx={{
                        width: '274px',
                        bgcolor: '#f7f8f8',
                        marginRight: '20px',
                        borderRadius: '10px',
                        color: '#667085'
                        // border: '1px solid #d0d5dd', // Added border
                      }}
                      component="nav"
                      aria-labelledby="nested-list-subheader"
                    >

                      <Typography style={{ fontSize: '20px', fontWeight: 'bold', color: '#667085', backgroundColor: '#f7f8f8', margin: '10px 15px 10px 15px ', }}>
                        {category.category.label}
                      </Typography>


                      <Divider />
                      {category.tools.map((tools) => (
                        <Typography key={tools.key} sx={{ padding: '10px 15px 10px 15px ', margin: '10px' }} >
                          {tools.label}
                        </Typography>
                      ))}

                    </List>
                  ))}
                </div>
              </Box>
            </Box>

            <Box
              sx={{
                borderRadius: '24px',
                background: 'var(--White, #FFF)',
                width: '30%',
                marginLeft: '20px',


              }}>
              <Typography
                style={{
                  margin: '20px 0px 20px 20px',
                  fontSize: '22px',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  color: 'var(--green)',
                }}>
                Languages
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                {profileData.data.language.map((language, index) => (
                  <Typography
                    key={index}


                    sx={{
                      mt: 2,
                      mb: 2,
                      ml: index === 0 ? 3 : 5,
                      width: '100px',
                      textTransform: 'none',
                      backgroundColor: '#EAECF0',
                      color: '#344054',
                      fontSize: '16px',
                      fontWeight: '400px!important ',
                      borderRadius: '20px',
                      padding: '10px',
                      textAlign: 'center',
                    }}>
                    {language}
                  </Typography>
                ))}
              </Box>
              <Typography
                style={{
                  margin: '20px 0px 20px 20px',
                  fontSize: '22px',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  color: 'var(--green)',
                }}>
                Location
              </Typography>
              <img src={StaticMap} alt="login02" style={{ width: '441px', height: '200px', marginLeft: '20px' }} />

              <div style={{ display: 'flex', flexDirection: 'row', marginTop: '15px' }}>
                <FmdGoodIcon style={{ color: '#00000052', marginLeft: '20px', marginRight: '0px' }} />
                <Typography
                  style={{
                    margin: '0px 0px 0px 5px',
                    fontSize: '15px',
                    fontWeight: 'bold',
                    textAlign: 'left',
                    color: '#00000052',
                    width: 'auto',
                  }}>
                  {profileData.data.location}
                </Typography>
              </div>
              <Typography
                style={{
                  margin: '20px 0px 20px 20px',
                  fontSize: '22px',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  color: 'var(--green)',
                }}>
                Portfolio Link
              </Typography>

              <Typography
                style={{
                  margin: '10px 0px 0px 20px',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  color: '#00000052',
                  width: 'auto',
                }}
              >
                <a
                  href={profileData.data.portfolioLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#00000052',
                    textDecoration: 'none',
                  }}
                >
                  {profileData.data.portfolioLink}
                </a>
              </Typography>
              <Typography
                style={{
                  margin: '20px 0px 20px 20px',
                  fontSize: '22px',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  color: 'var(--green)',
                }}>
                Social Media
              </Typography>
              <Typography
                style={{
                  margin: '10px 0px 20px 20px',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  color: '#00000052',
                  width: 'auto',
                  display: 'flex',
                }}
              >
                {profileData.data.socialMedia.map((social, index) => (
                  <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px' }}>
                    <img src={social.logoPath} alt={social.label} style={{ width: '30px', height: '30px' }} />
                  </a>
                ))}

              </Typography>
              <Box sx={{ textAlign: 'center' }}>
                <Button
                  className="common-button-white"
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

            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default UserProfile;


