import Arrow from '../assets/RightArrow.svg'

export default function Button({text, type, onClick, active}) {

    let bgColor = active ? 'bg-indigo-600' : 'bg-slate-500';
    let hover = active ? 'cursor-pointer hover:-translate-y-1 hover:shadow-[0_6px_16px_rgba(0,0,0,0.4)] active:shadow-[0_2px_6px_rgba(0,0,0,0.2)] transition-all' : '';

    let className = `flex justify-center items-center gap-1 p-1.5 w-50 border-none rounded-xl font-bold ${bgColor} shadow-grey-100 text-slate-100 ${hover}`;

    if (type === 'continue'){
        return (
            <div className={className} onClick={onClick}>
                <h2 className='text-l tracking-wider'>{text}</h2>
                <img className='w-7 h-7 pr-1/4' src={Arrow}/>
            </div>
        );
    }
    else {
        return (
            <div className='flex justify-center items-center border-2 border-indigo-600 p-1.5 rounded-xl w-25 cursor-pointer shadow-grey-100 text-black font-bold hover:-translate-y-1 hover:shadow-[0_6px_16px_rgba(0,0,0,0.4)] active:shadow-[0_2px_6px_rgba(0,0,0,0.2)] transition-all' onClick={onClick}>
                <h2 className='text-l tracking-wider'>{text}</h2>
            </div>
        );
    }
}