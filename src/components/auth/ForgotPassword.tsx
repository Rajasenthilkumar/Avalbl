/* eslint-disable no-debugger */
import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import '../../index.css';
// import validator from 'validator';
import '../../Assets/css/Common.css';
import '../../Assets/css/ProfileSetup.css';
import Env from '../../services/Env';
import CustomSnackbar from '../../common/Snackbar';
import { validateEmail } from '../../common/Validation';
import { connect } from 'react-redux';

const ForgotPassword = (props: any) => {
  const [emailState, setEmailState] = useState({ email: '' });
  const [emailError, setEmailError] = useState('');
  const [open, setOpen] = React.useState(false);
  const [toast, setToast] = React.useState({ message: '', type: 'success' });

  const handleClick = () => {
    setOpen(true);
    setEmailState({ email: '' });
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleForgetPassword = () => {
    const { email } = emailState;

    const emailError = validateEmail(email);

    if (email === '') {
      setEmailError(emailError);
      return;
    }

    if (email !== '') {
      const postData = Env.post(`login/forgotpassword`, emailState, props.userAccessToken);
      postData
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
    }
  };

  const handleEmailField = ({ target: { name, value } }: { target: { name: string; value: string } }) => {
    setEmailState((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setEmailError(value === '' ? 'Email is required' : validateEmail(value));
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
          Forgot Password ?
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
          Enter your registered email to verify Account
        </Typography>
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleForgetPassword();
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
            Enter Email
          </Typography>
          <TextField
            className="formFields"
            sx={{ width: '500px' }}
            name="email"
            placeholder="Enter Email Here"
            value={emailState.email}
            onChange={(e) => handleEmailField(e)}
          />
          {emailError && <Typography sx={{ color: 'red', mt: 1 }}>{emailError}</Typography>}
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

export default connect(mapDispatchToProps)(ForgotPassword);
