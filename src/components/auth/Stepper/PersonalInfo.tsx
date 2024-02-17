/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Box, Typography, Grid, TextField, Button, InputAdornment, IconButton } from '@mui/material';
import CustomSnackbar from '../../../common/Snackbar';
import { validateEmail, validatePassword, validateConfirmPassword, isPasswordValid } from '../../../common/Validation';
import Env from '../../../services/Env';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { connect } from 'react-redux';

interface PersonalInfoProps {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
  userAccessToken: string;
}

type ShowPasswordState = {
  password: boolean;
  confirmPassword: boolean;
};

const PersonalInfo: React.FC<PersonalInfoProps> = ({ activeStep, handleNext, handleBack, userAccessToken }) => {
  const [registrationData, setRegistrationData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [toast, setToast] = useState({ message: '', type: 'success' });
  const [emailError, setEmailError] = useState('');
  const [passwordErrors, setPasswordErrors] = useState({ newPassword: '', confirmPassword: '' });
  const [open, setOpen] = useState(false);
  // const [includeConfirmPassword, setIncludeConfirmPassword] = useState(true);
  const [Error, setError] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState<ShowPasswordState>({ password: false, confirmPassword: false });
  const [passwordIsValid, setPasswordIsValid] = useState('');

  const handleClickShowPassword = (type: keyof ShowPasswordState) => {
    setShowPassword((prevShowPassword) => ({
      ...prevShowPassword,
      [type]: !prevShowPassword[type],
    }));
  };
  const handleMouseDownPassword = (type: keyof ShowPasswordState) => {
    setShowPassword((prevShowPassword) => ({
      ...prevShowPassword,
      [type]: !prevShowPassword[type],
    }));
  };

  const handlePersonalData = async () => {
    let passwordValid: any;
    const { firstName, lastName, jobTitle, email, password, confirmPassword } = registrationData;

    const Error = validateEmail(email);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(password, confirmPassword);

    if (password) {
      passwordValid = isPasswordValid(password);
    }

    const errors = {
      firstName: '',
      lastName: '',
      jobTitle: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    if (!firstName) {
      errors.firstName = 'First Name is required';
    }

    if (!lastName) {
      errors.lastName = 'Last Name is required';
    }

    if (!jobTitle) {
      errors.jobTitle = 'Job Title is required';
    }

    if (!email) {
      errors.email = 'Email is required';
    }

    if (!password) {
      errors.password = 'Password is required';
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    }

    if (Error !== '') {
      errors.email = Error;
    }

    if (passwordError !== '') {
      errors.password = passwordError;
    }

    if (confirmPassword && confirmPasswordError !== '') {
      errors.confirmPassword = confirmPasswordError;
    }

    if (password && passwordValid !== '') {
      errors.password = passwordValid;
    }

    if (Object.values(errors).some((field) => field !== '')) {
      setError(errors);
      return;
    }

    // if (passwordError !== '' || confirmPasswordError !== '') {
    //   return;
    // }

    // if (!includeConfirmPassword) {
    //   const { confirmPassword, ...dataWithoutConfirmPassword } = registrationData;

    //   setRegistrationData(
    //     dataWithoutConfirmPassword as {
    //       firstName: string;
    //       lastName: string;
    //       jobTitle: string;
    //       email: string;
    //       password: string;
    //       confirmPassword: string;
    //     }
    //   );
    // }

    const PersonalInfo1Data = Env.post(`user/register`, registrationData, userAccessToken);
    PersonalInfo1Data.then((response: any) => {
      if (response.status === 200) {
        setToast({ message: response.data.message.value, type: 'success' });
        handleNext();
      }
    }).catch((error: any) => {
      setToast({ message: error.response.data.message.value, type: 'error' });
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setRegistrationData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));

    setError((prevErrors: any) => ({
      ...prevErrors,
      [name]: '',
    }));

    if (name === 'email') {
      setEmailError(value.trim() === '' ? 'Email is required' : '');
      setError((prevErrors: any) => ({
        ...prevErrors,
        [name]: '',
      }));
    }

    if (name === 'newPassword' || name === 'confirmPassword') {
      setPasswordErrors((prevErrors: any) => ({
        ...prevErrors,
        [name]: '',
      }));
      setPasswordIsValid(value < 8 ? 'Password must be at least 8 characters long' : '');
    }
  };

  console.log('PROPS.useToken', userAccessToken);

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
      <Box>
        <Grid container>
          <Grid item sm={6}>
            <Typography
              className="lable-name"
              sx={{
                textAlign: 'left',
                mt: '15px',
              }}>
              First Name
            </Typography>
            <TextField
              className="formFields"
              sx={{
                width: '400px',
                '&:hover': {
                  borderColor: 'red',
                },
              }}
              name="firstName"
              placeholder="Enter the First Name"
              value={registrationData.firstName || ''}
              onChange={handleInputChange}
              required
            />
            {Error.firstName && <Typography sx={{ color: 'red', mt: 1 }}>{Error.firstName}</Typography>}
          </Grid>
          <Grid item sm={6}>
            <Typography
              className="lable-name"
              sx={{
                textAlign: 'left',
                mt: '15px',
                paddingLeft: '44px',
              }}>
              Last Name
            </Typography>
            <TextField
              className="formFields"
              type="text"
              sx={{ mt: 0, width: '400px', ml: '25px' }}
              name="lastName"
              placeholder="Enter the Last Name"
              value={registrationData.lastName || ''}
              onChange={handleInputChange}
              required
            />
            {Error.lastName && <Typography sx={{ color: 'red', mt: 1, ml: '25px' }}>{Error.lastName}</Typography>}
          </Grid>
          <Grid item sm={12}>
            <Typography
              className="lable-name"
              sx={{
                textAlign: 'left',
                mt: '15px',
              }}>
              Job
            </Typography>
            <TextField
              className="formFields"
              sx={{ mt: 0 }}
              type="text"
              name="jobTitle"
              placeholder="Enter the Job"
              fullWidth
              value={registrationData.jobTitle || ''}
              onChange={handleInputChange}
              required
            />
            {Error.jobTitle && <Typography sx={{ color: 'red', mt: 1 }}>{Error.jobTitle}</Typography>}
          </Grid>
          <Grid item sm={12}>
            <Typography
              className="lable-name"
              sx={{
                textAlign: 'left',
                mt: '15px',
              }}>
              Email
            </Typography>
            <TextField
              className="formFields"
              sx={{ mt: 0 }}
              type="email"
              name="email"
              placeholder="Enter the Email"
              fullWidth
              value={registrationData.email || ''}
              onChange={handleInputChange}
              required
            />
            {emailError && <Typography sx={{ color: 'red', mt: 1 }}>{emailError}</Typography>}
            {Error.email && <Typography sx={{ color: 'red', mt: 1 }}>{Error.email}</Typography>}
          </Grid>
          <Grid item sm={12}>
            <Typography
              className="lable-name"
              sx={{
                textAlign: 'left',
                mt: '15px',
              }}>
              Password
            </Typography>
            <TextField
              className="formFields"
              sx={{ mt: 0 }}
              type={showPassword.password ? 'text' : 'password'}
              name="password"
              value={registrationData.password || ''}
              onChange={handleInputChange}
              placeholder="Enter the Password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => handleClickShowPassword('password')}
                      onMouseDown={() => handleMouseDownPassword('password')}>
                      {showPassword.password ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              fullWidth
              required
            />
            {passwordErrors.newPassword && (
              <Typography sx={{ color: 'red', mt: 1 }}>{passwordErrors.newPassword}</Typography>
            )}
            {Error.password && <Typography sx={{ color: 'red', mt: 1 }}>{Error.password}</Typography>}
            {passwordErrors.newPassword === '' && passwordIsValid ? (
              <Typography sx={{ color: 'red', mt: 1 }}>{passwordIsValid}</Typography>
            ) : (
              ''
            )}
          </Grid>
          <Grid item sm={12}>
            <Typography
              className="lable-name "
              sx={{
                textAlign: 'left',
                mt: '15px',
              }}>
              Confirm Password
            </Typography>
            <TextField
              className="formFields"
              sx={{ mt: 0 }}
              type={showPassword.confirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Enter the Confirm Password"
              fullWidth
              value={registrationData.confirmPassword || ''}
              onChange={handleInputChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => handleClickShowPassword('confirmPassword')}
                      onMouseDown={() => handleMouseDownPassword('confirmPassword')}>
                      {showPassword.confirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              required
            />
            {passwordErrors.confirmPassword && (
              <Typography sx={{ color: 'red', mt: 1 }}>{passwordErrors.confirmPassword}</Typography>
            )}
            {Error.confirmPassword && <Typography sx={{ color: 'red', mt: 1 }}>{Error.confirmPassword}</Typography>}
          </Grid>
        </Grid>
        {toast && toast.message && (
          <CustomSnackbar open={open} autoHideDuration={3000} onClose={handleClose} toast={toast} />
        )}
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
            onClick={handlePersonalData}
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

export default connect(mapDispatchToProps)(PersonalInfo);
