import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import '../../../index.css';
import '../../../Assets/css/Common.css';
import '../../../Assets/css/ProfileSetup.css';
import Env from '../../../services/Env';
import CustomSnackbar from '../../../common/Snackbar';
import { validateEmail } from '../../../common/Validation';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

const PremiumUser = (props: any) => {
  const navigate = useNavigate();
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

  const handleEmailConfirmation = () => {
    const { email } = emailState;

    const emailError = validateEmail(email);

    if (emailError !== '') {
      setEmailError(emailError);
      return;
    }

    if (email !== '') {
      localStorage.setItem('userEmail', email);

      const postData = Env.post(`invite/sendVerificationCode`, emailState, props.userAccessToken);
      postData
        .then((response) => {
          console.log('RESPONSE', response);
          if (response.status === 200) {
            setToast({ message: response.data.message, type: 'success' });
            handleClick();
            setTimeout(() => {
              navigate('/login/email-verification');
            }, 2000);
          }
        })
        .catch((error) => {
          if (error.response.data.data != null) {
            setToast({ message: error.response.data.message.value, type: 'error' });
          } else {
            setToast({ message: error.response.data.message, type: 'error' });
          }
          handleClick();
        });
    }
  };

  const handleEmailField = ({ target: { name, value } }: { target: { name: any; value: any } }) => {
    setEmailState((prevData) => ({
      ...prevData,
      [name]: value
        .replace(/^\s+/, '')
        .replace(/\s+/g, ' ')
        .replace(/^[^a-zA-Z@.]+/, ''),
    }));

    setEmailError(value === '' ? 'Email is required' : '');
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
          What is your email?
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
          Please share your email.
        </Typography>
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleEmailConfirmation();
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
            Email*
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
              Next Step
            </Button>
          </Box>
          <Typography
            sx={{
              textAlign: 'left',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '24px',
              color: 'var(--gray-500, #667085)',
            }}>
            Already have an account?
            <a style={{ textDecoration: 'none' }} href="/user/login">
              <span
                style={{
                  color: '#000',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                }}>
                Sign In
              </span>
            </a>
          </Typography>
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

export default connect(mapDispatchToProps)(PremiumUser);
