import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
} from '@mui/material';
import uploadCloud from '../../../Assets/Images/uploadCloud.png';
import headerimage from '../../../Assets/Images/header image.png';
import Profile01 from '../../../Assets/Images/Profile 01.png';
import '../../../Assets/css/ProfileSetup.css';

const details = {
  "data": {
    "firstName": "Yuvaraj",
    "lastName": "yuvTest",
    "jobTitle": "Test Title",
    "email": "yuvaraj.sinontechs@gmail.com",
    "userName": "yuva789",
    "profilePath": "profilePath",
    "headerPath": "headerPath"
  }
};

const Personaldetails: React.FC = () => {
  const [registrationData, setRegistrationData] = useState({
    firstName: details.data.firstName || '',
    lastName: details.data.lastName || '',
    jobTitle: details.data.jobTitle || '',
    email: details.data.email || '',
    userName: details.data.userName || '',
    profilePath: details.data.profilePath || '',
    headerPath: details.data.headerPath || '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(registrationData);
  };

  return (
    <Box sx={{ p: '20px', backgroundColor: '#FFFFFF', borderRadius: '10px', position: 'relative' }}>
      <Button
        className="common-button-green"
        type="submit"
        variant="contained"
        onClick={handleSubmit}
        sx={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          zIndex: 999,
          '&:hover': {
            background: 'var(--Primary, #2CB512)',
          },
        }}>
        Submit
      </Button>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography className="lable-name" sx={{ color: '#344054', fontWeight: '500', mb: 0.5 }}>First Name</Typography>
          <TextField
            className="formFields"
            name="firstName"
            placeholder="Enter the First Name"
            value={registrationData.firstName}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography className="lable-name" sx={{ color: '#344054', fontWeight: '500', mb: 0.5 }}>Last Name</Typography>
          <TextField
            className="formFields"
            name="lastName"
            placeholder="Enter the Last Name"
            value={registrationData.lastName}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography className="lable-name" sx={{ mb: 1 }}>Job Title</Typography>
          <TextField
            className="formFields"
            name="jobTitle"
            placeholder="Enter the Job Title"
            value={registrationData.jobTitle}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={10}>
          <Typography className="lable-name" sx={{ mb: 1 }}> User Email
            <span style={{ color: 'var(--gray-400, #98A2B3)', fontSize: '14px', fontWeight: 500, lineHeight: '20px' }}>
                {' '}
              Also used as your login
            </span>
          </Typography>
          <TextField
            className="formFields"
            name="email"
            type="email"
            placeholder="Enter the Email"
            value={registrationData.email}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              className="common-button-green"
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                '&:hover': {
                  background: 'var(--Primary, #2CB512)',
                },
              }}>
              Change Email
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={12}>
          <Box >
            <Typography className="lable-name" sx={{ textAlign: 'left', mb: 1 }}>
              User Name
              <span style={{ color: 'var(--gray-400, #98A2B3)', fontSize: '14px', fontWeight: 500, lineHeight: '20px' }}>
                  {' '}
                You can change this later after your account is created.
              </span>
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12} md={8}>
                <TextField
                  className="formFields"
                  sx={{ width: '100%' }}
                  name="userName"
                  placeholder="Enter the User Name"
                  value={registrationData.userName}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={6} md={2}>
                <Button className="common-button-white" sx={{ height: '50px !important', width: '100%' }}>
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={6} md={2}>
                <Button className="common-button-white" sx={{ height: '50px !important', width: '100%' }}>
                  Confirm
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Profile Image Section */}
        <Grid item xs={12} md={1.5}>
          <Typography className="lable-name" sx={{ textAlign: 'left' }}>
              Profile Image
          </Typography>
          <Box className="pro-image" sx={{ width: '180px', mt: '15px' }}>
            <img src={Profile01} alt="profileimg" className="img-fluid profile-pic" />
          </Box>
        </Grid>
        <Grid item xs={12} md={10.5}>
          <Box sx={{ mt: '15px' }}>
            <Box
              className="p-image imageBox"
              sx={{ height: '128px', textAlign: 'center', pt: '15px' }}>
              <img src={uploadCloud} alt="img" className="img-fluid upload-button" />
              <Typography className="note" sx={{ color: 'var(--Primary, #2CB512)', textAlign: 'center', fontSize: '12px', fontWeight: 600, lineHeight: '18px' }}>
                  Drop & Drag, or Click to upload
              </Typography>
              <Typography sx={{ color: 'var(--gray-400, #98A2B3)', textAlign: 'center', fontSize: '12px', fontWeight: 400, lineHeight: '18px' }}>
                  JPG, PNG Format (max. 500*500)
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Header Image Section */}
        <Grid item xs={12}>
          <Box>
            <Typography className="lable-name" sx={{ textAlign: 'left', }}>
                Header Image
            </Typography>
            <img src={headerimage} width='100%' height='150px' style={{ padding: '5px' }} alt="headerimg" />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ padding: '5px' }}>
            <Box
              className="p-image imageBox"
              sx={{ height: '128px', textAlign: 'center', pt: '15px' }}>
              <img src={uploadCloud} alt="img" className="img-fluid upload-button" />
              <Typography className="note" sx={{ color: 'var(--Primary, #2CB512)', textAlign: 'center', fontSize: '12px', fontWeight: 600, lineHeight: '18px' }}>
                  Drop & Drag, or Click to upload
              </Typography>
              <Typography sx={{ color: 'var(--gray-400, #98A2B3)', textAlign: 'center', fontSize: '12px', fontWeight: 400, lineHeight: '18px' }}>
                  JPG, PNG Format (max. 500*500)
              </Typography>
            </Box>
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Personaldetails;
