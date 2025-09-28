
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


export default function HomePage() { 
  return (
    <div>
       <div>
       <Typography variant="h4" component="h4" sx={{ marginTop: 3, padding: 6, color: '#333815', textShadow: '2px 3px 5px rgb(248, 243, 243)'}}>
      Wānaka Magic
      </Typography>
      </div>
      <Container sx={{ fontStyle: 'italic', padding: 2, marginTop: .5, backgroundColor: 'rgba(225, 227, 211, 0.5)', 
        minHeight: '5vh', maxWidth: '70%', borderRadius: 4 
     }}> 
      <Typography variant="p" component="p" sx={{ color: 'black'}}>
       Where regenerative tourism is alive and flourishing. We welcome you to explore with the locals, the magic behind this beautiful corner of the world.
      </Typography>
     </Container>
     </div>
  )
}


    