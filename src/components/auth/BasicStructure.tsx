import React from 'react';
import logo from '../../Assets/Images/logo.png';
import login01 from '../../Assets/Images/login01.png';
import login02 from '../../Assets/Images/login02.png';
import favicon from '../../../src/Assets/Images/Icon.png';
import withRouter from '../Router/withRouter';
import { Box, Grid } from '@mui/material';
import '../../Assets/css/Common.css';
import { Outlet } from 'react-router-dom';
import back from '../../Assets/Images/back.png';

class BasicStructure extends React.Component {
  Url: boolean;
  constructor(props: any) {
    super(props);
    this.state = {};

    this.Url = window.location.href.includes('forget-password');
  }

  render() {
    return (
      <Box sx={{ backgroundColor: '#f7f8f8', height: '850px' }}>
        <Box
          sx={{
            paddingTop: '60px',
            justifyContent: 'flex-start',
            marginLeft: '50px',
          }}>
          <img src={logo} alt="logo" />
        </Box>
        <Grid container sx={{ mt: '50px' }}>
          <Grid item lg={4} xs={2}>
            <img src={login01} alt="login01" />
          </Grid>
          <Grid item lg={5} xs={4} sx={{ mt: '30px' }}>
            {this.Url ? (
              <Grid
                sx={{
                  paddingBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}>
                <a href="/login/sign-in" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                  <img src={back} alt="back" />
                  <span className="lable-name" style={{ marginLeft: '8px', color: '#000' }}>
                    Back
                  </span>
                </a>
              </Grid>
            ) : (
              ''
            )}
            <img src={favicon} alt="favicon" />
            <Outlet />
          </Grid>
          <Grid item lg={2} xs={2}>
            <img src={login02} alt="login02" />
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default withRouter(BasicStructure);
