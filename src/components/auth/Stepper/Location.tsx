import React, { useState } from 'react';
import { Box, Typography, Grid, TextField, Autocomplete, InputAdornment, Button } from '@mui/material';
import mapPin from '../../../Assets/Images/mapPin.png';
import '../../../Assets/css/Common.css';
import CustomSnackbar from '../../../common/Snackbar';
import Env from '../../../services/Env';
import { connect } from 'react-redux';

interface LocationProps {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
  userAccessToken: string;
}

interface AutocompleteOption {
  country: {
    name: string;
    key: string;
    latitude: string;
    longitude: string;
  };
  state: {
    name: string;
    key: string;
    latitude: string;
    longitude: string;
  };
  city: {
    name: string;
    key: string;
    latitude: string;
    longitude: string;
  };
}

const Location: React.FC<LocationProps> = ({ activeStep, handleNext, handleBack, userAccessToken }) => {
  const [inputValue, setInputValue] = useState('');
  const [open, setOpen] = React.useState(false);
  const [toast, setToast] = React.useState({ message: '', type: 'success' });
  const [autocompleteOptions, setAutocompleteOptions] = useState<AutocompleteOption[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<AutocompleteOption | null>(null);
  const [locationOptions, setLocationOptions] = useState<AutocompleteOption[]>([]);
  const [mapLocation, setMapLocation] = useState('');
  const handleClick = () => {
    setOpen(true);
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const mapLocations = (latitude: any, longitude: any) => {
    const mapSrc = `http://www.google.com/maps?q=${latitude},${longitude}`;
    setMapLocation(mapSrc);
  };

  //   const latitude = 37.7749; // Replace with your latitude
  //   const longitude = -122.4194; // Replace with your longitude

  // const getLocationInfo = () => {
  //   const locationIfo = Env.get(``);
  //   locationIfo
  //     .then((response: any) => {
  //       if (response.status === true) {
  //         console.log('Response', response);
  //       }
  //     })
  //     .catch((error: any) => {
  //       console.log('Response', error);
  //     });
  // };

  const handleLocationData = () => {
    console.log('Location');
    handleNext();
  };

  // const handleLocation = (e: any, newValue: any) => {
  //   console.log('NEW', newValue);
  // };

  const handleLocation = (e: any, newValue: AutocompleteOption | null) => {
    setSelectedLocation(newValue);

    if (newValue) {
      // const matchingOption = locationOptions.find((option) => option?.country?.name === newValue?.country);
      const matchingOption = locationOptions.find(
        (option) =>
          option?.country?.name === (newValue?.country?.name || newValue?.country) &&
          option?.state?.name === (newValue?.state?.name || newValue?.state)
      );

      if (matchingOption) {
        if (matchingOption.city) {
          mapLocations(matchingOption.city.latitude, matchingOption.city.longitude);
        } else if (matchingOption.state) {
          mapLocations(matchingOption.state.latitude, matchingOption.state.longitude);
        } else if (matchingOption.country) {
          mapLocations(matchingOption.country.latitude, matchingOption.country.longitude);
        } else {
          console.log('No city information available for the matching option.');
        }
      } else {
        console.log('No matching option found.');
      }
    }
  };

  const handleCityStateCountry = (e: any, newValue: any) => {
    if (newValue.length > 4) {
      const searchLocation = Env.get(`user/location?location=${newValue}`, userAccessToken);

      searchLocation
        .then((response: any) => {
          const options = response.data.data.map((item: any) => ({
            city: item.city?.name || '',
            state: item.state?.name || '',
            country: item.country?.name || '',
          }));

          setAutocompleteOptions(options);
          setLocationOptions(response.data.data);
        })
        .catch((error: any) => {
          if (error.response.data.data != null) {
            setToast({ message: error.response.data.message.value, type: 'error' });
          } else {
            setToast({ message: error.response.data.message, type: 'error' });
          }
          handleClick();
        });
    }
  };

  // const handleCityStateCountry = (e: any, newValue: any) => {
  //   if (newValue.length > 4) {
  //     const searchLocation = Env.get(`user/location?location=${newValue}`);

  //     searchLocation
  //       .then((response: any) => {
  //         console.log('response.data.data', response.data.data);

  //         const options = response.data.data.map((item: any) => ({
  //           city: item.city?.name || '',
  //           state: item.state?.name || '',
  //           country: item.country?.name || '',
  //         }));

  //         setAutocompleteOptions(options);
  //       })
  //       .catch((error: any) => {
  //         if (error.response.data.data != null) {
  //           setToast({ message: error.response.data.message.value, type: 'error' });
  //         } else {
  //           setToast({ message: error.response.data.message, type: 'error' });
  //         }
  //         handleClick();
  //       });
  //   }
  // };

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
        Share a bit more about yourself
      </Typography>
      <Box
        // sx={{ display: "flex", justifyContent: "flex-start", width: "900px" }}
        style={{ width: '900px' }}>
        {/* <form > */}
        <Typography
          className="lable-name"
          sx={{
            textAlign: 'left',
            mt: '15px',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '20px',
          }}>
          Language Spoken
        </Typography>
        <Grid>
          <Autocomplete
            multiple
            freeSolo
            options={[]}
            defaultValue={[]}
            renderInput={(params) => (
              <TextField className="formFields" sx={{ width: '850px' }} {...params} placeholder="Type & Press Enter" />
            )}
          />
        </Grid>

        <Grid>
          <Typography
            className="lable-name"
            sx={{
              textAlign: 'left',
              mt: '15px',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '20px',
            }}>
            Location
          </Typography>
          <Autocomplete
            // value={selectedOption}
            value={selectedLocation}
            onChange={(e, newValue) => handleLocation(e, newValue)}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
              handleCityStateCountry(event, newInputValue);
            }}
            options={autocompleteOptions}
            getOptionLabel={(option) => `${option.city}, ${option.state}, ${option.country}`}
            renderInput={(params) => (
              <TextField
                {...params}
                className="formFields"
                sx={{
                  width: '850px',
                  '&:hover': {
                    borderColor: 'red',
                  },
                }}
                name="firstname"
                placeholder="City, State, Country"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={mapPin} alt="mapPin" style={{ width: '24px', height: '24px' }} />
                    </InputAdornment>
                  ),
                }}
                required
              />
            )}
          />
          {/* <Map latitude={latitude} longitude={longitude} /> */}
        </Grid>
        <div className="location-select">
          <iframe
            src={mapLocation}
            style={{ border: 0, width: '850px', height: '350px' }}
            // allowFullScreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <a href={mapLocation} target="_blank" rel="noreferrer">
          Open in Google Maps
        </a>
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
            onClick={handleLocationData}
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
      <CustomSnackbar open={open} autoHideDuration={3000} onClose={handleClose} toast={toast} />
    </>
  );
};

function mapDispatchToProps(state: any) {
  return {
    userAccessToken: state.userAccessToken,
  };
}

export default connect(mapDispatchToProps)(Location);
