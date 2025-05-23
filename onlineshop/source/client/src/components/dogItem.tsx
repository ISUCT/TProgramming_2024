import React from 'react'
import { Dog } from './dogList'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


interface IProps {
    dog: Dog
}

const  updateDog = async (dog: Dog) => {
  let method = "POST";
  let url = "/api/dogs/";
  if (dog.id !== 0) {
    method = "PUT";
    url += `${dog.id}`;
  }
  return await fetch(url,{
         method: method, // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(dog), // body data type must match "Content-Type" header
  });
 }

export default function DogItem(props: IProps) {
    const [name, setName] = React.useState<string>(props.dog.name);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    return (
        <div>
            <h1>Dog:</h1>
            <TextField
                id="standard-basic"
                label="Name"
                variant="standard"
                value={name}
                onChange={onChange}
            />
            <h4>Age: {props.dog.age}</h4>
            <Button variant="contained" color="success" onClick={() => updateDog({...props.dog, name: name})}>
                Сохранить
            </Button>
        </div>
    )
}
