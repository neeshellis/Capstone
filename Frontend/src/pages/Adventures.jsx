// import BitcoinRates from "../components/BitcoinRates";

// export default function BitcoinPage() { 
//  return (
//  <div className="BitcoinPage">

//  <h3>Bitcoin Calculator!</h3>
//  </div>
//  )
// }


import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export default function AdventuresPage() {
  return (
    <div>
      
      <Container sx={{ padding: 5, marginTop: 4, backgroundColor: 'rgba(225, 227, 211, 0.5)', fontWeight: 600, 
        minHeight: '5vh', maxWidth: '70%', borderRadius: 4 
     }}> 
      <Typography variant="p" component="p" sx={{ color:'#333815'}}>
       The Wanaka Playground
      </Typography>
     </Container>
     
    </div>
  );
}