/* eslint-disable no-debugger */
import React, { useState } from 'react';
import { TextField, Button, Typography, Box, InputAdornment, IconButton } from '@mui/material';
import Env from '../../services/Env';
import '../../Assets/css/Common.css';
import '../../Assets/css/ProfileSetup.css';
import { useNavigate } from 'react-router-dom';
import CustomSnackbar from '../../common/Snackbar';
import { validateEmail, validatePassword, isPasswordValid } from '../../common/Validation';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useDispatch } from 'react-redux';
// import { connect } from 'react-redux';
import { isLoggedIn, userAccessToken, userRefreshToken } from '../../reducer/action';
import { refreshTokenGenrate } from '../../reducer/action';
import { AppDispatch } from '../../reducer/store';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [Errors, setErrors] = useState({ email: '', password: '', condition: '' });
  const [open, setOpen] = React.useState(false);
  const [toast, setToast] = React.useState({ message: '', type: 'success' });
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    const { email, password } = formData;

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const passwordIsValid = isPasswordValid(password);

    setErrors({
      email: emailError,
      password: passwordError,
      condition: passwordIsValid,
    });

    if (emailError !== '' || passwordError !== '' || passwordIsValid !== '') {
      return;
    }

    const postData = Env.post(`login`, formData, '');
    postData
      .then((response) => {
        if (response.status === 200) {
          const { accessToken, refreshToken } = response.data.data;
          dispatch(isLoggedIn(true));
          dispatch(userAccessToken({ accessToken: accessToken }));
          dispatch(userRefreshToken({ refreshToken: refreshToken }));
          setTimeout(() => {
            dispatch(refreshTokenGenrate(accessToken, refreshToken));
          }, 3540000);
          setToast({ message: response.data.message.value, type: 'success' });
          navigate('/login/welcome');
          handleClick();
        }
      })
      .catch((error) => {
        setToast({ message: error.response.data.message.value, type: 'error' });
        handleClick();
      });
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

    if (name === 'email') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: value.trim() === '' ? 'Email is required' : '',
      }));
    }

    if (name === 'password') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: value === '' ? 'Password required' : '',
        condition: value < 8 ? 'Password must be at least 8 characters long' : '',
      }));
    }
  };

  return (
    <Box>
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column' }}>
        <Typography
          sx={{
            textAlign: 'left',
            fontFamily: "'Onest', sans-serif",
            fontWeight: '900',
            fontSize: '32px',
          }}>
          Sign In
        </Typography>
        <Typography
          sx={{
            textAlign: 'left',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '24px',
            color: 'var(--gray-500, #667085)',
          }}>
          Sign In your account with a seamless process
        </Typography>
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          sx={{ mt: 3 }}>
          <Typography
            className="lable-name"
            sx={{
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '6px',
              alignSelf: 'stretch',
            }}>
            Email
          </Typography>
          <TextField
            className="formFields"
            sx={{ mt: 0, borderRadius: '8px', width: '500px !important' }}
            name="email"
            placeholder="Enter the Email ID"
            value={formData.email}
            onChange={handleFieldChange}
          />
          {Errors.email && <Typography sx={{ color: 'red', mt: 1 }}>{Errors.email}</Typography>}
          <Typography className="lable-name" sx={{ textAlign: 'left', mt: '15px' }}>
            Password
          </Typography>
          <TextField
            className="formFields"
            sx={{ mt: 0, width: '500px' }}
            name="password"
            placeholder="Enter the password"
            margin="normal"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
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
          {Errors.password && <Typography sx={{ color: 'red', mt: 1 }}>{Errors.password}</Typography>}
          {Errors.password === '' && Errors.condition ? (
            <Typography sx={{ color: 'red', mt: 1 }}>{Errors.condition}</Typography>
          ) : (
            ''
          )}

          <Typography
            sx={{
              textAlign: 'left',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '20px',
            }}>
            <a href="/login/forget-password" style={{ textDecoration: 'none', color: '#2CB512' }}>
              Forgot Password?
            </a>
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Button
              className="common-button-green"
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                textTransform: 'none',
                width: '120px !important',
                height: '50px !important',
              }}>
              Sign In
            </Button>
          </Box>
          <Typography
            sx={{
              textAlign: 'left',
              color: 'var(--_Gray-500, #667085)',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '24px',
            }}
            component="h6"
            variant="h6">
            Not yet a member?
            <a
              href="/login/registration"
              style={{
                textDecoration: 'none',
                color: 'var(--_Gray-800, #1D2939)',
                fontWeight: 600,
              }}>
              Sign up here.
            </a>
          </Typography>
          <CustomSnackbar open={open} autoHideDuration={3000} onClose={handleClose} toast={toast} />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
