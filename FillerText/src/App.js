import React from 'react';
import RegistrationForm from './components/RegistrationForm'
import './App.css';
import Webpage from './components/Webpage';

function App() {
  return (
    <div className="App">
      <Webpage title=" The world's coolest webpage" /> 
      <RegistrationForm />
    </div>
  );
}

export default App;
