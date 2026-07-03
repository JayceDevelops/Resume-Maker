import '../styles/Header.css';

import Bar from './Bar';

export default function Header({type, step, text}) {

    let icon = '';
    let actives = [false, false, false, false];

    if (type === 'contact'){
        actives = [true, false, false, false];
    }
    else if (type === 'education'){
        actives = [true, true, false, false];
    }
    else if (type === 'experience'){
        actives = [true, true, true, false];
    }
    else {

    }

    return (
        <header>
            <div className='text'>
                <h1>{text}</h1>
            </div>

            <div className="progress">
                <div className="bars">
                    <Bar active={actives[0]}/>
                    <Bar active={actives[1]}/>
                    <Bar active={actives[2]}/>
                    <Bar active={actives[3]}/>
                </div>
                <h3>Step {step} of 4</h3>
            </div>
        </header>
    );
};