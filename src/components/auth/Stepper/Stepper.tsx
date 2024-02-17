/* eslint-disable no-undef */
import React, { useState } from 'react';
import { MobileStepper, Box } from '@mui/material';
import logo from '../../../Assets/Images/logo.png';
import PersonalInfo from './PersonalInfo';
import ProfilePic from './ProfilePic';
import Location from './Location';
import PortfoliosSocial from './PortfoliosSocial';
import WorkDetails from './WorkDetails';
import AvailabilityDetails from './AvailabilityDetails';
import RateExpression from './RateExpression';
import SkillsDetails from './SkillsDetails';
import ToolsDetails from './ToolsDetails';
import AddTalentRoasterMembers from './AddTalentRoasterMembers';
import { useNavigate } from 'react-router-dom';
import Welcome from '../Welcome';

const RegistrationStepper = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(2);

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
    if (activeStep === 11) {
      navigate('/login/sign-in');
    }
  };

  const renderStepContent = (step: any) => {
    switch (step) {
      case 1:
        return <PersonalInfo activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} />;
      case 2:
        return <ProfilePic activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} />;
      case 3:
        return <Location activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} />;
      case 4:
        return <PortfoliosSocial activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} />;
      case 5:
        return <WorkDetails activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} />;
      case 6:
        return <AvailabilityDetails activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} />;
      case 7:
        return <RateExpression activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} />;
      case 8:
        return <SkillsDetails activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} />;
      case 9:
        return <ToolsDetails activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} />;
      case 10:
        return <AddTalentRoasterMembers activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} />;
      case 11:
        return <Welcome handleNext={handleNext} />;

      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        padding: '200px 0px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: '1 0 0',
        alignSelf: 'stretch',
        backgroundColor: '#f7f8f8',
      }}>
      <Box
        sx={{
          borderRadius: '24px',
          background: 'var(--White, #FFF)',
          width: '954px',
        }}>
        <MobileStepper
          className="stepper"
          variant="progress"
          steps={12}
          position="static"
          activeStep={activeStep}
          sx={{
            width: '930px',
            borderRadius: '24px 24px 0 0',
            paddingTop: 0,
            marginTop: 0,
          }}
          backButton={undefined}
          nextButton={undefined}
        />
        <Box sx={{ padding: '50px', paddingTop: '40px' }}>
          <img src={logo} alt="logo" />
          {renderStepContent(activeStep)}
        </Box>
      </Box>
    </Box>
  );
};

export default RegistrationStepper;
