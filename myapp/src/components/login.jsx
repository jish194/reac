import { Button, TextField } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
      <div>
          <h1>LOGIN</h1>
          <TextField label="Email " variant='outlined'></TextField><br /> <br />
          <TextField label="password " variant='outlined'></TextField>
         <br /> <br />
          <Button variant='contained'>Submit</Button>
      </div>
  )
}

export default Login