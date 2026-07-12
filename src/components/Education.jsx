import AddButton from "./AddButton";
import EducationForm from "./EducationForm";

export default function Education({data, setData}){

    const addSchool = () => {
        
        const entry = data.education.length + 1;
        
        const newSchool = {entry: entry, school: '', degree: '', fos: '', start: '', end: '', gpa: ''};
        setData({...data, education: [...data.education, newSchool]});
    };

    const deleteSchool = (index) => {
        const updatedEducation = data.education
        .filter((_, i) => i !== index)
        .map((entry, i) => ({...entry, entry: i + 1}));
        
        setData({...data, education: updatedEducation});
    }

    return (
        <div className="flex flex-col items-center justify-center gap-6 sm:gap-10 px-4 sm:px-6 w-full">
            {data.education.map((Entry, index) => {
                return (
                    <EducationForm 
                        key={crypto.randomUUID()} 
                        educationObject={Entry} 
                        index={index}
                        data={data}
                        setData = {setData}
                        onDelete={() => deleteSchool(index)}
                    />
                );
            })}
            <AddButton text={'Add another school'} onClick={addSchool}/>
        </div>
    );
}