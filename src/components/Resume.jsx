import Phone from '../assets/Phone.svg';
import Email from '../assets/Email.svg';
import LinkedIn from '../assets/linkedin.svg';
import Website from '../assets/Website.svg';
import Github from '../assets/Github.svg';

export default function Resume({data}){
    
    return (
        <div className="flex flex-col items-center justify-center gap-5 tracking-wider">
            <div className="flex flex-col shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)] w-5xl font-Sans p-10">

                <h1 className="font-bold text-3xl w-full text-center mb-1">{data.fName} {data.lName}</h1>
                {data.location ? <h1 className="font-semibold text-sm w-full text-center mb-5">{data.location}</h1> : ''}


                <div className="flex flex-row items-center justify-center gap-5 font-light">

                    <div className='flex items-center gap-2'>
                        <img className='w-4 h-4' src={Phone}></img>
                        <h1>{data.phone}</h1>
                    </div>

                    <span> | </span>

                    <div className='flex items-center gap-2'>
                        <img className='w-4 h-4' src={Email}></img>
                        <h1>{data.email}</h1>
                    </div>

                    {data.linkedin 
                        ? 
                        <div className='flex gap-5'>
                            <span> | </span>
                            <div className='flex items-center gap-2'>
                                <img className='w-4 h-4' src={LinkedIn}></img>
                                <h1>{data.linkedin}</h1>
                            </div>
                        </div>
                        
                        :
                        ''
                    }

                </div>

                {data.website || data.github ? 
                    <div className="flex flex-row items-center justify-center gap-5 font-light mt-2">
                        
                        {data.website 
                            ?
                            <div className='flex items-center gap-2'>
                                <img className='w-4 h-4' src={Website}></img>
                                <h1>{data.website}</h1>
                            </div>

                            :
                            ''
                        }

                        {data.github 
                            ?
                            <div className='flex gap-5'>
                                <span> | </span>
                                <div className='flex items-center gap-2'>
                                    <img className='w-4 h-4' src={Github}></img>
                                    <h1>{data.github}</h1>
                                </div>
                            </div>

                            :
                            ''
                        }

                    </div>
                    :
                    ''
                }

            </div>
        </div>
    );
}