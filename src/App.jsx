import { useState } from 'react'
import './App.css'

import Menu from './components/Menu';

import Header from './components/Header';
import Form from './components/Form';

function App() {

  const [step, setStep] = useState(1);
  const [text, setText] = useState('Contact Information');
  const [form, setForm] = useState('start');

  const [data, setData] = useState({
    fName: '',
    lName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    website: '',
    github: '',
    education: [],
    experience: []
  });

  if (form === 'start'){
    return (
      <Menu setForm={setForm}/>
    );
  }
  else {

    if (form === 'education'){
      setStep(2);
      setText('Education');
    }
    else if (form === 'experience'){
      setStep(3);
      setText('Work Experience');
    }
    else if (form === 'complete'){
      setStep(4);
      setText('Your resume is ready');
    }

    return (
      <>
        <Header step={step} text={text}/>
        <Form type={form} data={data} setData={setData}/>
      </>
    );
  }
}

export default App
