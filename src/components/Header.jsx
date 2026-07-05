import '../styles/Header.css';

import Bar from './Bar';

export default function Header({type, step, text}) {

    let actives = [false, false, false, false];

    if (step === 1){
        actives = [true, false, false, false];
    }
    else if (step === 2){
        actives = [true, true, false, false];
    }
    else if (step === 3){
        actives = [true, true, true, false];
    }
    else {
        actives = [true, true, true, true];
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