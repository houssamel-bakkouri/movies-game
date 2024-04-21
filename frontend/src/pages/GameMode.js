import React, {useState, useEffect} from 'react'
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import {MovieAPI} from '../api/MovieAPI'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField ,Box} from '@mui/material';
import { RestartAlt } from '@mui/icons-material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
//5.10.12
const GameMode = ({setFilters}) => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [genres, setGenres] = useState([]);
  const [startDate,setStartDate]=useState('1980-01-02');
  const [endDate,setEndDate]=useState('2022-11-22');

  const movieAPI = new MovieAPI();

  useEffect(() => {
    const promiseGenres = movieAPI.getGenres();
    promiseGenres.then(genres => {
      setGenres(genres)
    })
  }, [])

  function reset(){
    setSelectedGenre('Genre')
    setStartDate('');
    setEndDate('');
  }
  const handleChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  return (
    <div>
      <div style={{marginTop:"10%"}}></div>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
       {/*Game modes */} 
        <Container  maxWidth="sm" sx={{ m: 4,border:"1px solid grey" ,boxShadow: '1px 2px 9px grey',padding: '1em', }}>
           <Container maxWidth="sm" sx={{ m: 1 }}>
              Simple Game (Ranks )
           </Container>   
           <div style={{marginTop:"10%"}}></div>
          <Link to={"/Quiz"} style={{ textDecoration: "none" }}>
            <Button variant="contained" size="large" onClick={()=>setFilters({genreId : null})}>Start the game</Button>
          </Link> 
          <div style={{marginTop:"19%"}}></div>

        </Container>
        
        
        <Container maxWidth="sm" sx={{ m: 4,border:"1px solid grey" ,boxShadow: '1px 2px 9px grey',padding: '1em', }}>
          Game with Filters
          <Button variant="contained" size="small" onClick={reset} sx={{marginLeft : '10px'}}  >
            <RestartAltIcon />
          </Button>
          <Stack 
          spacing={2} 
          >
             <Box sx={{ minWidth: 120, m : 4 }}>
              <FormControl fullWidth>
                <InputLabel id="select-genre-label">Genre</InputLabel>
                <Select
                  labelId="select-genre-label"
                  id="select-genre"
                  value={selectedGenre}
                  label="Genre"
                  onChange={handleChange}
                >
                  {genres.map(genre => <MenuItem value={genre.id}>{genre.name}</MenuItem> )}
                </Select>

              </FormControl>
            </Box>
            <Container maxWidth="sm" sx={{ m: 4 }}>
              From <input  type="date" value={startDate} min ='1980-01-01' max={endDate} onChange={(newDate=>{setStartDate(newDate.target.value)})} /> to <input  type="date" value={endDate} min ={startDate} max={endDate} onChange={(newDate=>{setEndDate(newDate.target.value)})}/>
            </Container>
            <Link to={"/Quiz"} style={{ textDecoration: "none" }}>
                <Button variant="contained" size="large" onClick={()=>setFilters({genreId : selectedGenre,startDate:startDate,endDate:endDate})}  >Start the game</Button>
            </Link>
          </Stack>
        </Container>
        
      </Stack>
    </div>
  )
}

export default GameMode