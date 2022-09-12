import React from 'react'
import {AppBar,Toolbar,Typography} from "@mui/material";
const Navbar = () => {
  return (
    <AppBar position='fixed' mb={4} color = "inherit">
        <Toolbar>
        <Typography variant="h6" noWrap component="div">
            Covid -Tracker
          </Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar