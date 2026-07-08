import { use, useState } from 'react'

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
    education: [{
      entry: 1,
      school: '',
      degree: '',
      fos: '',
      start: '',
      end: '',
      gpa: ''
    },
  ],
    experience: []
  });

  let active = data.fName !== '' && data.lName !== '' && data.email !== '' && data.phone !== '';

  if (form === 'education') {
    active = data.education.every(entry =>
      entry.school !== '' && entry.degree !== '' && entry.fos !== '' && entry.start !== '' && entry.end !== ''
    );
  }

  if (form === 'start'){
    return (
      <Menu setForm={setForm}/>
    );
  }
  else {

    const {step, text} = STEP_MAP[form] ?? STEP_MAP.contact;

    return (
      <div className='flex flex-col justify-between bg-slate-200 min-h-screen'>
        <Header step={step} text={text}/>
        <Form type={form} data={data} setData={setData}/>
        <Footer data={data} form={form} setForm={setForm} active={active}/>
      </div>
    );
  }
}

export default App
