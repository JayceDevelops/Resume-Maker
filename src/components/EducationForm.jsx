import Input from "./Input";
import { useState } from "react";

export default function EducationForm({educationObject, onClick}){

    const [School, setSchool] = useState(educationObject.school);
    const [Degree, setDegree] = useState(educationObject.degree);
    const [FOS, setFOS] = useState(educationObject.fos);
    const [Start, setStart] = useState(educationObject.start);
    const [End, setEnd] = useState(educationObject.end);
    const [GPA, setGPA] = useState(educationObject.gpa);

    const [SchoolError, setSchoolError] = useState('');
    const [DegreeError, setDegreeError] = useState('');
    const [FOSError, setFOSError] = useState('');
    const [StartError, setStartError] = useState('');
    const [EndError, setEndError] = useState('');
    const [GPAError, setGPAError] = useState('');

    // Functions used to keep track of inputs
    const schoolChange = (e) => {
        setSchool(e.target.value);
    };

    const degreeChange = (e) => {
        setDegree(e.target.value);
    };

    const fosChange = (e) => {
        setFOS(e.target.value);
    };

    const startChange = (e) => {
        setStart(e.target.value);
    };

    const endChange = (e) => {
        setEnd(e.target.value);
    };

    const gpaChange = (e) => {
        setGPA(e.target.value);
    };


    // functions used to validate each input & Saves it to the data object
    const validateSchool = () => {
        const schoolRegex = /^[A-Za-z0-9À-ÿ][A-Za-z0-9À-ÿ\s.,'&-]*$/;

        if (School.length > 0 && (School.length < 3 || !schoolRegex.test(School.trim()))) {
            setSchoolError('Invalid School Name');
            educationObject.school = '';
        }
        else {
            setSchoolError('');
            educationObject.school = School;
        }
    };

    const validateDegree = () => {
        const degreeRegex = /^[A-Za-z0-9À-ÿ][A-Za-z0-9À-ÿ\s.,'&()-]*$/;

        if (Degree.length > 0 && (Degree.length < 2 || !degreeRegex.test(Degree.trim()))) {
            setDegreeError('Invalid Degree');
            educationObject.degree = '';
        }
        else {
            setDegreeError('');
            educationObject.degree = Degree;
        }
    };

    const validateFOS = () => {
        const fosRegex = /^[A-Za-z0-9À-ÿ][A-Za-z0-9À-ÿ\s.,'&()/-]*$/;

        if (FOS.length > 0 && (FOS.length < 2 || !fosRegex.test(FOS.trim()))) {
            setFOSError('Invalid Field of Study');
            educationObject.fos = '';
        }
        else {
            setFOSError('');
            educationObject.fos = FOS;
        }
    };

    const validateStart = () => {
        const dateRegex = /^(Jan(uary)?|Feb(ruary)?|Mar(ch)?|Apr(il)?|May|Jun(e)?|Jul(y)?|Aug(ust)?|Sep(t|tember)?|Oct(ober)?|Nov(ember)?|Dec(ember)?)\s\d{4}$/i;

        if (Start.length > 0 && !dateRegex.test(Start.trim())) {
            setStartError('Invalid Start Date');
            educationObject.start = '';
        }
        else {
            setStartError('');
            educationObject.start = Start;
        }
    };

    const validateEnd = () => {
        const dateRegex = /^(Jan(uary)?|Feb(ruary)?|Mar(ch)?|Apr(il)?|May|Jun(e)?|Jul(y)?|Aug(ust)?|Sep(t|tember)?|Oct(ober)?|Nov(ember)?|Dec(ember)?)\s\d{4}$|^Present$/i;

        if (End.length > 0 && !dateRegex.test(End.trim())) {
            setEndError('Invalid End Date');
            educationObject.end = '';
        }
        else {
            setEndError('');
            educationObject.end = End;
        }
    };

    const validateGPA = () => {
        const gpaRegex = /^[0-4](\.\d{1,2})?$/;

        if (GPA.length > 0 && (!gpaRegex.test(GPA.trim()) || parseFloat(GPA) > 4.0)) {
            setGPAError('Invalid GPA');
            educationObject.gpa = '';
        }
        else {
            setGPAError('');
            educationObject.gpa = GPA;
        }
    };


    let hidden = educationObject.entry === 1 ? 'hidden' : 'block';
    const buttonStyle = `text-l font-semibold text-white bg-red-400 px-2 rounded-3xl cursor-pointer ${hidden}`;

    return (
        <div className="border-2 p-10 rounded-xl border-indigo-300" >
            <div className="flex justify-between w-300 pb-5">
                <h1 className="text-xl font-semibold text-slate-600">Entry {educationObject.entry}</h1>
                <button className={buttonStyle} onClick={onClick}>Delete</button>
            </div>
            <form className="grid grid-cols-2 gap-15 w-300">
                <Input lblText={'School'} value={School} placeholder={'University of Oregon'} onChange={schoolChange} onBlur={validateSchool} errorText={SchoolError}/>
                <Input lblText={'Degree'} value={Degree} placeholder={'Bachelors of Science'} onChange={degreeChange} onBlur={validateDegree} errorText={DegreeError}/>
                <Input lblText={'Field Of Study'} value={FOS} placeholder={'Software Engineering'} onChange={fosChange} onBlur={validateFOS} errorText={FOSError}/>
                <Input lblText={'Start Date'} value={Start} placeholder={'Sep 2024'} onChange={startChange} onBlur={validateStart} errorText={StartError}/>
                <Input lblText={'End Date'} value={End} placeholder={'Jun 2028'} onChange={endChange} onBlur={validateEnd} errorText={EndError}/>
                <Input lblText={'GPA (Optional)'} value={GPA} placeholder={'3.8'} onChange={gpaChange} onBlur={validateGPA} errorText={GPAError}/>
            </form>
        </div>
    );
}