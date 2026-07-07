import Contact from './Contact';
import Education from './Education';

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
}