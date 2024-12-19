import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Login from './login'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <Typography variant='h6'>myapp</Typography>&nbsp;&nbsp;&nbsp;
                    <Link to='/login'>
                      <Button variant='contained'>Login</Button>
                     </Link>&nbsp;&nbsp;&nbsp;
                    <Link to='/signup'>
                      <Button variant='contained'>signup</Button>
                    </Link>&nbsp;&nbsp;&nbsp;
                    <Link to='/state'>
                      <Button variant='contained'>state</Button>
                    </Link>&nbsp;&nbsp;&nbsp;
                    <Link to= '/counter'>
                      <Button variant='contained'>counter</Button>
          </Link>&nbsp;&nbsp;&nbsp;
          <Link to='/namebutton'>
            <Button color='inherit'>name</Button></Link>&nbsp;&nbsp;&nbsp;
          <Link to='/appi'>
            <Button variant='contained'>Api</Button>
          </Link>&nbsp;&nbsp;&nbsp;
          <Link to='/poke'>
            <Button variant='contained'>poke</Button>
          </Link>
          </Toolbar>
       
          </AppBar>
          <br /><br /><br />
          
    </div>
  )
}

export default Navbar