import { Button, TextField, Typography } from '@mui/material'
import e from 'cors'
import React, { useState } from 'react'

const StateBasic = () => {
   
    var [fname, setfname] = useState("")
    var [lname,setlname]=useState()
    const handleinput = (e) => {
        
        setfname(e.target.value)
    }
    const handle = () => {
        
        setlname(fname)
    }
   
  return (
      <div>
          <Typography variant='h6'>welcome {lname}</Typography>
          <br /><br />
          <TextField variant='outlined' label="Entername" onChange={handleinput}/><br /><br />
          <Button variant="contained" onClick={handle}>Submit</Button>
    </div>
  )
}

export default StateBasic