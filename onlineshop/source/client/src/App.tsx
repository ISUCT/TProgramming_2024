import React from 'react';

import './App.css';
import First from './components/first';
import DogList from './components/dogList';

const App: React.FC = () => (
    <>
        <h1>Hello World!</h1>
        <h2>Hello</h2>
        <First />
        <DogList />
    </>
);

export default App;
