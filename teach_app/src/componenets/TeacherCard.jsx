import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import '../css/teachcard.css';



export default function MultiActionAreaCard() {
  return (
    <div className = "ContainerCard">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
         
          image="../images/teach_image.webp"
          alt="My Teacher"
        />
        <CardContent> 
          
          <Typography gutterBottom variant="h5" component="div">
          <p>HEC, 1ère année</p>
          <p>Bilingue</p>
          <p>Diplome vérifier</p>
          <p>paris</p>
            Description
          </Typography>
          <Typography variant="body2" color="text.secondary">
           lorem ipsum dolor sit amet, consectetur adipiscing elit.
           lorem impsuma dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button variant="contained" disableElevation>
        Choisir
    </Button>
      </CardActions>
    </Card>
    </div>
  );
}
