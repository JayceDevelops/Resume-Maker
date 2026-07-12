import CV from '../assets/CV.svg';
import Button from './Button';


export default function Menu({setForm}) {

    const startedClicked = () => {
        setForm('contact');
    };

    return (
        <main className='min-h-screen flex flex-col items-center justify-center bg-slate-200 px-4'>
            <img src={CV} className='w-16 h-16 sm:w-20 sm:h-20 bg-blue-950 rounded-2xl'/>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-black mt-6 sm:mt-10 text-center'>Resume Maker</h1>
            <p className='text-gray-600 text-base sm:text-lg md:text-xl w-full sm:w-3/4 md:w-3/12 pt-3 text-center mb-3'>Build a clean, professional resume in minutes. Just fill in a few forms and we'll do the formatting.</p>
             
            <Button text={'Get Started'} type={'next'} onClick={startedClicked} type={'continue'} active={true}/>

            <h4 className='text-gray-500 pt-2 pr-5 pl-5 font-extralight sm:pt-5'>No sign-up required</h4>
        </main>
    );
};