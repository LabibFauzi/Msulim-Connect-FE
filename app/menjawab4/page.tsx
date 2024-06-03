'use client'
import React, { useState } from 'react'
import ReportModel from '../components/model/reportModel';

const Menjawab = () => {
    const [reportCard, setReportCard] = useState(false);
    

    const toggleReport = () => {
    setReportCard(!reportCard);
    };
    const closeReport= ()=>{
        setReportCard(false)
    };

return (
        <div className='flex flex-col ml-16 w-full gap-10 cursor-default'>
            <div className='flex flex-col bg-white rounded-2xl px-6 py-6 gap-5 shadow-lg'>
                <div className='flex flex-row h-16 justify-between items-center'>
                    <div className='flex gap-4 justify-center items-center'>
                        <img src="/asets/profile-picture.png" alt="" className='flex w-10 h-10 rounded-full ' />
                        <div className='flex flex-col '>
                            <h1 className='font-bold text-base'>Ivan M</h1>
                            <h1 className='font-medium text-base text-neutural'>11 jam yang lalu</h1>
                        </div>
                    </div>
                    <button onClick={toggleReport}>
                        <img src="/asets/report.png" alt="" className='flex w-6 h-6 hover:scale-110' />
                    </button>
                </div>
                {reportCard && <ReportModel onClose={closeReport}/>}
                <div className='flex flex-col pl-14 gap-5 pb-10 '>
                    <h1 className='text-2xl font-bold'>Sikap yang diambil saat suka teman lawan jenis?</h1>
                    <form className='flex flex-row w-full gap-5 justify-center'>
                        <textarea spellCheck="false" className='w-full  resize-none outline-none text-xl bg-neutural2 px-5 rounded border pt-4 pb-2 h-16' placeholder='Jawab Pertanyaan' />
                        <button className=' border border-primaryborder rounded-md text-secondarymain w-24 justify-center items-center font-bold hover:scale-105 duration-150'>Kirim</button>
                    </form>
                </div>
            </div>
            <div className='flex flex-col bg-white w-full p-6  gap-10 rounded-2xl'>
                <h1 className='text-2xl font-bold text-secondarymain'>Balasan Pertanyaan</h1>
                <div className='flex flex-col pl-14 pr-2 mb-6'>
                    <div className='flex flex-row h-16 justify-between items-center'>
                        <div className='flex gap-4 justify-center items-center'>
                            <img src="/asets/profile-picture.png" alt="" className='flex w-10 h-10 rounded-full' />
                            <div className='flex flex-col '>
                                <h1 className='font-bold text-base'>Rafi Akmal </h1>
                                <h1 className='font-medium text-base text-neutural'>3 jam yang lalu</h1>
                            </div>
                        </div>
                        <button onClick={toggleReport}>
                            <img src="/asets/report.png" alt="" className='flex w-6 h-6 hover:scale-110' />
                        </button>
                    </div>
                    {reportCard && <ReportModel onClose={closeReport}/>}
                    <div className='flex pl-14'>
                        <h1 className='text-xl font-bold'> 1. Dalam agama Islam, menyukai teman lawan jenis adalah hal yang wajar dan manusiawi. Namun, ada beberapa sikap yang harus diambil agar perasaan tersebut tidak menjerumuskan kita ke dalam dosa: a. Menjaga Hati dan Pandangan b. Menjaga pergaulan c. Menyalurkan perasaan ke hal positif d. Mencari nasihat dan pendampingan
                        </h1>
                    </div>
                </div>
            </div>
        </div>
)
}

export default Menjawab