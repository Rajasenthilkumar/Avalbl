import * as React from 'react';
import '../../../Assets/css/HomeScreen.css';
import { Avatar, Box, Button, Chip, Divider, Stack, Typography } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


import ListSubheader from '@mui/material/ListSubheader';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import BusinessCenterSharpIcon from '@mui/icons-material/BusinessCenterSharp';


import StaticMap from '../../../Assets/Images/static_map.png';
import dummyurl from '../../../Assets/Images/stretched-1920-1080-1331311.png';
import profilePic from '../../../Assets/Images/banner-04.png';

import  Carousel  from './Carousel/Carousel';

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


  return (
    <>
      <div className="Profile">
        <div className='Profile_left'> 
          <img className='backProfilePicture' src={dummyurl} alt="dfs" />
        </div>
        
        <Stack alignItems="right" pt={2} ml={20} mt={-10}  >
          <Avatar
            sx={{
              border: '5px solid white', 
              borderRadius: '8px',   
              width: 150,
              height: 150,
            }}
            src={profilePic}
            variant="rounded"></Avatar>
            <Box sx={{display:'flex',marginLeft:'290px', marginTop:'-80px'}}>
              <Typography variant='h5' mr={2}>James Fierro</Typography>
                  <Stack direction="row" spacing={1} sx={{ display: 'inline-flex' }}>
                    <Chip 
                      sx={{
                        backgroundColor: 'lightgreen', 
                        color: 'green', 
                      }} 
                      label="&#x2022; Available (Until 12/18/23)" 
                    />
                </Stack> 
            </Box>
            <Box sx={{display:'flex',marginLeft:'190px'}} mt={1}>
                   <BusinessCenterSharpIcon />
                   <Typography mr={2}>Jr.UX/UI Designer Username <span>james2690</span></Typography>
            </Box>
            <Box sx={{display:'flex',marginLeft:'900px', marginTop:'-40px'}}>
              <Button sx={{backgroundColor: 'white', color:'lightgreen', border:'1px solid lightgreen',fontSize: '12px', borderRadius:'8px'}} >Edit Profile</Button>
            </Box>
        </Stack>
      </div>
                    
        <div>
          <Carousel />
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
          backgroundColor: '#f7f8f8',
        }}>
        <Box
          sx={{
            borderRadius: '24px',
            background: 'var(--White, #FFF)',
            width: '50%',
          }}>
          <Box sx={{ padding: '50px', paddingTop: '40px' }}>
            <Typography
              style={{
                margin: '0px 0px 0px 0px',
                fontSize: '22px',
                fontWeight: 'bold',
                textAlign: 'left',
                color: 'var(--green)',
              }}>
              About James Van
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
              My name is James van. I live in Argentina and I love what I do. I grew up watching cartoons, drawing, making my
              own Post-it animations, so becoming an Animator was meant to be. All of that made what in today. Being in this
              business from atmost 15 years, gave me the experience, speed, skills and resources to transform an idea into a
              beautiful animated product .
            </Typography>

            <div style={{ display: 'flex' }}>
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
                  Availability (until 12/18/24)
                </Typography>
              </div>

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
                  $50/hr - $100/hr
                </Typography>
              </div>
            </div>

            <div style={{ display: 'flex' }}>
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
                  Jr. UX/UI Designer
                </Typography>
              </div>

              <div>
                <Typography
                  variant="h3"
                  style={{
                    margin: '30px 0px 0px 100px',
                    fontSize: '22px',
                    fontWeight: 'bold',
                    textAlign: 'left',
                    color: 'var(--green)',
                  }}>
                  Total Experience
                </Typography>

                <Typography
                  style={{
                    margin: '10px 0px 0px 100px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#0000005c',
                    display: 'flex',
                  }}>
                  <BorderLinearProgress variant="determinate" value={100} style={{ width: '100px' }} />
                  <BorderLinearProgress variant="determinate" value={50} style={{ width: '100px' }} />
                  <BorderLinearProgress variant="determinate" value={0} style={{ width: '100px' }} />
                </Typography>
                <Typography
                  style={{
                    margin: '0px 0px 0px 100px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#0000005c',
                    display: 'flex',
                  }}>
                  <div style={{ width: '100px', textAlign: 'center' }}>1-5</div>
                  <div style={{ width: '100px', textAlign: 'center' }}>5-10</div>
                  <div style={{ width: '100px', textAlign: 'center' }}>10+</div>
                </Typography>
              </div>
            </div>

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
              <Typography
                style={{
                  margin: '10px 0px 0px 0px',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  color: '#00000052',
                  width: 'auto',
                }}>
                XYZ Design Studio
              </Typography>
              <Typography
                style={{
                  margin: '10px 0px 0px 50px',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  color: '#00000052',
                  width: 'auto',
                }}>
                Reliance Industries
              </Typography>

              <Typography
                style={{
                  margin: '10px 0px 0px 50px',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  color: '#00000052',
                  width: 'auto',
                }}>
                Budget Group, Inc.
              </Typography>
              <Typography
                style={{
                  margin: '10px 0px 0px 50px',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  color: '#00000052',
                  width: 'auto',
                }}>
                Duke Energy Corp
              </Typography>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Typography
                style={{
                  margin: '10px 0px 0px 0px',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  color: '#00000052',
                  width: 'auto',
                }}>
                Acterna Corp
              </Typography>
              <Typography
                style={{
                  margin: '10px 0px 0px 90px',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  color: '#00000052',
                  width: 'auto',
                }}>
                Abbott Laboratories
              </Typography>

              <Typography
                style={{
                  margin: '10px 0px 0px 45px',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  color: '#00000052',
                  width: 'auto',
                }}>
                Cabot Corp
              </Typography>
              <Typography
                style={{
                  margin: '10px 0px 0px 105px',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  color: '#00000052',
                  width: 'auto',
                }}>
                First Data Corp
              </Typography>
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
            <div style={{ display: 'flex' }}>
              <List
                sx={{ width: '30%', maxWidth: '30%', bgcolor: '#f7f8f8' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    sx={{ fontSize: '20px', fontWeight: 'bold', bgcolor: '#f7f8f8' }}>
                    Designer
                  </ListSubheader>
                }>
                <Divider />
                <ListItemButton>
                  <ListItemText primary="Logo Design" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Brand Design" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Key Art" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Editorail Design" />
                </ListItemButton>
              </List>
              <List
                sx={{ width: '30%', maxWidth: '30%', bgcolor: '#f7f8f8', marginLeft: '20px', marginRight: '20px' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    sx={{ fontSize: '20px', fontWeight: 'bold', bgcolor: '#f7f8f8' }}>
                    Concept Artist
                  </ListSubheader>
                }>
                <Divider />
                <ListItemButton>
                  <ListItemText primary="Matte Painting" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Concept Art" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Visual development" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Color Scripts & Keys" />
                </ListItemButton>
              </List>

              <List
                sx={{ width: '30%', maxWidth: '30%', bgcolor: '#f7f8f8', marginLeft: '0px', marginRight: '20px' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    sx={{ fontSize: '20px', fontWeight: 'bold', bgcolor: '#f7f8f8' }}>
                    Experience Designer
                  </ListSubheader>
                }>
                <Divider />
                <ListItemButton>
                  <ListItemText primary="AR/VR" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Wayfinding" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Exhibition Design" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Concert Visuals" />
                </ListItemButton>
              </List>
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

            <div style={{ display: 'flex' }}>
              <List
                sx={{ width: '30%', maxWidth: '30%', bgcolor: '#f7f8f8' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    sx={{ fontSize: '20px', fontWeight: 'bold', bgcolor: '#f7f8f8' }}>
                    Design & Illustration
                  </ListSubheader>
                }>
                <Divider />
                <ListItemButton>
                  <ListItemText primary="Photoshop" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Premier Pro" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Cinema 4D" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Figma" />
                </ListItemButton>
              </List>
            </div>
          </Box>
        </Box>
        <Box
          sx={{
            borderRadius: '24px',
            background: 'var(--White, #FFF)',
            width: '30%',
            marginLeft: '20px',
            marginTop: '0px',
            marginBottom: '360px',
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
            <Button
              className=""
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                ml: 3,
                width: '100px',
                textTransform: 'none',
                backgroundColor: '#f7f8f8!important',
                color: '#00000096',
                fontSize: '18px',
                fontWeight: 'bold',
                borderRadius: '20px',
              }}>
              English
            </Button>

            <Button
              className=""
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                ml: 5,
                width: '100px',
                textTransform: 'none',
                backgroundColor: '#f7f8f8!important',
                color: '#00000096',
                fontSize: '18px',
                fontWeight: 'bold',
                borderRadius: '20px',
              }}>
              French
            </Button>

            <Button
              className=""
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                ml: 5,
                width: '100px',
                textTransform: 'none',
                backgroundColor: '#f7f8f8!important',
                color: '#00000096',
                fontSize: '18px',
                fontWeight: 'bold',
                borderRadius: '20px',
              }}>
              German
            </Button>
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
          <img src={StaticMap} alt="login02" style={{ width: '400px', marginLeft: '20px' }} />

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
              Bluenos Aires, CABA, Argentina
            </Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: '15px' }}>
            <QueryBuilderIcon style={{ color: '#00000052', marginLeft: '20px', marginRight: '0px' }} />
            <Typography
              style={{
                margin: '0px 0px 0px 5px',
                fontSize: '15px',
                fontWeight: 'bold',
                textAlign: 'left',
                color: '#00000052',
                width: 'auto',
              }}>
              10.00 PM EST (+ 5hrs)
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
            }}>
            www.jamesvanden.com
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
            }}>
            <FacebookIcon />
            <LinkedInIcon style={{ marginLeft: '20px', marginRight: '20px' }} />
            <TwitterIcon style={{ marginLeft: '0px', marginRight: '20px' }} />
            <InstagramIcon style={{ marginLeft: '0px', marginRight: '20px' }} />
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default UserProfile;
