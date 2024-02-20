
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { styled } from '@mui/material/styles';

// import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

// const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
//     height: 4,
//     borderRadius: 5,
//     [`&.${linearProgressClasses.colorPrimary}`]: {
//         backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 600],
//     },
//     [`& .${linearProgressClasses.bar}`]: {
//         borderRadius: 5,
//         backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
//     },
// }));
// export default function PlanBillinginfo() {

//     const handleCancelClick = () => {
//         // Handle cancel action
//       };
    
//       const handleSubmitClick = () => {
//         // Handle save action
//       };
//     return (
//         <Box sx={{ flexGrow: 1 }}>
//              <div>
//             <Button
//               className="common-button-white"
//               type="submit"
//               variant="contained"
//               onClick={handleCancelClick}
//               sx={{
//                 width: '167px',
//                 height: '44px',
//                 marginRight: 1,
//                 mt: 3,
//                 mb: 2,
//                 '&:hover': {
//                   color: 'var(--Primary, #2CB512)',
//                   backgroundColor: '#fff',
//                 },
//               }}
//             >
//               Cancel
//             </Button>
//             <Button
//               className="common-button-green"
//               type="submit"
//               variant="contained"
//               onClick={handleSubmitClick}
//               sx={{
//                 width: '121px',
//                 height: '44px',
//                 marginLeft: 1,
//                 mt: 3,
//                 mb: 2,
//                 '&:hover': {
//                   background: 'var(--Primary, #2CB512)',
//                 },
//               }}
//             >
//               Submit
//             </Button>

//           </div>
//             <Grid container spacing={2} columns={16}>
//                 <Grid item xs={4}>
//                     <Typography style={{  color: 'var(--gray-500, #667085)',fontSize:'14px!important',fontWeight:400}}> Note: Click the button to Make changes to your plan or to manage your billing information.</Typography>
//                 </Grid>
//                 <Grid item xs={5} >
//                     <Box sx={{ width: '431px', height: '282px',padding:'20px',display: 'flex',flexDirection: 'column' ,borderRadius:'10px',backgroundColor:'#FFFFFF' }}>
//                         <div>
//                             <Typography variant="h6" component="div" style={{ display: 'inline-block',color:'#101828',fontSize:'16px',fontWeight:600 }}>
//                                 AVALBL Annual Solo Basic Membership
//                             </Typography>
                         
//                             <Typography sx={{marginLeft:'5px', fontSize:'14px',width:'71px',height:'30px' ,display: 'inline-block', backgroundColor: '#E9FAF0', color: '#039855', borderRadius: '10px',padding:'4px',textAlign:'center'}}>
//                             Free Trial
//                             </Typography>
//                             <Typography sx={{ mb: 5,color:'#667085',fontSize:'16px',fontWeight:400, }}>
//                                $ 800 (Annual)
//                             </Typography>

//                             <Typography variant="h5" component="div" sx={{mb: 1,color:'#101828',fontSize:'18px',fontWeight:600}}>
//                               Free Trail End Date 
//                             </Typography>
//                             <Typography sx={{ color:'#667085',fontSize:'16px',fontWeight:'400' }} >
//                                December 2023
//                             </Typography>
//                             </div>
//                         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,}}>
//                         <Button
//                         className="common-button-green"
//                         type="submit"
//                         variant="contained"
//                         sx={{
//                             width: '373px!important',
//                              height: '44px!important',
//                           mt: 6,
//                           '&:hover': {
//                             background: 'var(--Primary, #2CB512)',  
//                           },
//                         }}
//                       >Set up Billing</Button>
//                         </div>
//                     </Box>
//                 </Grid>
//                 <Grid item xs={7}>
//                 <Box sx={{ width:'401px', height:'282px',padding:'20px',display: 'flex',flexDirection: 'column',borderRadius:'10px',backgroundColor:'#FFFFFF'  }}>
//                         <div>
//                             <Typography variant="h5" component="div" style={{ display: 'inline-block',color:'#101828' }}>
//                                 Team size
//                             </Typography>
//                             <Typography sx={{ mb: 1.5,color:'#667085' }} >
//                                 Utilising 12 of 99 AVALBL seats
//                             </Typography>
//                             <BorderLinearProgress variant="determinate" value={10} />
//                         </div>
//                         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 'auto' }}>
//                         <Button
//                         className="common-button-white"
//                         type="submit"
//                         variant="contained"
                      
//                         sx={{
//                             width: '353px',
//                             height: '44px !important',
//                             marginRight: 1,
//                           '&:hover': {
//                             color: 'var(--Primary, #2CB512)',
//                             backgroundColor: '#fff',
//                           },
//                           alignItems: 'center',
//                         }}>
//                           Add Team Members
//                       </Button>
                            
//                         </div>
//                     </Box>

//                 </Grid>
//             </Grid>
//         </Box>
//     );
// }


import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 4,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 600],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

export default function PlanBillinginfo() {

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
        <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={2} columns={16}>
                <Grid item xs={4}>
                    <Typography style={{ color: 'var(--gray-500, #667085)', fontSize: '14px!important', fontWeight: 400 }}> Note: Click the button to Make changes to your plan or to manage your billing information.</Typography>
                </Grid>
                <Grid item xs={5} >
                    <Box sx={{ width: '431px', height: '282px', padding: '20px', display: 'flex', flexDirection: 'column', borderRadius: '10px', backgroundColor: '#FFFFFF' }}>
                        <div>
                            <Typography variant="h6" component="div" style={{ display: 'inline-block', color: '#101828', fontSize: '16px', fontWeight: 600 }}>
                                AVALBL Annual Solo Basic Membership
                            </Typography>

                            <Typography sx={{ marginLeft: '5px', fontSize: '14px', width: '71px', height: '30px', display: 'inline-block', backgroundColor: '#E9FAF0', color: '#039855', borderRadius: '10px', padding: '4px', textAlign: 'center' }}>
                                Free Trial
                            </Typography>
                            <Typography sx={{ mb: 5, color: '#667085', fontSize: '16px', fontWeight: 400, }}>
                                $ 800 (Annual)
                            </Typography>

                            <Typography variant="h5" component="div" sx={{ mb: 1, color: '#101828', fontSize: '18px', fontWeight: 600 }}>
                                Free Trail End Date
                            </Typography>
                            <Typography sx={{ color: '#667085', fontSize: '16px', fontWeight: '400' }} >
                                December 2023
                            </Typography>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Button
                                className="common-button-green"
                                type="submit"
                                variant="contained"
                                sx={{
                                    width: '373px!important',
                                    height: '44px!important',
                                    mt: 6,
                                    '&:hover': {
                                        background: 'var(--Primary, #2CB512)',
                                    },
                                }}
                            >Set up Billing</Button>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={7}>
                    <Box sx={{ width: '401px', height: '282px', padding: '20px', display: 'flex', flexDirection: 'column', borderRadius: '10px', backgroundColor: '#FFFFFF' }}>
                        <div>
                            <Typography variant="h5" component="div" style={{ display: 'inline-block', color: '#101828' }}>
                                Team size
                            </Typography>
                            <Typography sx={{ mb: 1.5, color: '#667085' }} >
                                Utilising 12 of 99 AVALBL seats
                            </Typography>
                            <BorderLinearProgress variant="determinate" value={10} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 'auto' }}>
                            <Button
                                className="common-button-white"
                                type="submit"
                                variant="contained"
                                sx={{
                                    width: '353px',
                                    height: '44px !important',
                                    marginRight: 1,
                                    '&:hover': {
                                        color: 'var(--Primary, #2CB512)',
                                        backgroundColor: '#fff',
                                    },
                                    alignItems: 'center',
                                }}>
                                Add Team Members
                            </Button>
                        </div>
                      
                    </Box>
                  
                </Grid>
            </Grid>
        </Box>
        </>
    );
}
