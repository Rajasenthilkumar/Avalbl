import React, { useState } from 'react';
import { TextField, Button, Typography, Box, InputAdornment, IconButton } from '@mui/material';
import '../../../Assets/css/Common.css';
import '../../../Assets/css/ProfileSetup.css';
import { useNavigate } from 'react-router-dom';
// import CustomSnackbar from '../../../common/Snackbar';
import { validatePassword, isPasswordValid } from '../../../common/Validation';
import Container from '@mui/material/Container';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import { useDispatch } from 'react-redux';
// import { AppDispatch } from '../../../reducer/store';

const ChangePasswordForm = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState({ oldPassword: '', newPassword: '', confirmPassword: '' });
  const [Errors, setErrors] = useState({ oldPassword: '', newPassword: '', confirmPassword: '', condition: '' });
  // const [open, setOpen] = React.useState(false);
  // const [toast, setToast] = React.useState({ message: '', type: 'success' });
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = () => {
    setShowPassword(!showPassword);
  };

  // const handleClick = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const handleChangePassword = () => {
    const { oldPassword, newPassword, confirmPassword } = formData;

    const newPasswordError = validatePassword(newPassword);
    const newPasswordIsValid = isPasswordValid(newPassword);
    const confirmPasswordError = newPassword !== confirmPassword ? 'Passwords do not match' : '';

    setErrors({
      oldPassword: oldPassword === '' ? 'Old Password is required' : '',
      newPassword: newPasswordError,
      confirmPassword: confirmPasswordError,
      condition: newPasswordIsValid,
    });

    if (oldPassword === '' || newPasswordError !== '' || confirmPasswordError !== '' || newPasswordIsValid !== '') {
      return;
    }

    // Your API call or other logic goes here
    // const postData = Env.post(`change-password`, formData, '');
    // postData
    //   .then((response) => {
    //     if (response.status === 200) {
    //       setToast({ message: response.data.message.value, type: 'success' });
    //       navigate('/change-password/success');
    //       handleClick();
    //     }
    //   })
    //   .catch((error) => {
    //     setToast({ message: error.response.data.message.value, type: 'error' });
    //     handleClick();
    //   });
  };

  const handleFieldChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
        .replace(/^\s+/, '')
        .replace(/\s+/g, ' ')
        .replace(/^[^a-zA-Z@.]+/, ''),
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === '' ? `${name.charAt(0).toUpperCase() + name.slice(1)} is required` : '',
    }));
  };

  return (
    <Container maxWidth="xl">
      <Box>
        <Box sx={{ marginTop: '5px', display: 'flex', flexDirection: 'column' }}>
          <Typography
            sx={{
              textAlign: 'left',
              fontFamily: "'Onest', sans-serif",
              fontWeight: '600',
              fontSize: '20px',
            }}>
            Change Password
          </Typography>
          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleChangePassword();
            }}
            sx={{ mt: 3 }}>
            <Typography className="lable-name" sx={{ textAlign: 'left', mt: '15px' }}>
              Old Password
            </Typography>
            <TextField
              className="formFields"
              sx={{ mt: 0, width: '500px' }}
              name="oldPassword"
              placeholder="Enter the Old Password"
              margin="normal"
              type={showPassword ? 'text' : 'password'}
              value={formData.oldPassword}
              onChange={handleFieldChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => handleClickShowPassword()} onMouseDown={() => handleMouseDownPassword()}>
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {Errors.oldPassword && <Typography sx={{ color: 'red', mt: 1 }}>{Errors.oldPassword}</Typography>}

            <Typography className="lable-name" sx={{ textAlign: 'left', mt: '15px' }}>
              New Password
            </Typography>
            <TextField
              className="formFields"
              sx={{ mt: 0, width: '500px' }}
              name="newPassword"
              placeholder="Enter the New Password"
              margin="normal"
              type={showPassword ? 'text' : 'password'}
              value={formData.newPassword}
              onChange={handleFieldChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => handleClickShowPassword()} onMouseDown={() => handleMouseDownPassword()}>
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {Errors.newPassword && <Typography sx={{ color: 'red', mt: 1 }}>{Errors.newPassword}</Typography>}
            {Errors.newPassword === '' && Errors.condition ? (
              <Typography sx={{ color: 'red', mt: 1 }}>{Errors.condition}</Typography>
            ) : (
              ''
            )}

            <Typography className="lable-name" sx={{ textAlign: 'left', mt: '15px' }}>
              Confirm Password
            </Typography>
            <TextField
              className="formFields"
              sx={{ mt: 0, width: '500px' }}
              name="confirmPassword"
              placeholder="Confirm the New Password"
              margin="normal"
              type={showPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={handleFieldChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => handleClickShowPassword()} onMouseDown={() => handleMouseDownPassword()}>
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {Errors.confirmPassword && <Typography sx={{ color: 'red', mt: 1 }}>{Errors.confirmPassword}</Typography>}

          
            <Typography
              sx={{
                textAlign: 'left',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '20px',
                marginTop: '10px', 
                marginLeft:'350px',

              }}>
              <a href="/login/forget-password" style={{ textDecoration: 'none', color: '#2CB512' }}>
                Forgot Password?
              </a>
            </Typography>

            <Box sx={{ display: 'flex', mt: 3 }}>
              <Button
                className="common-button-gray"
                variant="contained"
                onClick={() => navigate('/login')}
                sx={{
                  width: '180px !important',
                  height: '40px !important',
                  backgroundColor: 'white',
                  color: 'lightgreen',
                  border: '1px solid lightgreen',
                  fontSize: '12px',
                  borderRadius: '8px',
                  marginRight: '8rem',
                }}>
                Cancel
              </Button>

              <Button
                className="common-button-green"
                type="submit"
                variant="contained"
                sx={{ width: '180px !important', height: '40px !important', backgroundColor: '#2CB512', borderRadius: '8px', color: '#FFFFFF' }}>
                Submit
              </Button>
            </Box>
{/* 
            <CustomSnackbar open={open} autoHideDuration={3000} onClose={handleClose} toast={toast} /> */}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ChangePasswordForm;