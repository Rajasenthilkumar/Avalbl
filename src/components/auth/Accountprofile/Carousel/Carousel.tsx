import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import IconButton from '@mui/material/IconButton';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'; // Import single dot icon

// Import images
import image1 from '../../../../Assets/Images/image 1.png';
import image2 from '../../../../Assets/Images/image 2.png';
import image3 from '../../../../Assets/Images/image 3.png';

const images = [
  image1,
  image2,
  image3,
  image1,
  image2,
  image3,
  image1,
  image2,
  image3,
  image1,
  image2,
  image3,
 
  // Add more images here if needed
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = Math.ceil(images.length / 4);

  const handleStepChange = (index: number) => {
    setActiveStep(index);
  };

  return (
    <Box sx={{ maxWidth: '100%', paddingTop: '60px', paddingBottom: '30px', overflowX: 'hidden' }}>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {[...Array(maxSteps)].map((_, index) => (
          <div key={index} style={{ display: 'flex'}}>
            {images.slice(index * 4, index * 4 + 4).map((image, idx) => (
              <Box key={idx} sx={{ p: 1, flexGrow: 1 }}>
                <img
                  style={{ width: '389px', height: '284px', borderRadius: '20px', padding: '5px' }}
                  src={image}
                  alt={`Image ${index * 4 + idx + 1}`}
                />
              </Box>
            ))}
          </div>
        ))}
      </SwipeableViews>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 1, // Add margin top to separate from images
        }}
      >
        {[...Array(maxSteps)].map((_, index) => (
          <IconButton
            key={index}
            onClick={() => handleStepChange(index)}
            sx={{
              mx: 0.5,
              p: '0px',
              color: activeStep === index ? '#2cb512' : 'rgba(0, 0, 0, 0.54)',
            }}
          >
            <FiberManualRecordIcon sx={{ fontSize: 'small' }} />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
