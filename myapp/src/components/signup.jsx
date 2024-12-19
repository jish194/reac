import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
      <div>
          <h2>Sign up page</h2>
          <TextField variant="outlined" label="Username"></TextField>
          <br /><br />
          <TextField variant="outlined" label="password"></TextField>
          <br /><br />
          <TextField variant="outlined" label="email"></TextField>
          <br /><br />
          <TextField variant="outlined" label="Name"></TextField>
          <br /><br />
          <Button variant='contained'>submit</Button>
    </div>
  )
}

export default Signup