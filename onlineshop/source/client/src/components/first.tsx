import React from 'react'
import Button from '@mui/material/Button';

export default function First() {
    const [count, setCount] = React.useState(0);

    const handleClick = () => { 
        setCount(count + 1);
        console.log(`Clicked ${count}`) 
    };
    return (
        <div>
            <h2>Click count: {count}</h2>
            <Button variant="contained" onClick={handleClick}>Contained</Button>
        </div>
    )
}