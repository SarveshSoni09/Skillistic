import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    
  return (
    <AppBar position='static' className='navbar' style={{backgroundColor: '#0000', borderRadius: '0 0 16px 16px', minHeight: '80px'}}>
        {/* <CssBaseLine /> */}
        <Toolbar>
        <Typography variant="h3" className='main-logo'>
          Skillistic
        </Typography>
          <div className='navlinks'>
            <Link to="/" className='navlink'>
              Home
            </Link>
            <Link to="/" className='navlink'>
              About
            </Link>
            <Link to="/Login" className='navlink'>
              Log In
            </Link>
            <Link to="/Signup" className='navlink'>
              Sign Up
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar