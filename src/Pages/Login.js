import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom';

import { TextField, Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Login = () => {

  const GlassTextfield = styled(TextField)({
    '& .MuiInputBase-root': {
      background: 'rgba(255, 255, 255, 0.2)',
      boxShadow: '0 4px 4px rgba(0, 0, 0, 0.2)',
    },
    '& label.Mui-focused': {
      color: 'rgba(255, 255, 255, 0.6)',
    },
    '& label.MuiInputLabel-root': {
      color:'rgba(255, 255, 255, 0.6)',
      fontFamily: 'Merriweather',
    },
    '& .MuiOutlinedInput-root': {
      color: 'white',
      '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.2)',
        color: 'rgba(255, 255, 255, 0.2)'
      },
      '& label': {
        color: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.4)',
      },
      '&.Mui-focused fieldset': {
        border: '2px solid rgba(255, 255, 255, 0.4)',
      },
    },
  });

  const GlassButton = styled(Button)({
    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.2)',
    textTransform: 'none',
    fontSize: 20,
    fontFamily: 'Merriweather',
    padding: '8px 24px',
    border: '1px solid rgba(164, 225, 255, 0.3)',
    lineHeight: 1.5,
    background: 'rgba(164, 225, 255, 0.4)',
    borderRadius: '4px',
    backdropFilter: 'blur(5px)',
    '&:hover': {
      background: 'rgba(164, 225, 255, 0.55)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      boxShadow: '0 4px 4px rgba(0, 0, 0, 0.4)',
    },
    '&:active': {
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
      background: 'rgba(164, 225, 255, 0.55)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
    },
    '&:focus': {
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
    },
  });

  return (
    <div>
      <Navbar />
      <div id="login-body">
        <div id="login-form" className='glass'>
          <h3 style={{marginTop: 0}}>Login</h3>
          <div style={{height: '100%'}}>
            <Grid container
                  spacing={1.5}>
              <Grid item xs={12}>
                <GlassTextfield
                  fullWidth
                  required
                  id="outlined-required"
                  label="Username/Email"
                />
              </Grid>
              <Grid item xs={12}>
                <GlassTextfield
                  required
                  fullWidth
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
                <p 
                  id='pass-forget'
                  style={{margin: '4px 0', fontSize: '12px', color: '#fff8'}}>Forgot Password?</p>
              </Grid>
              
            </Grid>
            <div style={{bottom: '40px', position: 'absolute', width: 'calc(100% - 80px'}}>
              <GlassButton component={Link} to="/Dashboard" variant="contained" fullWidth>Login</GlassButton> 
            </div>
            
            
            
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login