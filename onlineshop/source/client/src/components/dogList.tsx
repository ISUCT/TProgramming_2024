import React from 'react'
import DogItem from './dogItem';
import { create } from 'domain';
import Button from '@mui/material/Button';

export interface Dog {
    id: number,
    name: string,
    age: number
}

const getDogs = async (): Promise<Dog[]> => {
    const data = await fetch('/api/dogs')
    return await data.json();
    // const dogs = [{ name: "Bob", age: 1 }, { name: "Alice", age: 2 }, { name: "Charlie", age: 3 }]
    // return new Promise((resolve) => setTimeout(() => resolve(dogs), 5000));
}


export default function DogList() {
    const [dogs, setDogs] = React.useState<Dog[]>([]);

    const createDog = async () => {
        setDogs([...dogs, { id: 0, name: "", age: 0 }]);
    }

    React.useEffect(() => {
        let isMounted = true;
        const fetchDogs = async () => {
            console.log("fetching");
            const dogs = await getDogs();
            if (!isMounted) return;
            setDogs(dogs);
        }
        fetchDogs();
        return () => {
            isMounted = false;
        }
    }, []);
    return (
        <div>
            <h1>Dog List</h1>
            <Button variant="contained" color="success" onClick={createDog}>
                Добавить
            </Button>
            {
                dogs.map((dog, index) => <DogItem dog={dog} key={dog.id} />)
            }
        </div>
    )
}
