import React from 'react';
import Sidebar from './SideNavBar';

const HomeScreen = () => {
  return (
    <>
      <div>
        <Sidebar
          classes={{
            drawer: '',
            drawerPaper: '',
            toolbar: '',
          }}
        />
      </div>
    </>
  );
};

export default HomeScreen;
