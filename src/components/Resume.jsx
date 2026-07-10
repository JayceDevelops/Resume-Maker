export default function Resume({data}){
    return (
        <div className="flex flex-col items-center justify-center gap-5 tracking-wider">
            <div className="flex flex-col shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)] border-1 border-slate-400 w-5xl font-Sans p-10">

                <h1 className="font-bold text-3xl w-full text-center mb-1">{data.fName} {data.lName}</h1>
                {data.location ? <h1 className="font-semibold text-sm w-full text-center mb-5">{data.location}</h1> : ''}


                <div className="flex flex-row items-center gap-5">
                    <h1 className="font-semibold text-xl">Contact:</h1>
                    {data.linkedin ? <h1 className="font-light">{data.phone} | {data.email} | {data.linkedin}</h1> : <h1 className="font-light">{data.phone} | {data.email}</h1>}
                </div>

                {
                    data.website || data.github ? 
                    <div className="flex flex-row items-center gap-5">
                        <h1 className="font-semibold text-xl">Portfolio:</h1>
                        <div>
                            {data.website ? <h1>{data.website}</h1> : ''}
                            {data.github ? <h1>{data.github}</h1> : ''}
                        </div>
                    </div> 
                    :
                    ''
                }
            </div>
            <button className="border-1 p-2 w-5xl">Save Resume As PDF</button>
        </div>
    );
}