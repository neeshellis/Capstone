
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export default function BookingPage() {
  return (
    <div>
      
      <Container sx={{ padding: 5, marginTop: 4, backgroundColor: 'rgba(225, 227, 211, 0.5)', fontWeight: 600, 
        minHeight: '5vh', maxWidth: '70%', borderRadius: 4 
     }}> 
      <Typography variant="p" component="p" sx={{ color:'#333815'}}>
       Book to Stay
      </Typography>
     </Container>
     
    </div>
  );
}