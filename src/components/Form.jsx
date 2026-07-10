import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Resume from './Resume';

export default function Form({type, data, setData}) {

    if (type === 'contact'){
        return (
            <Contact data={data} setData={setData}/>
        );
    }
    else if (type === 'education'){
        return (
            <Education data={data} setData={setData}/>
        );
    }
    else if (type === 'experience'){
        return (
            <Experience data={data} setData={setData}/>
        ); 
    }
    else {
        return (
            <Resume data={data}/>
        );
    }
}