import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { MenuItem } from '@mui/material';
import Menu from '@mui/material/Menu';

import { ThemeProvider } from '@mui/material/styles';
import themeHolly from '../../api/Palette';
export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <ThemeProvider theme={themeHolly}>
            <Link to={"/"} style={{textDecoration:"none" }}>
                <Button color="blanc">Home</Button>
            </Link>
           
            <Link to={"/scores"} style={{textDecoration:"none" }}>
                <Button color="blanc">Score Table</Button>
            </Link>
            </ThemeProvider>
        </Toolbar>
      </AppBar>
    </Box>
  );
}