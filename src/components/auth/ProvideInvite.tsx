import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import '../../index.css';
import '../../Assets/css/Common.css';

const ProvideInvite = () => {
  const [inviteCode, setInviteCode] = useState({ code: '' });

  const handleLogin = () => {
    return console.log('inviteCode', inviteCode);
  };

  const handleInviteField = (e: any) => {
    const { name, value } = e.target;

    setInviteCode((prevLogin) => ({
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
          Provide Invitation Code
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
          If you&apos;ve been invited by a premium member or by an Avalbl recruiter, <br /> please enter that code below.
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
            Invitation Code
          </Typography>
          <TextField
            className="formFields"
            sx={{ width: '500px !important' }}
            name="code"
            placeholder="Enter Invitation Code"
            value={inviteCode.code}
            onChange={(e) => handleInviteField(e)}
            required
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Button
              className="common-button-green"
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, textTransform: 'none' }}>
              Sign Up
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
        </Box>
      </Box>
    </Box>
  );
};

export default ProvideInvite;
