import Input from "./Input";

export default function EducationForm({data, setData, entry}){

    let hidden = entry === 1 ? 'hidden' : 'block';
    const buttonStyle = `text-l font-semibold text-white bg-red-400 px-2 rounded-3xl cursor-pointer ${hidden}`;
    return (
        <div className="border-2 p-10 rounded-xl border-slate-400" >
            <div className="flex justify-between w-300 pb-5">
                <h1 className="text-xl font-semibold text-slate-600">Entry {entry}</h1>
                <button className={buttonStyle}>Clear</button>
            </div>
            <form className="grid grid-cols-2 gap-15 w-300">
                <Input lblText={'School'} value={''} placeholder={'University of Oregon'} onChange={''} onBlur={''} errorText={''}/>
                <Input lblText={'Degree'} value={''} placeholder={'Bachelors of Science'} onChange={''} onBlur={''} errorText={''}/>
                <Input lblText={'Field Of Study'} value={''} placeholder={'Software Engineering'} onChange={''} onBlur={''} errorText={''}/>
                <Input lblText={'Start Date'} value={''} placeholder={'Sep 2024'} onChange={''} onBlur={''} errorText={''}/>
                <Input lblText={'End Date'} value={''} placeholder={'Jun 2028'} onChange={''} onBlur={''} errorText={''}/>
                <Input lblText={'GPA (Optional)'} value={''} placeholder={'3.8'} onChange={''} onBlur={''} errorText={''}/>
            </form>
        </div>
    );
}