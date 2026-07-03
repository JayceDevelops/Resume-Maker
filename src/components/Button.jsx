import '../styles/Button.css';

import Arrow from '../assets/RightArrow.svg'

export default function Button({text, type, onClick}) {

    return (
        <div className="start" onClick={onClick}>
            <h2>{text}</h2>
            <img className='arrow' src={Arrow}/>
        </div>
    );
}