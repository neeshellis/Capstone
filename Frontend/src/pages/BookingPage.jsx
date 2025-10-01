
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/Select';
import { useState } from 'react';
import BookingCalender from '../components/BookingCalender';

export default function BookingPage() {

  const [accommodation, setAccommodation] = useState('');
  const [guests, setGuests] = useState('');
  const [datein, setDateIn] = useState('');
  const [dateout, setDateOut] = useState('');
  const [price, setPrice] = useState('');

  return (
    <div>
      <Container sx={{ padding: 5, marginTop: 10, backgroundColor: 'rgba(242, 243, 232, 0.9)', fontWeight: 600, 
        minHeight: '5vh', maxWidth: '70%', borderRadius: 2
     }}> 
      <Typography variant="p" component="p" sx={{ color:'#333815'}}>
       Thank you for choosing to stay with us.  Please complete your booking details below.
      </Typography>
      <br/>
        <FormControl  sx={{ width: '100%' }}>
        <InputLabel>Accommodation</InputLabel>
        <Select
          value={accommodation}
          label="Accommodation"
          onChange={(e) => setAccommodation(e.target.value)}
        >
          <MenuItem value="valleyinn">Valley Inn</MenuItem>
          <MenuItem value="bunkhouse">The BunkHouse</MenuItem>
          <MenuItem value="cottage">The Cottage</MenuItem>
        </Select>
      </FormControl>
      <br/><br/>
       <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Number of Guests</InputLabel>
        <Select
          value={guests}
          label="Number of Guests"
          onChange={(e) => setGuests(e.target.value)}
        >
          <MenuItem value={1}>1 Guest</MenuItem>
          <MenuItem value={2}>2 Guests</MenuItem>
          <MenuItem value={3}>3 Guests</MenuItem>
          <MenuItem value={4}>4 Guests</MenuItem>
          <MenuItem value={5}>5+ Guests</MenuItem>
        </Select>
        <br/>
      </FormControl>   
       <br/>
       <BookingCalender/>
     </Container>
    </div>
  );
}