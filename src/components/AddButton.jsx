import Plus from '../assets/Plus.svg';

export default function AddButton({text, onClick}){

    return (
        <div className='flex gap-3 items-center justify-center border-2 border-dashed border-indigo-600 p-3 w-320 rounded-xl cursor-pointer mb-5' onClick={onClick}>
            <img src={Plus} className='w-7 h-7'/>
            <h1>{text}</h1>
        </div>
    );
}