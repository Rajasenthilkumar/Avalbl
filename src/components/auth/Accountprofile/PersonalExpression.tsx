/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, TextField, Select, MenuItem, Chip,Button } from '@mui/material';
import '../../../Assets/css/Common.css';
import Env from '../../../services/Env';
import { connect } from 'react-redux';

interface RateExpressionProps {
  userAccessToken: string;
}

interface RateRangeItem {
  key: string;
  label: string;
}

const details = {
  "data": {
    "experienceInYear": "5 Year",
    "rangeKey": "25hr50hr",
    "bio": "Sample Bio",
    "companyName": ["ABC", "CDE"]
}
};

const PersonalExpression: React.FC<RateExpressionProps> = ({ userAccessToken }) => {
  const [totExperience, setTotExperience] = useState<number>(parseInt(details.data.experienceInYear));
  const [, setRateRange] = useState<RateRangeItem[]>([]);
  const [rate, setRate] = useState<string>(details.data.rangeKey);
  const [companyInput, setCompanyInput] = useState<string>('');
  const [companies, setCompanies] = useState<string[]>([]);

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
        }
      })
      .catch((error: any) => {
        console.log('RESPONSE', error);
      });
  };

  const handleTotalExperienceChange = (event: any) => {
    setTotExperience(event.target.value);
  };

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
  const handleCancelClick = () => {
    // Handle cancel action
};

const handleSubmitClick = () => {
    // Handle save action
};

  return (
    <>
      <div style={{ margin: '0px', position: 'relative' }}> 
        <Grid
          container
          sx={{
            position: 'absolute',
            top: -140,
            right: 0,
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
          }}
        >
          <Button
            className="common-button-white"
            type="submit"
            variant="contained"
            onClick={handleCancelClick}
            sx={{
              width: '167px',
              height: '44px',
              marginRight: 1,
              '&:hover': {
                color: 'var(--Primary, #2CB512)',
                backgroundColor: '#fff',
              },
            }}
          >
            Cancel
          </Button>
          <Button
            className="common-button-green"
            type="submit"
            variant="contained"
            onClick={handleSubmitClick}
            sx={{
              width: '121px',
              height: '44px',
              marginLeft: 1,
              '&:hover': {
                background: 'var(--Primary, #2CB512)',
              },
            }}
          >
            Submit
          </Button>
        
        </Grid>
       
       
      </div>
      <Box   sx={{ p: '20px',backgroundColor:'#FFFFFF',borderRadius:'10px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography className="lable-name" sx={{ textAlign: 'left', mt: '15px' }}>
              Total Experience
            </Typography>
            <Select sx={{ width: '100%' }} value={`${details.data.experienceInYear} years`} onChange={handleTotalExperienceChange}>
            <MenuItem value={`${details.data.experienceInYear} years`}>
    {details.data.experienceInYear} years
  </MenuItem>
</Select>

          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography className="lable-name" sx={{ textAlign: 'left', mt: '15px' }}>
              Rate Range
            </Typography>
            <Select sx={{ width: '100%' }} value={rate} onChange={handleRateChange}>
            <MenuItem value={details.data.rangeKey}>
             {details.data.rangeKey}
           </MenuItem>
          </Select>
          </Grid>
          <Grid item xs={12}>
            <Typography className="lable-name" sx={{ textAlign: 'left', mt: '30px' }}>
              Companies (Client) name that you&apos;ve Worked
              <span style={{ color: '#98A2B3' }}> [Multi-Possible]</span>
            </Typography>
            <TextField
              className="formFields"
              sx={{ mt: 0, width: '100%' }}
              type="text"
              name="companies"
              placeholder="XYZ Company"
              value={details.data.companyName}
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
          <Grid item xs={12}>
            <Typography className="lable-name" sx={{ textAlign: 'left', mt: '30px' }}>
              Bio
            </Typography>
            <TextField
              className="formFields"
              multiline
              rows={4}
              sx={{ mt: 0, width: '100%', maxHeight: '200px' }}
              type="text"
              name="bio"
              placeholder="Type Here..."
              defaultValue={details.data.bio} // Set default value from details
              required
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

function mapDispatchToProps(state: any) {
  return {
    userAccessToken: state.userAccessToken,
  };
}

export default connect(mapDispatchToProps)(PersonalExpression);
