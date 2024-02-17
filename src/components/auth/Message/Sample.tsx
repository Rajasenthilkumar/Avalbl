import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import profile from '../../../Assets/Images/Profile.png';
const data = [
  {
    profile: profile,
    name: 'John Doe',
    message: 'Hello there!',
    badgeContent: 3,
    time: '3 mins',
  },
  {
    profile: profile,
    name: 'Jane Smith',
    message: 'Nice to meet you!',
    badgeContent: 2,
    time: '5 mins',
  },
  {
    profile: profile,
    name: 'Alice Johnson',
    message: 'How are you doing?',
    badgeContent: 1,
    time: '1 min',
  },
  {
    profile: profile,
    name: 'Bob Williams',
    message: 'Good day!',
    badgeContent: 0,
    time: '8 mins',
  },
  {
    profile: profile,
    name: 'Eva Brown',
    message: "What's up?",
    badgeContent: 7,
    time: '2 mins',
  },
  {
    profile: profile,
    name: 'David Miller',
    message: 'Greetings!',
    badgeContent: 5,
    time: '4 mins',
  },
];

export default function ResponsiveChat() {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);
  
    useEffect(() => {
      setSelectedItem(data.length - 1);
    }, []);
  
    const handleItemClick = (index: number) => {
      setSelectedItem(index);
    };
  
    return (
      <Grid  container spacing={2}  sx={{ backgroundColor: '#F7F8F8', padding: 2  }}>
        <Grid item xs={12} md={6} lg={3} sx={{ borderRight: '2px solid #BEBAD2' ,}}>
          <Typography variant="h5" textAlign="left" mr={2}>
            Recent Chat
          </Typography>
          <Grid container spacing={1} sx={{ marginTop: '10px' }}>
            {data.map((item, index) => (
              <Grid
                container
                item
                alignItems="center"
                key={index}
                sx={{
                  padding: '5px',
                  borderBottom: selectedItem === index ? '0px' : '2px solid #d8d6e1',
                  backgroundColor: selectedItem === index ? 'white' : '#F7F8F8',
                  borderRadius: selectedItem === index ? '12px' : '0px',
                }}
                onClick={() => handleItemClick(index)}
              >
                <Grid item xs={2}>
                  <img
                    src={item.profile}
                    alt={`profile-${index}`}
                    style={{ width: '50px', height: '50px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                  />
                </Grid>
                <Grid item xs={6} style={{ margin: '8px' }}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography>{item.message}</Typography>
                </Grid>
                <Grid item xs={2} justifyContent="center" alignItems="center">
                  <Badge color="primary">
                    <Typography textAlign="center">{item.time}</Typography>
                  </Badge>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
  
        <Grid item xs={12} md={6} lg={9}>
          <Paper sx={{ position: 'relative', width: '100%', borderRadius: '20px'  }} elevation={0}>
            {selectedItem !== null && (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid
                    container
                    spacing={2}
                    style={{ display: 'flex', alignItems: 'center', padding: '20px', borderBottom: '2px solid #C3BFD7' }}
                  >
                    <img
                      src={data[selectedItem].profile}
                      alt={`profile-${selectedItem}`}
                      style={{ width: '50px', maxWidth: '100%', height: '50px' }}
                    />
                    <Typography variant="h6" style={{ marginLeft: '8px' }}>
                      {data[selectedItem].name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} style={{ padding: '20px', marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img
                        src={data[selectedItem].profile}
                        alt={`profile-${selectedItem}`}
                        style={{ width: '50px', maxWidth: '100%', height: '50px' }}
                      />
                      <Typography
                        variant="h6"
                        style={{
                          marginLeft: '8px',
                          backgroundColor: '#424866',
                          color: 'white',
                          borderRadius: '0px 12px 12px 12px',
                          padding: '5px',
                        }}
                      >
                        {data[selectedItem].message}
                      </Typography>
                    </div>
  
                    <Typography
                      variant="h6"
                      style={{
                        display: 'inline-block',
                        marginTop: '5px',
                        marginLeft: '55px',
                        backgroundColor: '#424866',
                        color: 'white',
                        borderRadius: '12px',
                        padding: '5px',
                      }}
                    >
                      {data[selectedItem].message}
                    </Typography>
                  </Grid>
  
                  <Grid
                    item
                    xs={12}
                    style={{ display: 'flex', padding: '20px', marginTop: '20px', justifyContent: 'flex-end' }}
                  >
                    <div style={{ textAlign: 'right' }}>
                      <Typography
                        variant="h6"
                        style={{
                          marginLeft: '8px',
                          backgroundColor: '#E1E2E7',
                          color: '#404040',
                          borderRadius: '12px 0px 12px 12px',
                          padding: '5px',
                        }}
                      >
                        {data[selectedItem].message}
                      </Typography>
                      <Typography
                        variant="h6"
                        style={{
                          display: 'inline-block',
                          marginLeft: '8px',
                          backgroundColor: '#E1E2E7',
                          color: '#404040',
                          borderRadius: '12px ',
                          padding: '5px',
                          marginTop: '10px',
                        }}
                      >
                        {data[selectedItem].message}
                      </Typography>
                    </div>
  
                    <img
                      src={data[selectedItem].profile}
                      alt={`profile-${selectedItem}`}
                      style={{ width: '50px', maxWidth: '100%', height: '50px', marginLeft: '8px' }}
                    />
                  </Grid>
                  <Grid item xs={12} style={{ display: 'flex', padding: '20px', marginTop: '10px' }}>
                    <img
                      src={data[selectedItem].profile}
                      alt={`profile-${selectedItem}`}
                      style={{ width: '50px', maxWidth: '100%', height: '50px' }}
                    />
                    <Typography
                      variant="h6"
                      style={{
                        marginLeft: '8px',
                        backgroundColor: '#424866',
                        color: 'white',
                        borderRadius: '0px 12px 12px 12px',
                        padding: '5px',
                      }}
                    >
                      {data[selectedItem].message}
                    </Typography>
                  </Grid>
                  <Grid>
                    <Grid
                      item
                      xs={12}
                      style={{
                        bottom: '20px',
                        width: 'calc(100% - 40px)',
                        paddingRight: '20px',
                        marginTop: '200px',
                        display: 'flex',
                      }}
                    >
                      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <TextField id="outlined-basic" defaultValue="Write Your Message Here" variant="outlined" />
                      </FormControl>
                      <Button
                        sx={{ backgroundColor: '#2CB512', borderRadius: '8px', color: '#FFFFFF', margin: '10px', width: '55px' }}
                      >
                        Send
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Paper>
        </Grid>
      </Grid>
    );
  }