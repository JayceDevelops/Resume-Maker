import '../styles/Button.css';

import Arrow from '../assets/RightArrow.svg'

export default function Button({text, type, onClick, active}) {

    if (type === 'continue'){

        let className = '';
        if (active) {
            className = 'button';
        }
        else {
            className = 'button unactive';
        }

        return (
            <div className={className} onClick={onClick}>
                <h2>{text}</h2>
                <img className='arrow' src={Arrow}/>
            </div>
        );
    }
    else {
        return (
            <div className='button back' onClick={onClick}>
                <h2>{text}</h2>
            </div>
        );
    }
}