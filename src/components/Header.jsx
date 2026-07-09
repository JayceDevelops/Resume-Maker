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
        <header className='flex flex-row items-start justify-between pt-8 mb-10'>
            <div className='flex items-center justify-center gap-1 pl-10'>
                <h1 className='items-center text-6xl font-semibold font-sans'>{text}</h1>
            </div>

            <div className="flex flex-col items-end pr-10">
                <div className="flex items-center justify-center gap-5">
                    <Bar active={actives[0]}/>
                    <Bar active={actives[1]}/>
                    <Bar active={actives[2]}/>
                    <Bar active={actives[3]}/>
                </div>
                <h3 className='font-semibold text-sm text-slate-600 pt-2'>Step {step} of 4</h3>
            </div>
        </header>
    );
};