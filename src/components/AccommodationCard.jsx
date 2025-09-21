import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// In your AccommodationCard.jsx
export default function AccommodationCard({title, description, image, price}) {
    console.log(image)
  return (
    <Card sx={{ 
      maxWidth: '100%', 
      height: '100%', 
      display: 'flex',
      flexDirection: 'column'
    }}>
      
      <CardContent sx={{ 
        flexGrow: 1, 
        display: 'flex', 
        flexDirection: 'column' 
      }}>
        <Typography gutterBottom variant="p" component="div">
         {title} 
        </Typography>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={image}
        />
        <Typography variant="body2" sx={{ flexGrow: 1 }}>
          {description}
        </Typography>
        <br/>
        <Typography variant="h6" sx={{ color: '#333815', fontWeight: 600 }}>
          {price}
        </Typography>
      </CardContent>

      <CardActions>
        {/* <Button size="small">Book</Button> */}
      </CardActions>
    </Card>
  );
}