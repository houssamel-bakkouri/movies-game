import Container from '@mui/material/Container';
import "../pages/goStyle.css";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ButtonGroup from '@mui/material/ButtonGroup';
import { ThemeProvider } from '@mui/material/styles';
import themeHolly from '../api/Palette';
import { Link } from 'react-router-dom';


function GameOver({score}) {
    const [isSaveVisible, setSaveVisible] = useState(true)
    const [userName, setUsername] = useState('')

    function handleSave() {
        let scores = JSON.parse(localStorage.getItem('scores'))
        scores.push({name : userName, score : score})
        scores.sort((a, b) => {
            let comparison = 0;
            if (a.score < b.score) {
              comparison = 1;
            } else if (a.score > b.score) {
              comparison = -1;
            }
            return comparison;
        })
        localStorage.setItem('scores', JSON.stringify(scores))
    }

    return(
        <Container   justifyContent="center"  alignItems="center"  maxWidth="sm" sx={{width :"65%", marginTop : '15rem',border:"1px solid grey" ,boxShadow: '1px 2px 9px grey',padding: '1em' }}>
            <Typography align="center" variant="h3" component="div">
                Game Over
            </Typography>
            <Typography align="center" variant="subtitle1" component="div">
                Your score is : {score}
            </Typography>
            {isSaveVisible ? 
               <Stack spacing={2} justifyContent="center"  alignItems="center">
                    <Typography align="center" variant="h4" component="div">
                        Do you wanna save your score ?
                    </Typography>
                    <ThemeProvider theme={themeHolly}>
                        <ButtonGroup variant="text" aria-label="large button group" size="large">
                            <Button color='blue'onClick={()=>setSaveVisible(false)} >Yes</Button>
                            <Link to="/" style={{textDecoration:"none" }}> <Button color="saumon">NO</Button></Link>
                        </ButtonGroup>
                    </ThemeProvider>
               </Stack> 
            :
                <Stack spacing={2} justifyContent="center"  alignItems="center">
                    <TextField value={userName} onChange={e => setUsername(e.target.value)} align="center" id="outlined-basic" label="NAME" variant="outlined" sx={{width :"65%", marginTop : '2rem'  }} />
                    <Link to="/scores" style={{textDecoration:"none" }}>
                    <Button variant="contained"  size="large" color='success' onClick={handleSave}>Save Score</Button>
                    </Link>
                </Stack> 
        }
           
        </Container>
    )

}
export default GameOver