// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import image1 from '../../../Assets/Images/Frame 141.png'; // Replace this with the actual import
// import { Typography, Button, Paper } from '@mui/material';

// interface StaticData {
//     title: string;
//     artist: string;
//     date: string;
//     description: string;
// }

// const titles = ['Booking Requests', 'Previous Contracts', 'Ongoing Contracts'];

// const staticData: StaticData[] = [
//     {
//         title: 'BirdWings Visual Art Project',
//         artist: 'Red wings',
//         date: '17/03/2023 - 21/03/2023',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     },
//     {
//         title: 'Animal Visual Art Project',
//         artist: 'White wings',
//         date: '27/03/2024 - 2/05/2024',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     },
//     {
//         title: 'Plant Visual Art Project',
//         artist: 'Blue wings',
//         date: '08/06/2024 - 03/07/2023',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     },
// ];

// export default function CustomCard() {
//     const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

//     const handleTitleClick = (title: string) => {
//         setSelectedTitle((prevTitle) => (prevTitle === title ? null : title));
//     };

//     return (
//         <Grid container spacing={2} sx={{ backgroundColor: '#F7F8F8', height: '90vh', paddingTop :'30px' }}>
//             <Grid item xs={12} md={2.5} sx={{ padding: '10px', borderRight: '2px solid #BEBAD2', }}>
//                 {titles.map((title, index) => (
//                     <Paper
//                         key={index}
//                         elevation={selectedTitle === title ? 3 : 0}
//                         sx={{
//                             marginLeft: '8px',
//                             padding: '10px',
//                             margin: '10px',
//                             cursor: 'pointer',
//                             borderRadius :'10px',
//                             backgroundColor: selectedTitle === title ? '#fff' : 'transparent',
//                         }}
//                         onClick={() => handleTitleClick(title)}
//                     >
//                         <Typography variant="h6">{title}</Typography>
//                     </Paper>
//                 ))}
//             </Grid>
//             <Grid item xs={12} md={9.5}sx={{height:'100%',padding:'20px'}}>
//                 <div>
//                     {staticData.map((data, index) => (
//                         <Paper key={index} sx={{ padding: '20px',borderRadius: '20px', Width: '100%', margin: 'auto', marginBottom: '20px' }}>
//                             <Grid container spacing={2} alignItems="center">
//                                 <Grid item xs={12} md={6}>
//                                     <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
//                                         <img
//                                             src={image1}  // Replace this with the actual image source
//                                             alt={`image${index + 1}`}
//                                             style={{ width: '100px', maxWidth: '100%', height: '100px', marginRight: '10px' }}
//                                         />
//                                         <Box>
//                                             <Typography variant='h5' mb={1}>
//                                                 {data.title}
//                                             </Typography>
//                                             <Typography mb={1}>
//                                                 <span style={{ color: '#918EA5', fontSize: '16px' }}>From </span>
//                                                 <span style={{ color: '#2cb512', fontSize: '16px' }}>{data.artist}</span>
//                                             </Typography>
//                                             <Typography mb={1} style={{ color: '#7F7B8F', fontSize: '16px' }}>
//                                                 {data.date}
//                                             </Typography>
//                                         </Box>
//                                     </Box>
//                                 </Grid>
//                                 <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
//                                     <Button sx={{ backgroundColor: '#2CB512', borderRadius: '8px', color: '#FFFFFF', width: '100px', height: '50px', marginRight: '1rem' }}>
//                                         Accept
//                                     </Button>
//                                     <Button
//                                         sx={{
//                                             backgroundColor: 'white',
//                                             color: '#2CB512',
//                                             border: '1px solid #2CB512',
//                                             fontSize: '12px',
//                                             borderRadius: '8px',
//                                             width: '100px',
//                                             height: '50px',
//                                         }}
//                                     >
//                                         Cancel
//                                     </Button>
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <Typography>
//                                         <span style={{ color: '#667085', fontSize: '16px' }}>Description:</span>
//                                         <span style={{ color: '#454B68', fontSize: '16px' }}>{data.description}</span>
//                                     </Typography>
//                                 </Grid>
//                             </Grid>
//                         </Paper>
//                     ))}
//                 </div>
//             </Grid>
//         </Grid>
//     );
// }
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import image1 from '../../../Assets/Images/Frame 141.png'; // Replace this with the actual import
import { Typography, Button } from '@mui/material';

interface StaticData {
    title: string;
    artist: string;
    date: string;
    description: string;
}

const titles = ['Booking Requests', 'Previous Contracts', 'Ongoing Contracts'];

const staticData: StaticData[] = [
    {
        title: 'BirdWings Visual Art Project',
        artist: 'RedWings',
        date: '17/03/2023 - 21/03/2023',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'Animal Visual Art Project',
        artist: 'WhiteWings',
        date: '27/03/2024 - 2/05/2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'Plant Visual Art Project',
        artist: 'BlueWings',
        date: '08/06/2024 - 03/07/2023',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];

export default function CustomCard() {
    const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

    const handleTitleClick = (title: string) => {
        setSelectedTitle((prevTitle) => (prevTitle === title ? null : title));
    };

    return (
        <Grid container spacing={2} sx={{ backgroundColor: '#F7F8F8', minHeight: '100vh', paddingTop: '30px' }}>
            <Grid item xs={12}sm={12}  md={3} lg={2} sx={{ padding: '10px', borderRight: '1px solid #C3BFD7', }}>
                {titles.map((title, index) => (
                    <div
                        key={index}
                        style={{
                            marginLeft: '8px',
                            padding: '10px',
                            margin: '10px',
                            cursor: 'pointer',
                            borderRadius: '10px',
                            backgroundColor: selectedTitle === title ? '#fff' : 'transparent',
                            color: selectedTitle === title ? '#000000' : '#424866',
                        }}
                        onClick={() => handleTitleClick(title)}
                    >
                        <Typography sx={{fontSize:'16px',fontWeight:500,}}>{title}</Typography>
                    </div>
                ))}
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={10} sx={{ height: '100%', padding: '10px' }}>
                <div>
                    {staticData.map((data, index) => (
                        <Box key={index} sx={{backgroundColor:'#FFFFFF', padding: '5px', borderRadius: '20px', Width: '100%', margin: 'auto', marginBottom: '20px' }}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} sm={3} md={3} lg={1.1}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
                                        <img
                                            src={image1}  // Replace this with the actual image source
                                            alt={`image${index + 1}`}
                                            style={{ width: '100px', maxWidth: '100%', height: '100px', marginBottom: '10px' }}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={8.8}>
                                    <Box sx={{ marginBottom: { xs: '0px', md: '10px' } }}>
                                        <Typography mb={1} sx={{fontSize:'20px',fontWeight:500}}>
                                            {data.title}
                                        </Typography>
                                        <Typography mb={1} sx={{fontSize:'16px',fontWeight:500}}>
                                            <span style={{ color: '#918EA5', fontSize: '16px' }}>From </span>
                                            <span style={{ color: '#2CB512', fontSize: '16px' }}>{data.artist}</span>
                                        </Typography>
                                        <Typography mb={1} style={{ color: '#848094', fontSize: '16px',fontWeight:500 }}>
                                            {data.date}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={3}md={2.5} lg={2} sx={{ textAlign: 'center' }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Button sx={{ backgroundColor: '#2CB512', borderRadius: '8px', color: '#FFFFFF', width: '96px', height: '44px', marginRight: '8px' }}>
                                            Accept
                                        </Button>
                                        <Button
                                            sx={{
                                                textTransform: 'none',
                                                backgroundColor: 'white',
                                                color: '#2CB512',
                                                border: '1px solid #2CB512',
                                                fontSize: '12px',
                                                borderRadius: '8px',
                                                width: '94px',
                                                height: '44px',
                                            }}
                                        >
                                            Cancel
                                        </Button>
                                    </Box>
                                   
                                </Grid>
                                <Typography sx={{marginLeft:'20px',padding:'5px'}}>
                                        <span style={{ color: '#9995AE', fontSize: '16px',fontWeight:'500' }}>Description:</span>
                                        <span style={{ color: '#424866', fontSize: '16px',fontWeight:'500' }}>{data.description}</span>
                                    </Typography>
                               
                            </Grid>
                        </Box>
                    ))}
                </div>
            </Grid>
        </Grid>
    );
}
