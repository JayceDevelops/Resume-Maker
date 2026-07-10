import ExperienceForm from "./ExperienceForm";
import AddButton from "./AddButton";

export default function Experience({data, setData}) {

    const addExperience = () => {
        const entry = data.experience.length + 1;
        
        const newJob = {id: crypto.randomUUID(), entry: entry, company: '', title: '', start: '', end: '', description: ''};
        setData({...data, experience: [...data.experience, newJob]});
    };
    
    const deleteExperience = (index) => {
        const updatedExperience = data.experience
        .filter((_, i) => i !== index)
        .map((entry, i) => ({...entry, entry: i + 1}));
        
        setData({...data, experience: updatedExperience});
    }
    
    return (
        <div className="flex flex-col items-center justify-center gap-10" >
            {data.experience.map((Entry, index) => {
                return (
                    <ExperienceForm 
                        key={Entry.id}
                        experienceObject={Entry} 
                        index={index}
                        data={data}
                        setData = {setData}
                        onDelete={() => deleteExperience(index)}
                    />
                );
            })}
            <AddButton text={'Add another role'} onClick={addExperience}/>
        </div>
    );
}