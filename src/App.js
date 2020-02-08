import React from 'react';
import './App.css';
import Card from './Components/EstablishmentCard/EstablishmentCard';

function App() {
  return (
    <div className="App">
      <Card establishmentName={"Silva"} establishmentProducts={"21"} />
    </div>
  );
}

export default App;
