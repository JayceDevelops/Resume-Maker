import { useState } from 'react'
import './App.css'

import Menu from './components/Menu';

function App() {

  const [screen, setScreen] = useState('start');

  let data = {
    FName: '',
    LName: '',
    Email: '',
    Phone: '',
    location: '',
    linkedin: '',
    website: '',
    github: '',
    education: [],
    experience: []
  };

  if (screen === 'start'){
    return (
      <Menu setScreen={setScreen}/>
    );
  }
}

export default App
