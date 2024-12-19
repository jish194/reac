import { Button } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const plushandler = () => {
        setCount(count + 1)
    }
    const minusHandler = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <h1>Corrent counter :{count}</h1>
            <Button variant='contained' onClick={plushandler}>plus</Button>&nbsp;
            <Button variant='contained' onClick={minusHandler}>minus</Button>
        </div>
    )
}

export default Counter