import { useState } from 'react'

import Menu from './components/Menu';

import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';

const STEP_MAP = {
  contact: { step: 1, text: 'Contact Information' },
  education: { step: 2, text: 'Education' },
  experience: { step: 3, text: 'Work Experience' },
  complete: { step: 4, text: 'Your resume is ready' },
};

function App() {
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

    const {step, text} = STEP_MAP[form] ?? STEP_MAP.contact;

    return (
      <div className='grid grid-row-3 bg-slate-200 h-screen'>
        <Header step={step} text={text}/>
        <Form type={form} data={data} setData={setData}/>
        <Footer data={data} form={form} setForm={setForm}/>
      </div>
    );
  }
}

export default App
