import { useState, useContext, useEffect } from 'react';
import { useUserContext } from "../context/UserContext";
import { MyThemeContext } from "../context/MyThemeProvider";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import RegisterForm from './RegisterForm';

export default function ProfileForm({username, password, firstname, lastname, email, mobile}) {
  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    mobile: ''
  });

  useEffect(() => {
    fetch('http://localhost:3000/user')
      .then(res => res.json())
      .then(data => {
        const user = data[0];
        setFormData({
          username: user.username,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          mobile: user.mobile
        });
      });
  }, )


return (
<div className="LoginForm componentBox"
           style={{ background: theme.background, 
           color: theme.foreground, 
           justifyContent: 'center', 
           margin: '20px auto', 
           maxWidth: '70%', 
           minHeight: '5vh',  
           padding: 16, 
           borderRadius: 12 }}>
       <form onSubmit={handleSubmit} noValidate>
       <div className="formRow">
             <TextField 
             type="text" 
             variant="filled" 
             label="Username:" 
             value={username} 
             name="username"
            onChange={(e) => setUserName(e.target.value)} required fullWidth/>
        </div>
        <br/>
        <div className="formRow">
          < TextField 
          type="password" 
          variant="filled" 
          label="Password" 
          value={password} 
          name="password"
          onChange={(e) => setUserPassword(e.target.value)} required fullWidth/>
        </div>
        <br/>
        <div className="formRow">
             <TextField 
             type="text" 
             variant="filled" 
             label="First Name:" 
             value={firstname} 
             name="firstname"
            onChange={(e) => setUserFirstname(e.target.value)} required fullWidth/>
        </div>
        <br/>
        <div className="formRow">
            < TextField 
             type="text" 
             variant="filled" 
             label="Last Name:" 
             value={lastname} 
             name="lastname"
            onChange={(e) => setUserLastname(e.target.value)} required fullWidth/>
        </div>
        <br/>
           <div className="formRow">
            < TextField 
            type="tel" 
            variant="filled" 
            label="Mobile:" 
            value={mobile} 
            name="mobile"
            onChange={(e) => setUserMobile(e.target.value)} required fullWidth/>
        </div>
        <br/>
           <div className="formRow">
           < TextField 
           type="text" 
           variant="filled" 
           label="Email:" 
           value={email} name="email"
           onChange={(e) => setUserEmail(e.target.value)} required fullWidth/>
        </div>
        <br/>
        <button type="submit">Update</button>
        <p aria-live="polite">{submitResult}</p>
      </form>
    </div>
  );
}

