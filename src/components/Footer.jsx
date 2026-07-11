import { useState } from 'react';
import Button from './Button';

export default function Footer({data, form, setForm, active}) {

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

    const saveResume = () => {

    }

    return (
        <footer className='flex justify-between items-end pr-10 pl-10 mb-10'>
            <Button text={'Back'} type={'back'} onClick={backClicked} active={true}/>
            {form === 'complete' ? <Button text={'Save As PDF'} type={'save'} onClick={saveResume} active={true}/> : <Button text={'Continue'} type={'continue'} onClick={continueClicked} active={active}/>}
            
        </footer>
    );
};