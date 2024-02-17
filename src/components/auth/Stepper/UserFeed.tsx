import React, { useState } from 'react';
import '../../../Assets/css/HomeScreen.css';
import { Typography } from '@mui/material';
import feed1 from '../../../Assets/Images/login01.png';
import feed2 from '../../../Assets/Images/login02.png';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import { Button, CardActionArea } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MenuIcon from '@mui/icons-material/Menu';
const UserFeed = () => {
  const ButtonStyled = styled(Button)`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: fit-content;
    height: 40px;
    display: none;
  `;

  const ContainerStyled = styled('div')`
  position: absolute;
  &:hover {
    .test-button {
      display: block;
    }
  }  
}`;

  const [imageIndexes, setImageIndexes] = useState([0, 0, 0, 0]);

  const cardData = [
    {
      name: 'Alisa Hester',
      role: 'Jr. UX/UI Designer | U.S.',
      bgColor: '#ffffff',
      buttonLabel: 'Available',
      buttonColor: '#FFF',
      images: [{ url: feed1 }, { url: feed2 }, { url: feed1 }, { url: feed2 }],
    },
    {
      name: 'John Doe',
      role: 'Senior Developer',
      bgColor: '#ffffff',
      buttonLabel: 'Available Part Time',
      buttonColor: '#fff',
      color: '#f08334!important',
      images: [{ url: feed2 }, { url: feed1 }, { url: feed2 }, { url: feed1 }],
    },
    {
      name: 'Jane Smith',
      role: 'Product Manager',
      bgColor: '#ffffff',
      buttonLabel: 'Available Soon',
      buttonColor: '#fff',
      color: '#ffc65c!important',
      images: [{ url: feed1 }, { url: feed2 }, { url: feed1 }, { url: feed2 }],
    },
    {
      name: 'Chris',
      role: 'Product Manager',
      bgColor: '#ffffff',
      buttonLabel: 'Available',
      buttonColor: '#fff',
      color: '#4caf50!important',
      images: [{ url: feed1 }, { url: feed2 }, { url: feed1 }, { url: feed2 }],
    },
  ];

  const cardDataOne = [
    {
      name: 'Alisa Hester',
      role: 'Jr. UX/UI Designer | U.S.',
      bgColor: '#ffffff',
      buttonLabel: 'Available',
      buttonColor: '#FFF',
      images: [{ url: feed1 }, { url: feed2 }, { url: feed1 }, { url: feed2 }],
    },
    {
      name: 'John Doe',
      role: 'Senior Developer',
      bgColor: '#ffffff',
      buttonLabel: 'Available Part Time',
      buttonColor: '#fff',
      color: '#f08334!important',
      images: [{ url: feed2 }, { url: feed1 }, { url: feed2 }, { url: feed1 }],
    },
    {
      name: 'Jane Smith',
      role: 'Product Manager',
      bgColor: '#ffffff',
      buttonLabel: 'Available Soon',
      buttonColor: '#fff',
      color: '#ffc65c!important',
      images: [{ url: feed1 }, { url: feed2 }, { url: feed1 }, { url: feed2 }],
    },
    {
      name: 'Chris',
      role: 'Product Manager',
      bgColor: '#ffffff',
      buttonLabel: 'Available',
      buttonColor: '#fff',
      color: '#4caf50!important',
      images: [{ url: feed1 }, { url: feed2 }, { url: feed1 }, { url: feed2 }],
    },
  ];

  const handleImage = (setIndex: any, imageIndex: any) => {
    const newImageIndexes = [...imageIndexes];
    newImageIndexes[setIndex] = imageIndex;
    setImageIndexes(newImageIndexes);
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '300px', marginTop: '100px' }}>
        {cardData.slice(0, 4).map((card, setIndex) => (
          <Card key={setIndex} sx={{ width: '300px', marginLeft: setIndex !== 0 ? 2 : 0, background: card.bgColor }}>
            <ContainerStyled>
              <CardActionArea>
                <CardMedia component="img" height="140" image={card.images[imageIndexes[setIndex]].url} alt="noImg" />
                <CardContent style={{ padding: 0, margin: 0 }}>
                  <Typography
                    style={{
                      textAlign: 'end',
                      marginTop: '-65px',
                      marginBottom: '25px',
                      marginRight: '0px',
                      color: '#332d2d94',
                      width: '150px',
                      marginLeft: '125px',
                    }}>
                    <Button
                      className="common-button-green"
                      type="submit"
                      variant="outlined"
                      sx={{
                        mt: -15,
                        mb: 0,
                        ml: 0,
                        mr: 0,
                        textTransform: 'none',
                        color: card.buttonColor,
                        padding: 0,
                        width: '100%',
                        height: '30px',
                        background: card.color,
                      }}>
                      {card.buttonLabel}
                    </Button>
                  </Typography>

                  <Typography color="text.secondary">
                    <div style={{ display: 'flex', margin: 0, padding: 0 }}>
                      {card.images.map((image, index) => (
                        <CardMedia
                          component="img"
                          width="50"
                          height="50"
                          key={index}
                          image={image.url}
                          alt="noImg"
                          onClick={() => handleImage(setIndex, index)}
                        />
                      ))}
                    </div>
                  </Typography>
                </CardContent>

                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe">
                      <CardMedia component="img" width="100" height="50" image={feed1} alt="noImg" />
                    </Avatar>
                  }
                  titleTypographyProps={{ fontSize: 15, fontWeight: 'bold' }}
                  title={card.name}
                  subheaderTypographyProps={{
                    fontSize: 12,
                    marginTop: '5px',
                  }}
                  subheader={card.role}
                />
              </CardActionArea>{' '}
              <Typography
                style={{
                  textAlign: 'end',
                  marginTop: '-65px',
                  marginBottom: '25px',
                  marginRight: '20px',
                  color: '#332d2d94',
                }}>
                <ArrowOutwardIcon style={{ width: '15px' }} />
              </Typography>
              <ButtonStyled className="test-button">
                <VisibilityIcon style={{ color: '#FFF' }} />
                <MenuIcon style={{ color: '#FFF', marginLeft: '20px' }} />
              </ButtonStyled>
            </ContainerStyled>
          </Card>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '300px', marginTop: '300px' }}>
        {cardDataOne.slice(0, 4).map((card, setIndex) => (
          <Card key={setIndex} sx={{ width: '300px', marginLeft: setIndex !== 0 ? 2 : 0, background: card.bgColor }}>
            <ContainerStyled>
              <CardActionArea>
                <CardMedia component="img" height="140" image={card.images[imageIndexes[setIndex]].url} alt="noImg" />
                <CardContent style={{ padding: 0, margin: 0 }}>
                  <Typography
                    style={{
                      textAlign: 'end',
                      marginTop: '-65px',
                      marginBottom: '25px',
                      marginRight: '0px',
                      color: '#332d2d94',
                      width: '150px',
                      marginLeft: '125px',
                    }}>
                    <Button
                      className="common-button-green"
                      type="submit"
                      variant="outlined"
                      sx={{
                        mt: -15,
                        mb: 0,
                        ml: 0,
                        mr: 0,
                        textTransform: 'none',
                        color: card.buttonColor,
                        padding: 0,
                        width: '100%',
                        height: '30px',
                        background: card.color,
                      }}>
                      {card.buttonLabel}
                    </Button>
                  </Typography>

                  <Typography color="text.secondary">
                    <div style={{ display: 'flex', margin: 0, padding: 0 }}>
                      {card.images.map((image, index) => (
                        <CardMedia
                          component="img"
                          width="50"
                          height="50"
                          key={index}
                          image={image.url}
                          alt="noImg"
                          onClick={() => handleImage(setIndex, index)}
                        />
                      ))}
                    </div>
                  </Typography>
                </CardContent>

                <div>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe">
                        <CardMedia component="img" width="100" height="50" image={feed1} alt="noImg" />
                      </Avatar>
                    }
                    titleTypographyProps={{ fontSize: 15, fontWeight: 'bold' }}
                    title={card.name}
                    subheaderTypographyProps={{
                      fontSize: 12,
                      marginTop: '5px',
                    }}
                    subheader={card.role}
                  />
                </div>
              </CardActionArea>{' '}
              <Typography
                style={{
                  textAlign: 'end',
                  marginTop: '-65px',
                  marginBottom: '25px',
                  marginRight: '20px',
                  color: '#332d2d94',
                }}>
                <ArrowOutwardIcon style={{ width: '15px' }} />
              </Typography>
              <ButtonStyled className="test-button">
                <VisibilityIcon style={{ color: '#FFF' }} />
                <MenuIcon style={{ color: '#FFF', marginLeft: '20px' }} />
              </ButtonStyled>
            </ContainerStyled>
          </Card>
        ))}
      </div>
    </>
  );
};

export default UserFeed;
