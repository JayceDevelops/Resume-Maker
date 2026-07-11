import Phone from '../assets/Phone.svg';
import Email from '../assets/Email.svg';
import LinkedIn from '../assets/linkedin.svg';
import Website from '../assets/Website.svg';
import Github from '../assets/Github.svg';

import { useRef } from 'react';
import html2canvas from 'html2canvas-pro';
import { jsPDF } from "jspdf";

export default function Resume({data}){
    
    let educationClassName = data.education[0].gpa ? 'ml-37 font-semibold' : 'ml-37 font-semibold mb-5';

    const printRef = useRef(null);

    const handleDownload = async () => {
        const element = printRef.current;

        if (!element) {
            return;
        }

        const canvas = await html2canvas(element);
        const dataCanvas = canvas.toDataURL('image/png');

        const pdf = new jsPDF({
            orientation: "portrait",
            unit: 'px',
            format: 'a4'
        });

        const pngProps = pdf.getImageProperties(dataCanvas);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (pngProps.height * pdfWidth) / pngProps.width;

        pdf.addImage(dataCanvas, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('Resume.pdf');
    }

    return (
        <div ref={printRef} className="flex flex-col items-center justify-center gap-5 tracking-wider">
            <div className="flex flex-col shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)] w-475 font-Sans p-10 bg-white">

                {/* Name */}
                <h1 className="font-bold text-3xl w-full text-center mb-1">{data.fName} {data.lName}</h1>

                {/* Location */}
                {data.location ? <h1 className="font-semibold text-sm w-full text-center mb-5">{data.location}</h1> : ''}


                {/* Contact Information */}
                <div className="flex flex-row items-center justify-center gap-5 font-light">

                    {/* Phone Number */}
                    <div className='flex items-center gap-2'>
                        <img className='w-4 h-4' src={Phone}></img>
                        <h1>{data.phone}</h1>
                    </div>

                    <span> | </span>
                    
                    {/* Email */}
                    <div className='flex items-center gap-2'>
                        <img className='w-4 h-4' src={Email}></img>
                        <h1>{data.email}</h1>
                    </div>

                    {/* LinkedIn */}
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
                
                {/* Portfolio Information */}
                {data.website || data.github ? 
                    <div className="flex flex-row items-center justify-center gap-5 font-light mt-2 mb-5">
                        
                        {/* Website */}
                        {data.website 
                            ?
                            <div className='flex items-center gap-2'>
                                <img className='w-4 h-4' src={Website}></img>
                                <h1>{data.website}</h1>
                            </div>

                            :
                            ''
                        } 

                        {/* Github */}
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

                {/* Education Information */}
                <div className='flex items-center gap-10'>
                    <h1 className='font-bold text-xl' >Education:</h1>
                    <div className='flex justify-between w-full'>
                        <h1 className='font-semibold'>{data.education[0].school}</h1>
                        <h1>{data.education[0].start} - {data.education[0].end}</h1>
                    </div>
                </div>

                
                <div className={educationClassName}>{data.education[0].degree} - {data.education[0].fos}</div>

                {data.education[0].gpa ? <div className='ml-37 font-semibold mb-5'>GPA - {data.education[0].gpa}</div> : ''}

                {data.education.map((entry, index) => {
                    
                    if (index > 0){
                        educationClassName = entry.gpa ? 'ml-37 font-semibold' : 'ml-37 font-semibold mb-5';
                        return (
                            <>
                                <div className='flex items-center ml-37 gap-10'>
                                    <div className='flex justify-between w-full'>
                                         <h1 className='font-semibold'>{entry.school}</h1>
                                        <h1>{entry.start} - {entry.end}</h1>
                                    </div>
                                </div>

                                
                                <div className={educationClassName}>{entry.degree} - {entry.fos}</div>

                                {entry.gpa ? <div className='ml-37 font-semibold mb-5'>GPA - {entry.gpa}</div> : ''}
                            </>
                        );
                    }
                })}
            </div>
            <button className='bg-indigo-600 p-3 w-255 rounded-xl text-white font-bold text-xl cursor-pointer' onClick={handleDownload}>Save As PDF</button>
        </div>
    );
}