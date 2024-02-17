import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, TextField, InputAdornment } from '@mui/material';
import '../../../Assets/css/Common.css';
import uploadCloud from '../../../Assets/Images/uploadCloud.png';
import facebook from '../../../Assets/Images/facebook.png';
import linkedin from '../../../Assets/Images/linkedin.png';
import behance from '../../../Assets/Images/behance.png';
import instagram from '../../../Assets/Images/instagram.png';
import tiktok from '../../../Assets/Images/tiktok.png';
import SocialMedia from '../../../Assets/Images/SocialMedia.png';
import Portfoliimage from '../../../Assets/Images/Portfoli image.png';
import Social from './Social';

import Env from 'services/Env';
import { connect } from 'react-redux';

interface PortfoliosSocialProps {
  userAccessToken: string;
}

interface SocialMedialProps {
  key: string;
  label: string;
  logoPath: string;
}

const PersonalPortfolios: React.FC<PortfoliosSocialProps> = ({ userAccessToken }) => {
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
        }
      })
      .catch((error: any) => {
        console.log('RESPONSE', error);
      });
  };

  const handleLinkChange = (key: any, value: any) => {
    console.log(`Link for ${key}: ${value}`);
    // Additional logic can be added here if needed
  };

  return (
    <>
    <Box sx={{ p: '20px',backgroundColor:'#FFFFFF',borderRadius:'10px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box>
            <Social />
          </Box>
        </Grid>
        <Grid item xs={12}>
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
          <Grid container spacing={1} columns={16} sx={{ mt: '15px' }}>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <Grid item xs={2} key={index}>
                <img
                  src={Portfoliimage}
                  style={{ borderRadius: '15px', width: '100%' }}
                  alt={`Portfolio Image ${index}`}
                  className="img-fluid upload-button"
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ mt: '12px' }}>
            <Box
              className="p-image imageBox"
              sx={{
                height: '105px',
                textAlign: 'center',
                width: '100%',
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
                JPG, PNG Format (max. 500*500)
              </Typography>
            </Box>
          </Box>
          <Grid>
            <Grid item xs={12}>
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
                Portfolio Website
              </Typography>
              <TextField
                className="formFields"
                sx={{ mt: 0, width: '100%' }}
                type="email"
                name="email"
                placeholder="Portfolio URL..."
                required
              />
            </Grid>
          </Grid>
          <Grid>
            <Grid>
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
                Social Media
              </Typography>
              {socialLinks.map((socialMedia: SocialMedialProps) => (
                <TextField
                  key={socialMedia.key}
                  className="formFields"
                  sx={{ mt: 2, width: '100%' }}
                  type="text"
                  name={socialMedia.key}
                  placeholder={`Add ${socialMedia.label} link`}
                  onChange={(e) => handleLinkChange(socialMedia.key, e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img
                          src={socialMedia.logoPath}
                          alt={socialMedia.label}
                          style={{ width: '24px', height: '24px' }}
                        />
                      </InputAdornment>
                    ),
                  }}
                  required
                />
              ))}
            </Grid>
            {[facebook, linkedin, behance, instagram, tiktok, SocialMedia].map((socialIcon, index) => (
              <TextField
                key={index}
                className="formFields"
                sx={{ mt: 2, width: '100%' }}
                type="email"
                name="email"
                placeholder="Add link"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={socialIcon} alt={`Social Media ${index}`} style={{ width: '24px', height: '24px' }} />
                    </InputAdornment>
                  ),
                }}
                required
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
      </Box>
    </>
  );
};

function mapDispatchToProps(state: any) {
  return {
    userAccessToken: state.userAccessToken,
  };
}

export default connect(mapDispatchToProps)(PersonalPortfolios);
