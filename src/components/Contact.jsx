import { useState } from 'react';
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

    // functions used to validate each input & Saves it to the data object
    const validateFName = () => {
        if (FName.length > 0 && FName.length < 3){
            setFNameError('Invalid First Name');
            setData({...data, fName: ''});
        }
        else {
            setFNameError('');
            setData({...data, fName: FName});
        }
    };

    const validateLName = () => {
        if (LName.length > 0 && LName.length < 3){
            setLNameError('Invalid Last Name');
            setData({...data, lName: ''});
        }
        else {
            setLNameError('');
            setData({...data, lName: LName});
        }
    };

    const validateEmail = () => {
        
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(Email.trim()) && Email.length > 0){
            setEmailError('Invalid Email Address');
            setData({...data, email: ''});
        }
        else {
            setEmailError('');
            setData({...data, email: Email});
        }
    };

    const validatePhone = () => {
        const phoneRegex = /^(\+1[\s.-]?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;

        if (!phoneRegex.test(Phone.trim()) && Phone.length > 0){
            setPhoneError('Invalid Phone Number');
            setData({...data, phone: ''});
        }
        else {
            setPhoneError('');
            setData({...data, phone: Phone});
        }
    };

    const validateLocation = () => {
        const locationRegex = /^[A-Za-z][A-Za-z\s.'-]*,\s(Alabama|AL|Alaska|AK|Arizona|AZ|Arkansas|AR|California|CA|Colorado|CO|Connecticut|CT|Delaware|DE|Florida|FL|Georgia|GA|Hawaii|HI|Idaho|ID|Illinois|IL|Indiana|IN|Iowa|IA|Kansas|KS|Kentucky|KY|Louisiana|LA|Maine|ME|Maryland|MD|Massachusetts|MA|Michigan|MI|Minnesota|MN|Mississippi|MS|Missouri|MO|Montana|MT|Nebraska|NE|Nevada|NV|New Hampshire|NH|New Jersey|NJ|New Mexico|NM|New York|NY|North Carolina|NC|North Dakota|ND|Ohio|OH|Oklahoma|OK|Oregon|OR|Pennsylvania|PA|Rhode Island|RI|South Carolina|SC|South Dakota|SD|Tennessee|TN|Texas|TX|Utah|UT|Vermont|VT|Virginia|VA|Washington|WA|West Virginia|WV|Wisconsin|WI|Wyoming|WY)$/i;
        if (!locationRegex.test(Location.trim()) && Location.length > 0){
            setLocationError('Invalid Location');
            setData({...data, location: ''});
        }
        else {
            setLocationError('');
            setData({...data, location: Location});
        }
    };

    const validateLinkedIn = () => {
        const linkedinRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9](?:[a-zA-Z0-9-]{1,98}[a-zA-Z0-9])?\/?$/;

        if (!linkedinRegex.test(LinkedIn.trim()) && LinkedIn.length > 0){
            setLinkedInError('Invalid LinkedIn Link');
            setData({...data, linkedin: ''});
        }
        else {
            setLinkedInError('');
            setData({...data, linkedin: LinkedIn});
        }
    };

    const validatePortfolio = () => {
        const portfolioRegex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*)?$/;

        if (Portfolio.length > 0 && !portfolioRegex.test(Portfolio.trim())) {
            setPortfolioError('Invalid Website URL');
            setData({ ...data, website: '' });
        } else {
            setPortfolioError('');
            setData({ ...data, website: Portfolio });
        }
    };

    const validateGithub = () => {
        const githubRegex = /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9](?:-?[a-zA-Z0-9]){0,38}\/?$/;

        if (!githubRegex.test(Github.trim()) && Github.length > 0){
            setGithubError('Invalid Github Link');
            setData({...data, github: ''});
        }
        else {
            setGithubError('');
            setData({...data, github: Github});
        }
    }




    return (
        <div className="flex items-center justify-center w-full px-4 sm:px-6">
            <form className='grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 md:gap-25 w-full max-w-7xl mb-5'>
                <Input lblText={'First Name'} value={FName} placeholder={'John'} onChange={fNameChange} onBlur={validateFName} errorText={FNameError}/>
                <Input lblText={'Last Name'} value={LName} placeholder={'Smith'} onChange={lNameChange} onBlur={validateLName} errorText={LNameError}/>
                <Input lblText={'Email'} value={Email} placeholder={'name@email.com'} onChange={emailChange} onBlur={validateEmail} errorText={EmailError}/>
                <Input lblText={'Phone'} value={Phone} placeholder={'(123) 456-7890'} onChange={phoneChange} onBlur={validatePhone} errorText={PhoneError}/>
                <Input lblText={'Location (optional)'} value={Location} placeholder={'Portland, OR'} onChange={locationChange} onBlur={validateLocation} errorText={LocationError}/>
                <Input lblText={'LinkedIn (optional)'} value={LinkedIn} placeholder={'linkedin.com/in/johnsmith'} onChange={linkedInChange} onBlur={validateLinkedIn} errorText={LinkedInError}/>
                <Input lblText={'Portfolio (optional)'} value={Portfolio} placeholder={'johnsmith.com'} onChange={portfolioChange} onBlur={validatePortfolio} errorText={PortfolioError}/>
                <Input lblText={'Github (optional)'} value={Github} placeholder={'github.com/johnsmith'} onChange={githubChange} onBlur={validateGithub} errorText={GithubError}/>
            </form>
        </div>
    );
};