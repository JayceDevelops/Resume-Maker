import { useState } from 'react';
import '../styles/Contact.css';
import Input from './Input';

export default function Contact({data, setData}) {
    
    const [FName, setFName] = useState(data.fName);
    const [LName, setLName] = useState(data.lName);
    const [Email, setEmail] = useState(data.email);
    const [Phone, setPhone] = useState(data.phone);
    const [Location, setLocation] = useState(data.location);
    const [LinkedIn, setLinkedIn] = useState(data.linkedin);
    const [Portfolio, setPortfolio] = useState(data.website);
    const [Github, setGithub] = useState(data.github);

    // Functions used to keep track of inputs
    const fNameChange = (e) => {
        setFName(e.target.value);
    };

    const lNameChange = (e) => {
        setLName(e.target.value);
    };

    const emailChange = (e) => {
        setEmail(e.target.value);
    };

    const phoneChange = (e) => {
        setPhone(e.target.value);
    };

    const locationChange = (e) => {
        setLocation(e.target.value);
    };

    const linkedInChange = (e) => {
        setLinkedIn(e.target.value);
    };

    const portfolioChange = (e) => {
        setPortfolio(e.target.value);
    };

    const githubChange = (e) => {
        setGithub(e.target.value);
    };

    // functions used to validate each input

    return (
        <div className="contactHolder">
            <form className='contact'>
                <Input lblText={'First Name'} value={FName} placeholder={'John'} onChange={fNameChange}/>
                <Input lblText={'Last Name'} value={LName} placeholder={'Smith'} onChange={lNameChange}/>
                <Input lblText={'Email'} value={Email} placeholder={'name@emai.com'} onChange={emailChange}/>
                <Input lblText={'Phone'} value={Phone} placeholder={'(123) 456-7890'} onChange={phoneChange}/>
                <Input lblText={'Location'} value={Location} placeholder={'Portland, OR'} onChange={locationChange}/>
                <Input lblText={'LinkedIn'} value={LinkedIn} placeholder={'linkedin.com/in/johnsmith'} onChange={linkedInChange}/>
                <Input lblText={'Portfolio'} value={Portfolio} placeholder={'johnsmith.com'} onChange={portfolioChange}/>
                <Input lblText={'Github'} value={Github} placeholder={'github.com/johnsmith'} onChange={githubChange}/>
            </form>
        </div>
    );
};