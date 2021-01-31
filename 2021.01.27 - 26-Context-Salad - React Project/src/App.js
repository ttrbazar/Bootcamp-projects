import React from 'react';
import Navigation from './components/Navigation/Navigation';
import SaladMaker from './components/SaladMaker/SaladMaker';
import UserContext from './context/UserContext';


const user = {
    name: 'The Great Salad Maker',
    favorites: ['avocado', 'carrot']
};


function App() {
    return (
        <UserContext.Provider value={user}>
            <Navigation />
            <SaladMaker />
        </UserContext.Provider >
    );
};

export default App;