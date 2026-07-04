import '../styles/Menu.css';

import CV from '../assets/CV.svg';
import Button from './Button';


export default function Menu({setForm}) {

    const startedClicked = () => {
        setForm('contact');
    };

    return (
        <main>
            <img src={CV} className='icon'/>
            <h1>Resume Maker</h1>
            <p>Build a clean, professional resume in minutes. Just fill in a few forms and we'll do the formatting.</p>
             
            <Button text={'Get Started'} type={'next'} onClick={startedClicked}/>

            <h4>No sign-up required</h4>
        </main>
    );
};