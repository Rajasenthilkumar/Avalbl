/* eslint-disable no-undef */
import React from 'react';
import '../../../Assets/css/HomeScreen.css';
import { Box, Button, Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

const PaymentPlan = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        padding: '200px 0px',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: '1 0 0',
        alignSelf: 'stretch',
        backgroundColor: '#f7f8f8',
      }}>
      <Box
        sx={{
          borderRadius: '24px',
          background: 'var(--White, #FFF)',
          width: '400px',
        }}>
        <Box sx={{ padding: '50px', paddingTop: '40px' }}>
          <Typography
            style={{
              margin: '0px 0px 0px 0px',
              fontSize: '22px',
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'var(--green)',
            }}>
            Basic
          </Typography>
          <Typography
            style={{
              margin: '0px 0px 0px 0px',
              fontSize: '14px',
              fontWeight: 600,
              textAlign: 'center',
              color: '#0000005c',
            }}>
            Get listed and get hired
          </Typography>

          <Typography
            variant="h3"
            style={{
              margin: '20px 0px 5px 0px',
              fontWeight: 600,
              textAlign: 'center',
              color: '##000000d9',
            }}>
            Free
          </Typography>
          <Typography
            style={{
              margin: '0px 0px 0px 0px',
              fontSize: '14px',
              fontWeight: 600,
              textAlign: 'center',
              color: '#0000005c',
            }}>
            Invition code required
          </Typography>
          <Button
            className="common-button-white"
            type="submit"
            variant="outlined"
            sx={{ mt: 3, mb: 2, ml: 2, textTransform: 'none', width: '300px' }}>
            Get started
          </Button>

          <ul style={{ fontSize: '16px', fontWeight: 600, color: '#00000075', lineHeight: '35px', marginLeft: '-20px' }}>
            <li style={{ listStyleType: 'none' }}>
              <DoneIcon style={{ color: 'var(--green)', verticalAlign: 'middle', fontSize: '18px' }} /> Detailed, searchable
              profile
            </li>
            <li style={{ listStyleType: 'none' }}>
              <DoneIcon style={{ color: 'var(--green)', verticalAlign: 'middle', fontSize: '18px' }} /> Availability
              management
            </li>
            <li style={{ listStyleType: 'none' }}>
              <DoneIcon style={{ color: 'var(--green)', verticalAlign: 'middle', fontSize: '18px' }} /> Calendar system
            </li>
            <li style={{ listStyleType: 'none' }}>
              <DoneIcon style={{ color: 'var(--green)', verticalAlign: 'middle', fontSize: '18px' }} /> Receive and message
              premium users
            </li>
            <li style={{ listStyleType: 'none', marginBottom: '110px' }}>
              <DoneIcon style={{ color: 'var(--green)', verticalAlign: 'middle', fontSize: '18px' }} /> Receive and accept
              project requests
            </li>
          </ul>
        </Box>
      </Box>

      <Box
        sx={{
          borderRadius: '24px',
          background: 'var(--White, #FFF)',
          width: '400px',
          marginLeft: '20px',
        }}>
        <Box sx={{ padding: '50px', paddingTop: '40px' }}>
          <Typography
            style={{
              margin: '0px 0px 0px 0px',
              fontSize: '22px',
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'var(--green)',
            }}>
            Premium
          </Typography>
          <Typography
            style={{
              margin: '0px 0px 0px 0px',
              fontSize: '14px',
              fontWeight: 600,
              textAlign: 'center',
              color: '#0000005c',
            }}></Typography>

          <Typography
            variant="h3"
            style={{
              margin: '20px 0px 5px 0px',
              fontWeight: 600,
              textAlign: 'center',
              color: '##000000d9',
            }}>
            $49
          </Typography>
          <Typography
            style={{
              margin: '0px 0px 0px 0px',
              fontSize: '14px',
              fontWeight: 600,
              textAlign: 'center',
              color: '#0000005c',
            }}>
            Per month, billed annually
          </Typography>
          <Button
            className="common-button-green"
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, ml: 2, textTransform: 'none', width: '300px' }}>
            Start 30-day Free Trail
          </Button>

          <ul style={{ fontSize: '16px', fontWeight: 600, color: '#00000075', lineHeight: '35px', marginLeft: '-20px' }}>
            <li style={{ listStyleType: 'none' }}>
              <DoneIcon style={{ color: 'var(--green)', verticalAlign: 'middle', fontSize: '18px' }} /> All features of Basic
              profile plus:
            </li>
            <li style={{ listStyleType: 'none' }}>
              <DoneIcon style={{ color: 'var(--green)', verticalAlign: 'middle', fontSize: '18px' }} /> Advanced talent
              search tools
            </li>
            <li style={{ listStyleType: 'none' }}>
              <DoneIcon style={{ color: 'var(--green)', verticalAlign: 'middle', fontSize: '18px' }} /> Roster management and
              organization
            </li>
            <li style={{ listStyleType: 'none' }}>
              <DoneIcon style={{ color: 'var(--green)', verticalAlign: 'middle', fontSize: '18px' }} /> Add and message Basic
              members
            </li>
            <li style={{ listStyleType: 'none' }}>
              <DoneIcon style={{ color: 'var(--green)', verticalAlign: 'middle', fontSize: '18px' }} /> Share roster members
              and notes with teams (up to 3 members)
            </li>
            <li style={{ listStyleType: 'none', marginBottom: '60px' }}>
              <DoneIcon style={{ color: 'var(--green)', verticalAlign: 'middle', fontSize: '18px' }} /> Send and manage
              booking requests
            </li>
          </ul>
        </Box>

        {/* <Box sx={{ padding: '50px', paddingTop: '40px' }}>
          <Typography
            style={{
              margin: '0px 0px 0px 0px',
              fontSize: '22px',
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'var(--green)',
            }}>
            Premium
          </Typography>

          <Typography
            variant="h3"
            style={{
              margin: '20px 0px 5px 0px',
              fontWeight: 600,
              textAlign: 'center',
              color: '##000000d9',
            }}>
            $49
          </Typography>
          <Typography
            style={{
              margin: '0px 0px 0px 0px',
              fontSize: '14px',
              fontWeight: 600,
              textAlign: 'center',
              color: '#0000005c',
            }}>
            Per month, billed annually
          </Typography>
          <Button
            className="common-button-green"
            type="submit"
            variant="contained"
            sx={{ mt: 6, mb: 2, ml: 2, textTransform: 'none', width: '300px' }}>
            Start 30-day Free Trail
          </Button>

          <ul style={{ fontSize: '16px', fontWeight: 600, color: '#00000075', lineHeight: '35px', marginLeft: '-20px' }}>
            <li style={{ listStyleType: 'none' }}>
              <DoneIcon style={{ color: 'var(--green)', verticalAlign: 'middle', fontSize: '18px' }} /> All features of Basic
              profile plus:
            </li>
            <li style={{ listStyleType: 'none' }}>
              <DoneIcon style={{ color: 'var(--green)', verticalAlign: 'middle', fontSize: '18px' }} /> Advanced talent
              search tools
            </li>
            <li style={{ listStyleType: 'none' }}>
              <DoneIcon style={{ color: 'var(--green)', verticalAlign: 'middle', fontSize: '18px' }} /> Roster management and
              organization
            </li>
            <li style={{ listStyleType: 'none' }}>
              <DoneIcon style={{ color: 'var(--green)', verticalAlign: 'middle', fontSize: '18px' }} /> Add and message Basic
              members
            </li>
            <li style={{ listStyleType: 'none' }}>
              <DoneIcon style={{ color: 'var(--green)', verticalAlign: 'middle', fontSize: '18px' }} /> Share roster members
              and notes with teams (up to 3 members)
            </li>
            <li style={{ listStyleType: 'none' }}>
              <DoneIcon style={{ color: 'var(--green)', verticalAlign: 'middle', fontSize: '18px' }} /> Send and manage
              booking requests
            </li>
          </ul>
        </Box> */}
      </Box>
    </Box>
  );
};

export default PaymentPlan;
