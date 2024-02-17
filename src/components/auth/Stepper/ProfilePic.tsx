import React, { useEffect, useState } from 'react';
import { Button, Box, Typography, Grid, TextField } from '@mui/material';
import uploadCloud from '../../../Assets/Images/uploadCloud.png';
import banner01 from '../../../Assets/Images/banner01.png';
import '../../../Assets/css/ProfileSetup.css';

interface ProfilePicProps {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
}

const ProfilePic: React.FC<ProfilePicProps> = ({ activeStep, handleNext, handleBack }) => {
  const [profilePic, setProfilePic] = useState({ userName: '' });
  const [profileImage, setProfileImage] = useState(null);
  const [headerImage, setHeaderImage] = useState(null);

  useEffect(() => {
    console.log('profileImage', profileImage);
    console.log('headerImage', headerImage);
  }, [headerImage, profileImage]);

  const handleProfilePicData = () => {
    console.log('ProfilePic');
    handleNext();
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setProfilePic((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const uploadAllImage = (e: any, type: any) => {
    if (type == 'Profile_image') {
      document.getElementById(`icon_profile_icon`)?.click();
    }
    if (type == 'Header_image') {
      document.getElementById(`icon_header_icon`)?.click();
    }
  };

  const handleFileUpload = (e: any, type: any) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        if (type === 'profileImage') {
          setProfileImage(event.target.result);
        } else if (type === 'headerImage') {
          setHeaderImage(event.target.result);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: any, type: any) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        if (type === 'profileImage') {
          setProfileImage(event.target.result);
        } else if (type === 'headerImage') {
          setHeaderImage(event.target.result);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handle = () => {
    console.log('profilePic', profilePic);
  };

  return (
    <>
      <Typography
        sx={{
          fontFamily: "'Onest', sans-serif",
          fontSize: '30px',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: '38px',
          paddingTop: '30px',
        }}>
        Personal details
      </Typography>
      <Box style={{ width: '900px' }}>
        <Grid container>
          <Typography
            className="lable-name"
            sx={{
              textAlign: 'left',
              mt: '15px',
            }}>
            User Name
            <span
              style={{
                color: 'var(--gray-400, #98A2B3)',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '20px',
              }}>
              {' '}
              You can change this later after your account is created.
            </span>
          </Typography>
          <Grid item sm={10}>
            <TextField
              className="formFields"
              sx={{
                width: '700px',
                '&:hover': {
                  borderColor: 'red',
                },
              }}
              name="userName"
              placeholder="Enter the First Name"
              value={profilePic.userName || ''}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item sm={2}>
            <Button className="common-button-white" sx={{ height: '50px !important', width: '135px' }} onClick={handle}>
              Confirm
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={3}>
            <Typography
              className="lable-name"
              sx={{
                textAlign: 'left',
                mt: '15px',
              }}>
              Profile Image
            </Typography>
            <Box
              className="pro-image"
              sx={{
                width: '170px',
                height: '150px',
              }}>
              <img
                src={profileImage === null ? banner01 : profileImage}
                alt="profileimg"
                className="img-fluid profile-pic"
              />
            </Box>
          </Grid>
          <Grid item sm={9}>
            <Box sx={{ mt: '32px', ml: '12px' }}>
              <Box
                className="p-image imageBox"
                sx={{
                  height: '128px',
                  textAlign: 'center',
                  pt: '25px',
                }}
                onClick={(e) => uploadAllImage(e, 'Profile_image')}
                onDrop={(e) => handleDrop(e, 'profileImage')}
                onDragOver={handleDragOver}>
                {profileImage ? (
                  <>
                    <img
                      style={{ width: '50px', height: '50px' }}
                      src={profileImage}
                      alt="img"
                      className="img-fluid upload-button"
                      onChange={(e) => handleFileUpload(e, 'profileImage')}
                    />
                    <input
                      className="file-upload"
                      id="icon_profile_icon"
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, 'profileImage')}
                    />
                  </>
                ) : (
                  <>
                    <img src={uploadCloud} alt="img" className="img-fluid upload-button" />
                    <input
                      className="file-upload"
                      id="icon_profile_icon"
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, 'profileImage')}
                    />
                  </>
                )}

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
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={3}>
            <Typography
              className="lable-name"
              sx={{
                textAlign: 'left',
                mt: '15px',
              }}>
              Header Image
            </Typography>
            <Box
              className="pro-image"
              sx={{
                width: '170px',
                height: '150px',
              }}>
              <img src={headerImage === null ? banner01 : headerImage} alt="headerimg" className="img-fluid header-pic" />
            </Box>
          </Grid>
          <Grid item sm={9}>
            <Box sx={{ mt: '32px', ml: '12px' }}>
              <Box
                className="p-image imageBox"
                sx={{
                  height: '128px',
                  textAlign: 'center',
                  pt: '25px',
                }}
                onClick={(e) => uploadAllImage(e, 'Header_image')}
                onDrop={(e) => handleDrop(e, 'headerImage')}
                onDragOver={handleDragOver}>
                {/* <img src={uploadCloud} alt="img" className="img-fluid upload-button" />
                <input className="file-upload" type="file" accept="image/*" onChange={handleFileUpload} /> */}
                {headerImage ? (
                  <>
                    <img
                      style={{ width: '50px', height: '50px' }}
                      src={headerImage}
                      alt="img"
                      className="img-fluid upload-button"
                      onChange={(e) => handleFileUpload(e, 'headerImage')}
                    />
                    <input
                      className="file-upload"
                      id="icon_header_icon"
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, 'headerImage')}
                    />
                  </>
                ) : (
                  <>
                    <img src={uploadCloud} alt="img" className="img-fluid upload-button" />
                    <input
                      className="file-upload"
                      id="icon_header_icon"
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, 'headerImage')}
                    />
                  </>
                )}

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
          </Grid>
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
            onClick={handleProfilePicData}
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

export default ProfilePic;
