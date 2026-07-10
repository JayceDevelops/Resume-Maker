import { act } from "react";

export default function Input({lblText, value, placeholder, onChange, onBlur, errorText, full}) {

    const className = full ? 'flex flex-col col-span-full' : 'flex flex-col';
    return (
        <div className={className}>
            <label className='text-slate-700 text-l pb-1/4'>{lblText}</label>
            <input className='pl-3 p-1.5 bg-none border-1 border-slate-500 rounded-xl text-l text-black font-sans font-semibold tracking-wider focus: outline-indigo-600' value={value} placeholder={placeholder} onChange={onChange} onBlur={onBlur}></input>
            <h3 className='text-red-700 text-l font-semibold mt-0.5 tracking-wide'>{errorText}</h3>
        </div>
    );
}