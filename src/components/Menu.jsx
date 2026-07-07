import CV from '../assets/CV.svg';
import Button from './Button';


export default function Menu({setForm}) {

    const startedClicked = () => {
        setForm('contact');
    };

    return (
        <main className='h-screen flex flex-col items-center justify-center bg-slate-200'>
            <img src={CV} className='w-20 h-20 bg-blue-950 rounded-2xl'/>
            <h1 className='text-5xl font-semibold text-black mt-10'>Resume Maker</h1>
            <p className='text-gray-600 text-xl w-3/12 pt-3 text-center mb-3'>Build a clean, professional resume in minutes. Just fill in a few forms and we'll do the formatting.</p>
             
            <Button text={'Get Started'} type={'next'} onClick={startedClicked} type={'continue'} active={true}/>

            <h4 className='text-gray-500 pt-2 font-extralight pt-5'>No sign-up required</h4>
        </main>
    );
};