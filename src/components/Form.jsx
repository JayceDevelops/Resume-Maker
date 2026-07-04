import Contact from './Contact';

export default function Form({type, data, setData}) {

    if (type === 'contact'){
        return (
            <Contact data={data} setData={setData}/>
        );
    }
}