
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


export default function HomePage() { 
  return (
    <div>
       <div>
       <Typography variant="h4" component="h4" sx={{ padding: 10, color: '#333815', textShadow: '2px 3px 5px rgb(248, 243, 243)'}}>
      Experience Wānaka! 
    
      </Typography>
      </div>

      <Container sx={{ padding: 5, marginTop: 4, backgroundColor: 'rgba(225, 227, 211, 0.5)', 
        minHeight: '5vh', maxWidth: '70%', borderRadius: 4 
     }}> 
      <Typography variant="p" component="p" sx={{ color: 'black'}}>
       Where regenerative tourism is alive, offering a unique playground of community and nature thriving as one. Come and explore with the locals who are excited to share this beautiful corner of the world.
      </Typography>
     </Container>
     </div>
  )
}


    