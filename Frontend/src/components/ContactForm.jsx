import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ContactForm() {
  return (
    

    
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '40ch' } }}
      noValidate
      autoComplete="off"   
 >
    
      <TextField id="filled-basic" label="First Name:" size="small" variant="filled"  />
       <TextField id="filled-basic" label="Last Name:" size="small" variant="filled" />
        <TextField id="filled-basic" label="Email:" size="small" variant="filled" />
         <TextField id="filled-basic" label="Mobile:" size="small" variant="filled" />
     <TextField
          id="filled-multiline-static"
          label="How can we help?"
          multiline
          rows={8}
          variant="filled"
        />
    <button type="submit">Submit</button>
     
    </Box>
    
  );
}