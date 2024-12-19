import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Nameing = () => {
    var [x, setx] = useState()

    const Input1 = () => {
        setx("react")
    }
    const Input2 = () => {
        setx("angular")
    }
    const Input3 = () => {
            setx("vue")
    } 
    //useeffect
    //useeffect(()=> { },[])

    useEffect(() => {
        Input2()
    },[])
        
    return (
      <div>
            <Typography variant='h4'>welcome,{x}</Typography><br /><br />
            <Button variant='contained' color='primary' onClick={Input1}>react</Button>&nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='secondary' onClick={Input2} >angular</Button>&nbsp;&nbsp;&nbsp;
            <Button variant='contained' color='success' onClick={Input3} >vue</Button>
    </div>
  )
}

export default Nameing