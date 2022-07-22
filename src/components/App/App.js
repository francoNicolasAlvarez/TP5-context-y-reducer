import React from 'react'
import Header from '../Trip/Header';
import TripMaker from '../Trip/TripMaker';
import userContext from '../Trip/user';

const user = {
  name:"Marcelo Arcidiacono",
  mail: "agachateYconocelo@mail.com",
  
}

function App() {
  return (
    <React.StrictMode>
      <userContext.Provider value={user}>
      <Header/>
      <TripMaker/>
      </userContext.Provider>
    </React.StrictMode>
  )
}


export default App;
