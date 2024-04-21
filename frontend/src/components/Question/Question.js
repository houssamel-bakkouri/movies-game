import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Question({data, questionType}) {
   return (
    <Card sx={{ maxWidth: 340}} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="500"
        image={data.picture}
        sx = {{maxHeight : 440}}
      />
      <CardContent>
        <Typography variant="h5">
        {data.name}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          {questionType === 'actor' ? 'Actor' : 'Movie'}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Question