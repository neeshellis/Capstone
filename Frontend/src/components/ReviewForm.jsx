import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ReviewsForm() {
  return (
    
    
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '40ch' } }}
      noValidate
      autoComplete="off"  
        >
<button type="submit">LOGIN</button>
<br></br>
 
    <TextField id="filled-basic" label="Name:" size="small" variant="filled"  />
       <TextField id="filled-basic" label="Date of your Stay:" size="small" variant="filled" />
              <TextField id="filled-basic" label="Name of accommodation:" size="small" variant="filled" />
    
     <TextField
          id="filled-multiline-static"
          label="Thank you leaving a review:"
          multiline
          rows={8}
          variant="filled"
        />
    <button type="submit">Submit</button>
     
    </Box>
    
  );
}