import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import image1 from '../../../Assets/Images/Frame 141.png'; // Replace this with the actual import
import { Typography, Button, useMediaQuery } from '@mui/material';

interface StaticData {
    title: string;
    artist: string;
    date: string;
    description: string;
}

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
export default function BookingContracts() {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <div>
            {staticData.map((data, index) => (
                <Box key={index} sx={{ backgroundColor: '#FFFFFF', padding: '10px', borderRadius: '20px', Width: '100%', marginBottom: '20px' }}>
                    <Grid container >
                        <Grid item xs={12} sm={2.5} md={2.5} lg={1.1}>
                            <Box sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
                                <img
                                    src={image1}
                                    alt={`image${index + 1}`}
                                    style={{ width: '100px', maxWidth: '100%', height: '100px', marginBottom: '10px' }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={7} md={6} lg={8.8} sx={{ padding: '10px' }} alignItems="center">
                            <Box >
                                <Typography mb={1} sx={{ fontSize: '20px', fontWeight: 500 }}>
                                    {data.title}
                                </Typography>
                                <Typography mb={1} sx={{ fontSize: '16px', fontWeight: 500 }}>
                                    <span style={{ color: '#918EA5', fontSize: '16px' }}>From </span>
                                    <span style={{ color: '#2CB512', fontSize: '16px' }}>{data.artist
                                    }</span>
                                </Typography>
                                <Typography mb={1} style={{ color: '#848094', fontSize: '16px', fontWeight: 500 }}>
                                    {data.date}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={2.5} md={2.5} lg={2} sx={{ display: 'flex', padding: '10px', justifyContent: isMobile ? 'flex-start' : 'flex-end' }}>
                            <Box >
                                <Button
                                    className="common-button-green"
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        width: '87px',
                                        height: '32px',

                                        '&:hover': {
                                            background: 'var(--Primary, #2CB512)',
                                        },
                                    }}
                                >
                                    Pending
                                </Button>
                            </Box>

                        </Grid>
                        <Typography sx={{ padding: '10px' }}>
                            <span style={{ color: '#9995AE', fontSize: '16px', fontWeight: '500' }}>Description:</span>
                            <span style={{ color: '#424866', fontSize: '16px', fontWeight: '500' }}>{data.description}</span>
                        </Typography>
                    </Grid>
                </Box>
            ))}
        </div>
    )
}
