// import React, { useState } from 'react';
// import { Box, Typography, Grid, TextField, Autocomplete, InputAdornment } from '@mui/material';
// import mapPin from '../../../Assets/Images/mapPin.png';
// import '../../../Assets/css/Common.css';
// import CustomSnackbar from '../../../common/Snackbar';
// import Env from '../../../services/Env';
// import { connect } from 'react-redux';
// import { styled } from '@mui/system';

// interface LocationProps {
//   userAccessToken: string;
// }

// interface AutocompleteOption {
//   country: {
//     name: string;
//     key: string;
//     latitude: string;
//     longitude: string;
//   };
//   state: {
//     name: string;
//     key: string;
//     latitude: string;
//     longitude: string;
//   };
//   city: {
//     name: string;
//     key: string;
//     latitude: string;
//     longitude: string;
//   };
// }

// const details ={  
//   "data": {
//     "language": [
//         "Arabic",
//         "English"
//     ],
//     "city": "Puducherry",
//     "state": "Puducherry",
//     "country": "India"
//   },
// };

// const ResponsiveTextField = styled(TextField)(() => ({
//   width: '100%',
//   '&:hover': {
//     borderColor: 'red',
//   },
// }));

// const Personallocation: React.FC<LocationProps> = ({ userAccessToken }) => {
//   const [inputValue, setInputValue] = useState('');
//   const [open, setOpen] = React.useState(false);
//   const [toast, setToast] = React.useState({ message: '', type: 'success' });
//   const [autocompleteOptions, setAutocompleteOptions] = useState<AutocompleteOption[]>([]);
//   const [selectedLocation, setSelectedLocation] = useState<AutocompleteOption | null>(null);
//   const [locationOptions, setLocationOptions] = useState<AutocompleteOption[]>([]);
//   const [mapLocation, setMapLocation] = useState('');

//   const handleClick = () => {
//     setOpen(true);
//     setTimeout(() => {
//       handleClose();
//     }, 2000);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const mapLocations = (latitude: any, longitude: any) => {
//     const mapSrc = `http://www.google.com/maps?q=${latitude},${longitude}`;
//     setMapLocation(mapSrc);
//   };

//   const handleLocation = (e: any, newValue: AutocompleteOption | null) => {
//     setSelectedLocation(newValue);

//     if (newValue) {
//       const matchingOption = locationOptions.find(
//         (option) =>
//           option?.country?.name === (newValue?.country?.name || newValue?.country) &&
//           option?.state?.name === (newValue?.state?.name || newValue?.state)
//       );

//       if (matchingOption) {
//         if (matchingOption.city) {
//           mapLocations(matchingOption.city.latitude, matchingOption.city.longitude);
//         } else if (matchingOption.state) {
//           mapLocations(matchingOption.state.latitude, matchingOption.state.longitude);
//         } else if (matchingOption.country) {
//           mapLocations(matchingOption.country.latitude, matchingOption.country.longitude);
//         } else {
//           console.log('No city information available for the matching option.');
//         }
//       } else {
//         console.log('No matching option found.');
//       }
//     }
//   };

//   const handleCityStateCountry = (e: any, newValue: any) => {
//     if (newValue.length > 4) {
//       const searchLocation = Env.get(`user/location?location=${newValue}`, userAccessToken);

//       searchLocation
//         .then((response: any) => {
//           const options = response.data.data.map((item: any) => ({
//             city: item.city?.name || '',
//             state: item.state?.name || '',
//             country: item.country?.name || '',
//           }));

//           setAutocompleteOptions(options);
//           setLocationOptions(response.data.data);
//         })
//         .catch((error: any) => {
//           if (error.response.data.data != null) {
//             setToast({ message: error.response.data.message.value, type: 'error' });
//           } else {
//             setToast({ message: error.response.data.message, type: 'error' });
//           }
//           handleClick();
//         });
//     }
//   };

//   return (
//     <Box sx={{ p: '20px',backgroundColor:'#FFFFFF',borderRadius:'10px' }}>
//       <Typography
//         className="lable-name"
//         sx={{
//           textAlign: 'left',
//           mt: '15px',
//           fontSize: '14px',
//           fontStyle: 'normal',
//           fontWeight: 500,
//           lineHeight: '20px',
//           mb:1
//         }}>
//         Language Spoken (Specify up to 3 Languages you can work in.)
//       </Typography>

//       <Grid>
//         <Autocomplete
//           multiple
//           freeSolo
//           options={details.data.language}
//           defaultValue={details.data.language}
//           renderInput={(params) => (
//             <ResponsiveTextField {...params}  />
//           )}
//         />
//       </Grid>

//       <Grid>
//         <Typography
//           className="lable-name"
//           sx={{
//             textAlign: 'left',
//             mt: '15px',
//             fontSize: '14px',
//             fontStyle: 'normal',
//             fontWeight: 500,
//             lineHeight: '20px',
//             mb:1,
//           }}>
//           Location
//         </Typography>

//         <Autocomplete
//           value={selectedLocation}
//           onChange={(e, newValue) => handleLocation(e, newValue)}
//           inputValue={inputValue}
//           onInputChange={(event, newInputValue) => {
//             setInputValue(newInputValue);
//             handleCityStateCountry(event, newInputValue);
//           }}
//           options={autocompleteOptions}
//           getOptionLabel={(option) => `${option.city}, ${option.state}, ${option.country}`}
//           renderInput={(params) => (
//             <ResponsiveTextField
//               {...params}
//               name="firstname"
//               placeholder="City, State, Country"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <img src={mapPin} alt="mapPin" style={{ width: '24px', height: '24px' }} />
//                   </InputAdornment>
//                 ),
//               }}
//               required
//             />
//           )}
//         />
//       </Grid>

//       <div className="location-select">
//         <iframe src={mapLocation} style={{ border: 0, width: '100%', height: '350px' }} loading="lazy"></iframe>
//       </div>
//       <a href={mapLocation} target="_blank" rel="noreferrer">
//         Open in Google Maps
//       </a>

//       <CustomSnackbar open={open} autoHideDuration={3000} onClose={handleClose} toast={toast} />
//     </Box>
//   );
// };

// function mapDispatchToProps(state: any) {
//   return {
//     userAccessToken: state.userAccessToken,
//   };
// }

// export default connect(mapDispatchToProps)(Personallocation);



import React, { useState } from 'react';
import { Box, Typography, Grid, TextField, Autocomplete, InputAdornment } from '@mui/material';
import mapPin from '../../../Assets/Images/mapPin.png';
import '../../../Assets/css/Common.css';
import CustomSnackbar from '../../../common/Snackbar';
import Env from '../../../services/Env';
import { connect } from 'react-redux';
import { styled } from '@mui/system';

interface LocationProps {
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

const details ={  
  "data": {
    "language": [
        "Arabic",
        "English"
    ],
    "city": "Puducherry",
    "state": "Puducherry",
    "country": "India"
  },
};

const ResponsiveTextField = styled(TextField)(() => ({
  width: '100%',
  '&:hover': {
    borderColor: 'red',
  },
}));

const Personallocation: React.FC<LocationProps> = ({ userAccessToken }) => {
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

  const handleLocation = (e: any, newValue: AutocompleteOption | null) => {
    setSelectedLocation(newValue);

    if (newValue) {
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

  return (
    <Box sx={{ p: '20px',backgroundColor:'#FFFFFF',borderRadius:'10px' }}>
      <Typography
        className="lable-name"
        sx={{
          textAlign: 'left',
          mt: '15px',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '20px',
          mb:1
        }}>
        Language Spoken (Specify up to 3 Languages you can work in.)
      </Typography>

      <Grid>
        <Autocomplete
          multiple
          freeSolo
          options={details.data.language}
          defaultValue={details.data.language}
          renderInput={(params) => (
            <ResponsiveTextField {...params}  />
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
            mb:1,
          }}>
          Location
        </Typography>

        <Autocomplete
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
            <ResponsiveTextField
              {...params}
              name="firstname"
              placeholder="City, State, Country"
              InputProps={{
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
      </Grid>

      <div className="location-select">
        <iframe src={mapLocation} style={{ border: 0, width: '100%', height: '350px' }} loading="lazy"></iframe>
      </div>
      <a href={mapLocation} target="_blank" rel="noreferrer">
        Open in Google Maps
      </a>

      <CustomSnackbar open={open} autoHideDuration={3000} onClose={handleClose} toast={toast} />
    </Box>
  );
};

function mapDispatchToProps(state: any) {
  return {
    userAccessToken: state.userAccessToken,
  };
}

export default connect(mapDispatchToProps)(Personallocation);
