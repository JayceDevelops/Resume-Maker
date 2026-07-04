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

    const [FNameError, setFNameError] = useState('');
    const [LNameError, setLNameError] = useState('');
    const [EmailError, setEmailError] = useState('');
    const [PhoneError, setPhoneError] = useState('');
    const [LocationError, setLocationError] = useState('');
    const [LinkedInError, setLinkedInError] = useState('');
    const [PortfolioError, setPortfolioError] = useState('');
    const [GithubError, setGithubError] = useState('');



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
    const validate = (type) => {

    };

    return (
        <div className="contactHolder">
            <form className='contact'>
                <Input lblText={'First Name'} value={FName} placeholder={'John'} onChange={fNameChange} onBlur={validate('fname')} errorText={FNameError}/>
                <Input lblText={'Last Name'} value={LName} placeholder={'Smith'} onChange={lNameChange} onBlur={validate('fname')} errorText={LNameError}/>
                <Input lblText={'Email'} value={Email} placeholder={'name@email.com'} onChange={emailChange} onBlur={validate('fname')} errorText={EmailError}/>
                <Input lblText={'Phone'} value={Phone} placeholder={'(123) 456-7890'} onChange={phoneChange} onBlur={validate('fname')} errorText={PhoneError}/>
                <Input lblText={'Location'} value={Location} placeholder={'Portland, OR'} onChange={locationChange} onBlur={validate('fname')} errorText={LocationError}/>
                <Input lblText={'LinkedIn'} value={LinkedIn} placeholder={'linkedin.com/in/johnsmith'} onChange={linkedInChange} onBlur={validate('fname')} errorText={LinkedInError}/>
                <Input lblText={'Portfolio'} value={Portfolio} placeholder={'johnsmith.com'} onChange={portfolioChange} onBlur={validate('fname')} errorText={PortfolioError}/>
                <Input lblText={'Github'} value={Github} placeholder={'github.com/johnsmith'} onChange={githubChange} onBlur={validate('fname')} errorText={GithubError}/>
            </form>
        </div>
    );
};