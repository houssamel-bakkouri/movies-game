import React, {useState} from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ThemeProvider } from '@mui/material/styles';
import themeHolly from '../../api/Palette';

function HealthBar({hp}) {
    const [maxHp, setMaxhp] = useState(hp)
  return (
    <>
     <ThemeProvider theme={themeHolly}>
        {Array.from(Array(hp)).map((x, index) => <FavoriteIcon sx={{ fontSize: 40 }} color="rouge" key={index} />)}
        {Array.from(Array(maxHp - hp)).map((x, index) => <FavoriteBorderIcon sx={{ fontSize: 40 }} color="rouge" key={index} />)}</ThemeProvider>
    </>
  )
}

export default HealthBar