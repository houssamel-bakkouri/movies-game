import React, {useState, useEffect} from 'react'
import Question from '../components/Question/Question'
import AnswerButton from '../components/Question/AnswerButton'
import HealthBar from '../components/Question/HealthBar';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import {MovieAPI} from '../api/MovieAPI'
import GameOver from './GameOver';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Quiz({filters}) {
    const [actor, setActor] = useState({picture : '', name: ''});
    const [movie, setMovie] = useState({picture : '', name : ''});
    const [score, setScore] = useState(0);
    const [hp, setHp] = useState(3);
    const [display, setDisplay] = useState(false)

    /**
     * Used to ckeck if the generated answer is correct or false
     */
    const [isCorrect, setIsCorrect] = useState(false);

    const [moviePageNumber, setMoviePageNumber] = useState(1)
    const [actorPageNumber, setActorPageNumber] = useState(1)

    const movieAPI = new MovieAPI();

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }

    const InitQuestion = () => {
      let isQuestionCorect = Math.random() > 0.5 ? true : false;
      isQuestionCorect ? InitCorrestQuestion() : InitFalseQuestion();
      setIsCorrect(isQuestionCorect)
    }

    const InitCorrestQuestion = () => {
      const promiseMovies =  movieAPI.getPopularMovies(moviePageNumber, filters.genreId,filters.startDate,filters.endDate);
      promiseMovies.then( movies => {
          let movie = movies[Math.floor(getRandomArbitrary(0, movies.length))]

          const promisecasts = movieAPI.getCastsOfMovie(movie.id)
          promisecasts.then(casts =>{
            let cast = null
            do{
               cast = casts[Math.floor(getRandomArbitrary(0, casts.length))]
            }while(cast.profile_path === null)
              setMovie({picture : process.env.REACT_APP_IMAGE_URL + movie.poster, name : movie.title})
              setActor({picture : process.env.REACT_APP_IMAGE_URL + cast.profile_path, name : cast.name})
              
          })
      })
      setMoviePageNumber(moviePageNumber + 1)
    }

    const InitFalseQuestion = () => {
      const promiseMovies = movieAPI.getPopularMovies(moviePageNumber, filters.genreId, filters.genreId,filters.startDate,filters.endDate);
      promiseMovies.then(movies => {
        var movie = movies[Math.floor(getRandomArbitrary(0, movies.length))]
        setMovie({picture : process.env.REACT_APP_IMAGE_URL + movie.poster, name : movie.title})
      })

      const promiseActors = movieAPI.getPopularActors(actorPageNumber)
      promiseActors.then(actors => {
        var actor = actors[Math.floor(getRandomArbitrary(0, actors.length))]
        setActor({picture :process.env.REACT_APP_IMAGE_URL + actor.image, name : actor.name })
      })

      
      setMoviePageNumber(moviePageNumber + 1)
      setActorPageNumber(actorPageNumber + 1)
    }
    const handleClick = (e) => {

      const answer =  (e.target.value === 'true')
      if(answer === isCorrect)
        setScore(score + 1);
      else
        {
          if(hp === 1) {
            // To do : go to game over page
            //console.log(hp,"//");
            setDisplay(true);
         }
          setHp(hp - 1)
        }

      InitQuestion()
    }

    useEffect(() => {
      console.log(filters)
        InitQuestion()
      }, [])
  return (
    <>
      {display ?( <GameOver score={score}/>):(
        <Box sx={{ flexGrow: 1 }} >
        <Grid container spacing={0}  sx={{margin :'10px'}}>
        <Grid xs={3} >
              <h3 id='score-style'><EmojiEventsIcon /> Score : {score}</h3>
          </Grid><Grid xs={3}>
            
            </Grid>
          
          
          <Grid xs={3}>
          </Grid>
          <Grid xs={3}>
            <HealthBar hp={hp} />
          </Grid>
          <Grid xs={2.65}>
            
          </Grid>
          <Grid xs={4}>
            
                <Question data={actor} 
                questionType = 'actor'/>
           
          </Grid>
          <Grid xs={4} >
           
                <Question data={movie} 
                questionType = 'movie'/>
           
          </Grid>
          <Grid xs={2}>

          </Grid>
          <Grid xs={12}>
            <Item>
                <AnswerButton handleClick={(e)=>handleClick(e)}/>
            </Item>
          </Grid>
        </Grid>
      </Box>)}
        
  </>
  )
}

export default Quiz