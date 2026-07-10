import Input from "./Input";
import { useState } from "react";

export default function ExperienceForm({experienceObject, index, data, setData, onDelete}){

    const [Company, setCompany] = useState(experienceObject.company);
    const [Title, setTitle] = useState(experienceObject.title);
    const [Start, setStart] = useState(experienceObject.start);
    const [End, setEnd] = useState(experienceObject.end);
    const [Description, setDescription] = useState(experienceObject.description);

    const [CompanyError, setCompanyError] = useState('');
    const [TitleError, setTitleError] = useState('');
    const [StartError, setStartError] = useState('');
    const [EndError, setEndError] = useState('');
    const [DescriptionError, setDescriptionError] = useState('');

    // Functions used to keep track of inputs
    const companyChange = (e) => setCompany(e.target.value);
    const titleChange = (e) => setTitle(e.target.value);
    const startChange = (e) => setStart(e.target.value);
    const endChange = (e) => setEnd(e.target.value);
    const descriptionChange = (e) => setDescription(e.target.value);
    
    const updateEntry = (field, value) => {
        const updatedExperience = data.experience.map((entry, i) =>
            i === index ? { ...entry, [field]: value } : entry
        );
        setData({ ...data, experience: updatedExperience });
    };

    // functions used to validate each input & Saves it to the data object
    const validateCompany = () => {
        const companyRegex = /^[A-Za-z0-9À-ÿ][A-Za-z0-9À-ÿ\s.,'&-]*$/;

        if (Company.length > 0 && (Company.length < 2 || !companyRegex.test(Company.trim()))) {
            setCompanyError('Invalid Company Name');
        } else {
            setCompanyError('');
            updateEntry('company', Company);
        }
    };

    const validateTitle = () => {
        const titleRegex = /^[A-Za-z0-9À-ÿ][A-Za-z0-9À-ÿ\s.,'&()/-]*$/;

        if (Title.length > 0 && (Title.length < 2 || !titleRegex.test(Title.trim()))) {
            setTitleError('Invalid Job Title');
        } else {
            setTitleError('');
            updateEntry('title', Title);
        }
    };

    const validateStart = () => {
        const dateRegex = /^(Jan(uary)?|Feb(ruary)?|Mar(ch)?|Apr(il)?|May|Jun(e)?|Jul(y)?|Aug(ust)?|Sep(t|tember)?|Oct(ober)?|Nov(ember)?|Dec(ember)?)\s\d{4}$/i;

        if (Start.length > 0 && !dateRegex.test(Start.trim())) {
            setStartError('Invalid Start Date');
        } else {
            setStartError('');
            updateEntry('start', Start);
        }
    };

    const validateEnd = () => {
        const dateRegex = /^(Jan(uary)?|Feb(ruary)?|Mar(ch)?|Apr(il)?|May|Jun(e)?|Jul(y)?|Aug(ust)?|Sep(t|tember)?|Oct(ober)?|Nov(ember)?|Dec(ember)?)\s\d{4}$|^Present$/i;

        if (End.length > 0 && !dateRegex.test(End.trim())) {
            setEndError('Invalid End Date');
        } else {
            setEndError('');
            updateEntry('end', End);
        }
    };

    const validateDescription = () => {
        if (Description.length > 0 && Description.trim().length < 10) {
            setDescriptionError('Description is too short');
        } else {
            setDescriptionError('');
            updateEntry('description', Description);
        }
    };

    let hidden = experienceObject.entry === 1 ? 'hidden' : 'block';
    const buttonStyle = `text-l font-semibold text-white bg-red-400 px-2 rounded-3xl cursor-pointer ${hidden}`;

    return (
        <div className="border-2 p-10 rounded-xl border-indigo-300" >
            <div className="flex justify-between w-300 pb-5">
                <h1 className="text-xl font-semibold text-slate-600">Entry {experienceObject.entry}</h1>
                <button className={buttonStyle} onClick={onDelete}>Delete</button>
            </div>
            <form className="grid grid-cols-2 gap-15 w-300">
                <Input lblText={'Company'} value={Company} placeholder={'Northwind Studio'} onChange={companyChange} onBlur={validateCompany} errorText={CompanyError}/>
                <Input lblText={'Job Title'} value={Title} placeholder={'Product Designer'} onChange={titleChange} onBlur={validateTitle} errorText={TitleError}/>
                <Input lblText={'Start Date'} value={Start} placeholder={'Jul 2022'} onChange={startChange} onBlur={validateStart} errorText={StartError}/>
                <Input lblText={'End Date'} value={End} placeholder={'Present'} onChange={endChange} onBlur={validateEnd} errorText={EndError}/>
                <Input lblText={'Description'} value={Description} placeholder={'Led redesign of the onboarding flow, increasing signup completion by 18%'} onChange={descriptionChange} onBlur={validateDescription} errorText={DescriptionError} full={true}/>
            </form>
        </div>
    );
}