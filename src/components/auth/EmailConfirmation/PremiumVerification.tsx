import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import '../../../index.css';
import '../../../Assets/css/Common.css';
import Env from '../../../services/Env';
import CustomSnackbar from '../../../common/Snackbar';
import { connect } from 'react-redux';

const PremiumVerification = (props: any) => {
  const [verificationCode, setVerificationCode] = useState({ email: '', verificationCode: '' });
  const [open, setOpen] = React.useState(false);
  const [toast, setToast] = React.useState({ message: '', type: 'success' });

  const handleClick = () => {
    setOpen(true);
    setVerificationCode({ email: '', verificationCode: '' });
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleVerificationCode = () => {
    const userEmail = localStorage.getItem('userEmail');

    const dataToSend = {
      email: userEmail || '',
      verificationCode: verificationCode.verificationCode,
    };

    const verificationCodeData = Env.post(`invite/verifyCode`, dataToSend, props.userAccessToken);
    verificationCodeData
      .then((response) => {
        if (response.status === 200) {
          setToast({ message: response.data.message.value, type: 'success' });
          handleClick();
          //   setTimeout(() => {
          //     navigate('/');  //Navigate to next page here....
          //   }, 2000);
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
  };

  const handleVerificationField = (e: any) => {
    const { name, value } = e.target;

    setVerificationCode((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
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
          Check Your Email
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
          We have just sent you a verification code to your email. Enter that <br /> code below to verify your email.
        </Typography>
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleVerificationCode();
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
            verification code*
          </Typography>
          <TextField
            className="formFields"
            sx={{ width: '500px !important' }}
            name="verificationCode"
            placeholder="Enter code here."
            value={verificationCode.verificationCode}
            onChange={(e) => handleVerificationField(e)}
            required
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Button
              className="common-button-green"
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, textTransform: 'none' }}>
              Verify Code
            </Button>
          </Box>
        </Box>
        <CustomSnackbar open={open} autoHideDuration={3000} onClose={handleClose} toast={toast} />
      </Box>
    </Box>
  );
};

function mapDispatchToProps(state: any) {
  return {
    userAccessToken: state.userAccessToken,
  };
}

export default connect(mapDispatchToProps)(PremiumVerification);
