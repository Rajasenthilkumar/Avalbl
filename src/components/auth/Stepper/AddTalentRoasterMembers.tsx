import React, { useState } from 'react';
import { Button, Box, Typography, TextField, InputAdornment, Chip } from '@mui/material';
import '../../../Assets/css/ProfileSetup.css';

interface AddTalentRoasterMembersProps {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
}

const AddTalentRoasterMembers: React.FC<AddTalentRoasterMembersProps> = ({ activeStep, handleNext, handleBack }) => {
  const [enteredEmail, setEnteredEmail] = useState<string>('');
  const [invitedEmails, setInvitedEmails] = useState<string[]>([]);
  const [error, setError] = useState<string>('');

  const handleInputChange = (event: any) => {
    setEnteredEmail(event.target.value);
    setError('');
  };

  const handleInviteClick = () => {
    if (invitedEmails.includes(enteredEmail)) {
      setError('Email already invited');
      return;
    }
    setInvitedEmails((prevEmails) => [...prevEmails, enteredEmail]);
    setEnteredEmail('');
    setError('');
  };

  const handleAddRoasterMembersData = () => {
    handleNext();
  };
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
        Add talent members to your roster
      </Typography>
      <Box style={{ width: '900px' }}>
        <Typography
          className="lable-name"
          sx={{
            textAlign: 'left',
            mt: '15px',
          }}>
          Use space or comma for multiple entries
        </Typography>
        <div>
          <TextField
            className="formFields"
            sx={{ mt: 0, width: '860px' }}
            type="email"
            name="email"
            placeholder="Enter the Email"
            value={enteredEmail}
            onChange={handleInputChange}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    variant="contained"
                    className="common-button-green"
                    sx={{ width: '130px !important', height: '40px !important' }}
                    onClick={handleInviteClick}>
                    Invite Now
                  </Button>
                </InputAdornment>
              ),
            }}
          />
          {error && <div style={{ color: 'red' }}>{error}</div>}
          {invitedEmails.map((email) => (
            <Chip
              key={email}
              label={email}
              style={{ margin: '4px' }}
              onDelete={() => {
                setInvitedEmails((prevEmails) => prevEmails.filter((e) => e !== email));
              }}
            />
          ))}
        </div>
        {/* {emailError && <Typography sx={{ color: 'red', mt: 1 }}>{emailError}</Typography>}
        {Error.email && <Typography sx={{ color: 'red', mt: 1 }}>{Error.email}</Typography>} */}
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
            onClick={handleAddRoasterMembersData}
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

export default AddTalentRoasterMembers;
