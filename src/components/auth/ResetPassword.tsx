import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Box, Grid, IconButton, InputAdornment } from '@mui/material';
import '../../index.css';
import '../../Assets/css/Common.css';
import '../../Assets/css/ProfileSetup.css';
import Env from '../../services/Env';
import CustomSnackbar from '../../common/Snackbar';
import { validatePassword, validateConfirmPassword, isPasswordValid } from '../../common/Validation';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { connect } from 'react-redux';

type ShowPasswordState = {
  newPassword: boolean;
  confirmPassword: boolean;
};

const ResetPassword: React.FC = (props: any) => {
  const navigate = useNavigate();

  const [resetPassword, setResetPassword] = useState({ newPassword: '', confirmPassword: '' });
  const [passwordErrors, setPasswordErrors] = useState({ newPassword: '', confirmPassword: '' });
  const [passwordIsValid, setPasswordIsValid] = useState('');
  const [open, setOpen] = React.useState(false);
  const [toast, setToast] = React.useState({ message: '', type: 'success' });
  const [id, setId] = useState<string | undefined>();
  const [showPassword, setShowPassword] = useState<ShowPasswordState>({ newPassword: false, confirmPassword: false });

  useEffect(() => {
    const resetId: any = window.location.href.split('=')[1];
    setId(resetId);
  }, []);

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

  const handleClick = () => {
    setOpen(true);
    setTimeout(() => {
      handleClose();
      navigate('/login/sign-in');
    }, 2000);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleResetPassword = () => {
    const { newPassword, confirmPassword } = resetPassword;

    const passwordError = validatePassword(newPassword);
    const confirmPasswordError = validateConfirmPassword(newPassword, confirmPassword);
    const passwordValid = isPasswordValid(newPassword);

    setPasswordErrors({
      newPassword: passwordError,
      confirmPassword: confirmPasswordError,
    });
    setPasswordIsValid(passwordValid);

    if (passwordError !== '' || confirmPasswordError !== '') {
      return;
    }

    if (id === undefined) {
      setResetPassword({ newPassword: '', confirmPassword: '' });
      return;
    } else {
      const resetData = Env.post(`login/resetpassword?resetCode=${id}`, { newPassword }, props.userAccessToken);
      resetData
        .then((response) => {
          if (response.status === 200) {
            setToast({ message: response.data.message.value, type: 'success' });
            handleClick();
          }
        })
        .catch((error) => {
          setToast({ message: error.response.data.message.value, type: 'error' });
          handleClick();
        });

      setResetPassword({ newPassword: '', confirmPassword: '' });
      setPasswordErrors({ newPassword: '', confirmPassword: '' });
    }
  };

  const handleResetFields = (e: any) => {
    const { name, value } = e.target;

    setResetPassword((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));

    if (name === 'newPassword' || name === 'confirmPassword') {
      setPasswordErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
      setPasswordIsValid(value < 8 ? 'Password must be at least 8 characters long' : '');
    }
  };

  return (
    <Box>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
        }}>
        <Typography
          sx={{
            textAlign: 'left',
            fontFamily: "'Onest', sans-serif",
            fontWeight: '900',
            fontSize: '32px',
          }}>
          Reset Password
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
          Provide your new password here
        </Typography>
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleResetPassword();
          }}
          sx={{ mt: 3 }}>
          <Grid>
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
              New Password
            </Typography>
            <TextField
              className="formFields"
              sx={{ mt: 0, borderRadius: '8px', width: '500px' }}
              // type="password"
              type={showPassword.newPassword ? 'text' : 'password'}
              name="newPassword"
              placeholder="Enter password"
              value={resetPassword.newPassword}
              onChange={(e) => handleResetFields(e)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => handleClickShowPassword('newPassword')}
                      onMouseDown={() => handleMouseDownPassword('newPassword')}>
                      {showPassword.newPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {passwordErrors.newPassword && (
              <Typography sx={{ color: 'red', mt: 1 }}>{passwordErrors.newPassword}</Typography>
            )}
            {passwordErrors.newPassword === '' && passwordIsValid ? (
              <Typography sx={{ color: 'red', mt: 1 }}>{passwordIsValid}</Typography>
            ) : (
              ''
            )}
          </Grid>
          <Grid sx={{ mt: 3 }}>
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
              Confirm Password
            </Typography>
            <TextField
              className="formFields"
              sx={{ mt: 0, borderRadius: '8px', width: '500px' }}
              name="confirmPassword"
              type={showPassword.confirmPassword ? 'text' : 'password'}
              placeholder="Enter password"
              value={resetPassword.confirmPassword}
              onChange={(e) => handleResetFields(e)}
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
            />
            {passwordErrors.confirmPassword && (
              <Typography sx={{ color: 'red', mt: 1 }}>{passwordErrors.confirmPassword}</Typography>
            )}
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Button
              className="common-button-green"
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, textTransform: 'none' }}>
              Submit
            </Button>
          </Box>
          <CustomSnackbar open={open} autoHideDuration={3000} onClose={handleClose} toast={toast} />
        </Box>
      </Box>
    </Box>
  );
};

function mapDispatchToProps(state: any) {
  return {
    userAccessToken: state.userAccessToken,
  };
}

export default connect(mapDispatchToProps)(ResetPassword);
