/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, TextField, InputAdornment, Button } from '@mui/material';
import '../../../Assets/css/Common.css';
import uploadCloud from '../../../Assets/Images/uploadCloud.png';
// import facebook from '../../../Assets/Images/facebook.png';
// import linkedin from '../../../Assets/Images/linkedin.png';
// import behance from '../../../Assets/Images/behance.png';
// import instagram from '../../../Assets/Images/instagram.png';
// import tiktok from '../../../Assets/Images/tiktok.png';
// import SocialMedia from '../../../Assets/Images/SocialMedia.png';
import Env from 'services/Env';
import { connect } from 'react-redux';

interface PortfoliosSocialProps {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
  userAccessToken: string;
}

interface SocialMedialProps {
  key: string;
  label: string;
  logoPath: string;
}

const PortfoliosSocial: React.FC<PortfoliosSocialProps> = ({ activeStep, handleNext, handleBack, userAccessToken }) => {
  const [socialLinks, setSocialLinks] = useState<SocialMedialProps[]>([]);

  useEffect(() => {
    socialMediaData();
  }, []);

  const socialMediaData = () => {
    const getSocialDatas = Env.get(`user/socialMedia`, userAccessToken);
    getSocialDatas
      .then((response: any) => {
        if (response.status === 200) {
          console.log('RES', response.data.data);
          setSocialLinks(response.data.data);

          // setToast({ message: response.data.message.value, type: 'success' });
        }
      })
      .catch((error: any) => {
        console.log('RESPONSE', error);
        // setToast({ message: error.response.data.message.value, type: 'error' });
      });
  };

  const handlePortfoliosSocialData = () => {
    console.log('ProfilePic');
    handleNext();
  };

  const handleLinkChange = (key: any, value: any) => {
    // Handle link changes, you can store them in the state or dispatch an action
    console.log(`Link for ${key}: ${value}`);
  };

  return (
    <>
      <Typography
        sx={{
          fontSize: '30px',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: '38px',
          paddingTop: '30px',
        }}>
        Portfolios and Social
      </Typography>
      <Box style={{ width: '900px' }}>
        <Typography
          className="lable-name"
          sx={{
            textAlign: 'left',
            mt: '15px',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '20px',
          }}>
          Portfolio images (Up to 6 images are allowed)
        </Typography>
        <Box sx={{ mt: '12px' }}>
          <Box
            className="p-image imageBox"
            sx={{
              height: '105px',
              textAlign: 'center',
              width: '845px',
              pt: '25px',
            }}>
            <img src={uploadCloud} alt="img" className="img-fluid upload-button" />
            <input className="file-upload" type="file" accept="image/*" />
            <Typography
              className="note"
              sx={{
                color: 'var(--Primary, #2CB512)',
                textAlign: 'center',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '18px',
              }}>
              Drop & Drag, or Click to upload
            </Typography>
            <Typography
              sx={{
                color: 'var(--gray-400, #98A2B3)',
                textAlign: 'center',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '18px',
              }}>
              JPG,PNG Format (max. 500*500)
            </Typography>
          </Box>
        </Box>
        <Grid>
          <Grid item sm={12}>
            <Typography
              className="lable-name"
              sx={{
                textAlign: 'left',
                mt: '15px',
              }}>
              Portfolio Website
            </Typography>
            <TextField
              className="formFields"
              sx={{ mt: 0, width: '850px' }}
              type="email"
              name="email"
              placeholder="Portfolio URL..."
              required
            />
          </Grid>
        </Grid>
        <Grid>
          <Typography
            className="lable-name"
            sx={{
              textAlign: 'left',
              mt: '15px',
            }}>
            Social Media
          </Typography>
          {socialLinks.map((socialMedia: SocialMedialProps) => (
            <TextField
              key={socialMedia.key}
              className="formFields"
              sx={{ mt: 2, width: '850px' }}
              type="text"
              name={socialMedia.key}
              placeholder={`Add ${socialMedia.label} link`}
              onChange={(e) => handleLinkChange(socialMedia.key, e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {/* <img src={socialMedia.logoPath} alt={socialMedia.label} style={{ width: '24px', height: '24px' }} /> */}
                    {/* <img
                      src="C:\Users\TLSPC-061\Desktop\AVALBL - FE\Avalbl_Frontend\src\Assets\Images\facebook"
                      alt={socialMedia.label}
                      style={{ width: '24px', height: '24px' }}
                    /> */}
                    <img
                      src={`file:///C:/Users/TLSPC-061/Desktop/AVALBL%20-%20FE/Avalbl_Frontend/src/Assets/Images/facebook.png`}
                      alt={socialMedia.label}
                      style={{ width: '24px', height: '24px' }}
                    />
                  </InputAdornment>
                ),
              }}
              required
            />
          ))}
          {/* <TextField
            className="formFields"
            sx={{ mt: 0, width: '850px' }}
            type="email"
            name="email"
            placeholder="Add link"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={facebook} alt="mapPin" style={{ width: '24px', height: '24px' }} />
                </InputAdornment>
              ),
            }}
            required
          />
          <TextField
            className="formFields"
            sx={{ mt: 2, width: '850px' }}
            type="email"
            name="email"
            placeholder="Add link"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={linkedin} alt="mapPin" style={{ width: '24px', height: '24px' }} />
                </InputAdornment>
              ),
            }}
            required
          />
          <TextField
            className="formFields"
            sx={{ mt: 2, width: '850px' }}
            type="email"
            name="email"
            placeholder="Add link"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={behance} alt="mapPin" style={{ width: '24px', height: '24px' }} />
                </InputAdornment>
              ),
            }}
            required
          />
          <TextField
            className="formFields"
            sx={{ mt: 2, width: '850px' }}
            type="email"
            name="email"
            placeholder="Add link"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={instagram} alt="mapPin" style={{ width: '24px', height: '24px' }} />
                </InputAdornment>
              ),
            }}
            required
          />
          <TextField
            className="formFields"
            sx={{ mt: 2, width: '850px' }}
            type="email"
            name="email"
            placeholder="Add link"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={tiktok} alt="mapPin" style={{ width: '24px', height: '24px' }} />
                </InputAdornment>
              ),
            }}
            required
          />
          <TextField
            className="formFields"
            sx={{ mt: 2, width: '850px' }}
            type="email"
            name="email"
            placeholder="Add link"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={SocialMedia} alt="mapPin" style={{ width: '24px', height: '24px' }} />
                </InputAdornment>
              ),
            }}
            required
          /> */}
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
            onClick={handlePortfoliosSocialData}
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
  );
};

function mapDispatchToProps(state: any) {
  return {
    userAccessToken: state.userAccessToken,
  };
}

export default connect(mapDispatchToProps)(PortfoliosSocial);
