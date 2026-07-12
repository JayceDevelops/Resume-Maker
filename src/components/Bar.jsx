export default function Bar({active}){
    
    let color = active ? 'bg-indigo-600' : 'bg-slate-500';
    let classStatus = `${color} p-0.75 w-16 sm:w-24 md:w-40 rounded-xl`;
    return <div className={classStatus}></div>;
}