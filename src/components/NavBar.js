import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react';


const NavBar = ({ currentStep }) => {
  const navbarTitles = ['Title 0', 'Enter User Details', 'Enter Personal Details', 'Confirm your responses', 'Success!',]
  const navbarTitle = navbarTitles[currentStep];
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography style={{ textAlign: 'center' }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {navbarTitle}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default NavBar