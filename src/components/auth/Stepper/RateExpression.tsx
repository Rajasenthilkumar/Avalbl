/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, TextField, Select, MenuItem, Chip, Button } from '@mui/material';
import '../../../Assets/css/Common.css';
import Env from '../../../services/Env';
import { connect } from 'react-redux';

interface RateExpressionProps {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
  userAccessToken: string;
}

interface RateRangeItem {
  key: string;
  label: string;
}

const RateExpression: React.FC<RateExpressionProps> = ({ activeStep, handleNext, handleBack, userAccessToken }) => {
  const [totExperience, setTotExperience] = useState<string[]>([]);
  const [rateRange, setRateRange] = useState<RateRangeItem[]>([]);
  const [rate, setRate] = useState(rateRange.length > 0 ? rateRange[0].label : '');
  const [companyInput, setCompanyInput] = useState('');
  const [companies, setCompanies] = useState<string[]>([]);
  // const [totalExperience, setTotalExperience] = useState([]);

  useEffect(() => {
    rateAndExperience();
    console.log('totExpe', totExperience);
  }, []);

  const rateAndExperience = () => {
    const workdetails = Env.get(`user/rateRange`, userAccessToken);
    workdetails
      .then((response: any) => {
        if (response.status === 200) {
          setRateRange(response.data.data.rateRange);
          setTotExperience(response.data.data.year || []);
          // setTotExperience(Array.isArray(response.data.data.year) ? response.data.data.year : [response.data.data.year]);

          // setToast({ message: response.data.message.value, type: 'success' });
        }
      })
      .catch((error: any) => {
        console.log('RESPONSE', error);
        // setToast({ message: error.response.data.message.value, type: 'error' });
      });
  };

  const handleRateExpressionData = () => {
    console.log('RateExpression');
    handleNext();
  };

  const handleTotalExperienceChange = (event: any) => {
    console.log('EVENT', event.target.value);

    setTotExperience(event.target.value);
  };

  console.log('totExpe', totExperience);

  const handleRateChange = (event: any) => {
    setRate(event.target.value);
  };

  const handleInputChange = (event: any) => {
    setCompanyInput(event.target.value);
  };

  const handleChipDelete = (companyToDelete: any) => {
    setCompanies((prevCompanies) => prevCompanies.filter((company) => company !== companyToDelete));
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      const trimmedCompany = companyInput.trim();
      if (trimmedCompany !== '') {
        setCompanies((prevCompanies: string[]) => [...prevCompanies, trimmedCompany]);
        setCompanyInput('');
      }
    }
  };

  return (
    <>
      <Typography
        sx={{
          fontSize: '30px',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: '38px',
          paddingTop: '30px',
        }}>
        Rate & Experience
      </Typography>
      <Box style={{ width: '900px' }}>
        <Grid container>
          <Grid item sm={6}>
            <Typography
              className="lable-name"
              sx={{
                textAlign: 'left',
                mt: '15px',
              }}>
              Total Experience
            </Typography>

            {/* <Select sx={{ width: '350px' }} value={totExperience} onChange={handleTotalExperienceChange}>
              {totExperience.map((experience: any) => (
                <MenuItem key={experience} value={experience}>
                  {experience}
                </MenuItem>
              ))}
            </Select> */}
            <Select sx={{ width: '350px' }} value={totExperience} onChange={handleTotalExperienceChange}>
              {totExperience.map((item: string, index: number) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item sm={6}>
            <Typography
              className="lable-name"
              sx={{
                textAlign: 'left',
                mt: '15px',
                paddingLeft: '44px',
              }}>
              Rate Range
            </Typography>

            <Select sx={{ width: '350px' }} value={rate} onChange={handleRateChange}>
              {rateRange.map((rate: any) => (
                <MenuItem key={rate.key} value={rate.label}>
                  {rate.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item sm={12}>
            <Typography
              className="lable-name"
              sx={{
                textAlign: 'left',
                mt: '30px',
              }}>
              Companies or clients you&apos;ve done work for
              <span style={{ color: '#98A2B3' }}> [Type and Press Enter for multiple entries]</span>
            </Typography>
            <TextField
              className="formFields"
              sx={{ mt: 0, width: '850px' }}
              type="text"
              name="companies"
              placeholder="XYZ Company"
              value={companyInput}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              required
            />
            <div style={{ marginTop: '10px' }}>
              {companies.map((company, index) => (
                <Chip
                  key={index}
                  label={company}
                  onDelete={() => handleChipDelete(company)}
                  style={{ marginRight: '8px', marginBottom: '8px' }}
                />
              ))}
            </div>
          </Grid>
          <Grid item sm={12}>
            <Typography
              className="lable-name"
              sx={{
                textAlign: 'left',
                mt: '30px',
              }}>
              Bio
            </Typography>
            <TextField
              className="formFields"
              multiline
              rows={4}
              sx={{ mt: 0, width: '850px', maxHeight: '200px' }}
              type="text"
              name="bio"
              placeholder="Type Here..."
              required
            />
          </Grid>
        </Grid>
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
            onClick={handleRateExpressionData}
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

export default connect(mapDispatchToProps)(RateExpression);
