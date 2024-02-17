import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import BookingContracts from '../Message/BookingContracts';
import PreviousContracts from '../Message/PreviousContracts';
import OngoingContracts from '../Message/OngoingContracts';
import Cancelledcontracts from '../Message/Cancelledcontracts';

const titles = ['Booking Contracts', 'Previous Contracts', 'Ongoing Contracts','Cancelled contracts'];

export default function CustomCard() {
    const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

    return (
        <Grid container spacing={2} sx={{ backgroundColor: '#F7F8F8', minHeight: '100vh', paddingTop: '30px' }}>
            <Grid item xs={12} sm={12} md={3} lg={2} sx={{ padding: '10px', borderRight: '1px solid #C3BFD7', }}>
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
                        onClick={() => setSelectedTitle(title)}
                    >
                        <Typography sx={{fontSize:'16px',fontWeight:500,}}>{title}</Typography>
                    </div>
                ))}
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={10} sx={{ height: '100%', padding: '10px' }}>
               {selectedTitle === 'Booking Contracts' && <BookingContracts />}
               {selectedTitle === 'Previous Contracts' && <PreviousContracts />}
               {selectedTitle === 'Ongoing Contracts' && <OngoingContracts />}
               {selectedTitle === 'Cancelled contracts' && <Cancelledcontracts />}
            </Grid>
        </Grid>
    );
}
