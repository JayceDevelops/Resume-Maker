import EducationForm from "./EducationForm";

export default function Education({data, setData}){

    let entry = data.education.length;

    if (entry === 0){
        entry = 1;
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <EducationForm data={data} setData={setData} entry={entry}/>
        </div>
    );
}