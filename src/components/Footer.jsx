import { useState } from 'react';
import '../styles/Footer.css';
import Button from './Button';

export default function Footer({data, form, setForm}) {

    const active = data.fName !== '' && data.lName !== '' && data.email !== '' && data.phone !== '';

    const continueClicked = () => {
        if (form === 'contact'){
            setForm('education');
        }
        else if (form === 'education'){
            setForm('experience');
        }
        else {
            setForm('complete');
        }
    };

    const backClicked = () => {
        if (form === 'contact'){
            setForm('start');
        }
        else if (form === 'education'){
            setForm('contact');
        }
        else if (form === 'experience'){
            setForm('education');
        }
        else {
            setForm('experience');
        }
    };


    return (
        <footer>
            <Button text={'Back'} type={'back'} onClick={backClicked} active={true}/>
            <Button text={'Continue'} type={'continue'} onClick={continueClicked} active={active}/>
        </footer>
    );
};