import React from 'react';
import logo from '../../Assets/Images/logo.png';
import { Typography, Box, Button } from '@mui/material';

interface WelcomeProps {
  handleNext: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ handleNext }) => {
  const handleSubmit = () => {
    handleNext();
  };
  return (
    <Box
      sx={{
        display: 'flex',
        padding: '200px 0px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '540px',
        flex: '1 0 0',
        alignSelf: 'stretch',
        backgroundColor: '#f7f8f8',
      }}>
      <Box
        sx={{
          borderRadius: '24px',
          background: 'var(--White, #FFF)',
          padding: '50px',
        }}>
        <img src={logo} alt="logo" />
        <Typography
          sx={{
            // fontFamily:"'Onest', sans-serif",
            fontSize: '30px',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '38px',
          }}>
          Welcome
        </Typography>
        <Typography
          sx={{
            color: 'var(--gray-400, #98A2B3)',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '24px',
          }}>
          Yeah! Your account is created successfully. Now start using avalble by completing <br /> your profile.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          {/* <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              textTransform: "none",
              borderRadius: "12px",
              background: "var(--Primary, #2CB512)",
              "&:hover": {
                background: "var(--Primary, #2CB512)",
              },
            }}
          >
            Setup your profile
          </Button> */}
          <Typography
            sx={{
              // color: 'var(--gray-400, #98A2B3)',
              fontSize: '30px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '38px',
              alignItems: 'center',
            }}>
            DashBoard - Coming Soon!!!
          </Typography>
        </Box>
      </Box>
      <Button
        className="common-button-green"
        type="submit"
        variant="contained"
        onClick={handleSubmit}
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
  );
};

export default Welcome;
