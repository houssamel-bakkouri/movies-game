import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import themeHolly from '../../api/Palette';
export default function AnswerButton({handleClick}) {
  return (
    <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled elevation buttons"
    >

    {/*<CheckIcon  color="secondary" />*/}        
    <ThemeProvider theme={themeHolly}>
      
      <Button value={false} onClick={(e)=>handleClick(e)} color="rouge"> <CloseIcon  color="blanc"/></Button>
      <Button value={true} onClick={(e)=>handleClick(e)} color="blue"><CheckIcon color="blanc"/></Button>
    </ThemeProvider>
    </ButtonGroup>
  );
}
