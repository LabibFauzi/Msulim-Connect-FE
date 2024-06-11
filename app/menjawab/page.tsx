'use client'
import React, { useState } from 'react'
import BalasanSection from '../components/section/balasansection';
import BalasanUser from '../components/section/balasanuser';
import ReportModel from '../components/model/reportModel';
import Profile from '../components/card/profile';
import BalasanCard from '../components/card/balasancard';

const Menjawab = () => {
    const [reportCard, setReportCard] = useState(false);
    

    const toggleReport = () => {
    setReportCard(!reportCard);
    };
    const closeReport= ()=>{
        setReportCard(false)
    };
return (
        <div className='flex flex-col ml-10 md:mx-10 w-full gap-10 cursor-default'>
            <div className='flex flex-col bg-white rounded-2xl px-6 py-6 gap-5 shadow-lg'>
                <Profile/>
                <div className='flex flex-col pl-14 gap-5 pb-10 '>
                    <h1 className='text-xl md:text-2xl font-bold '>Mau tanya kak, syarat sah shalat itu apa aja? </h1>
                    <form className='flex flex-row w-full gap-5 justify-center'>
                        <textarea spellCheck="false" className='w-full  resize-none outline-none text-xl bg-neutural2 border-2  hover:border-primaryborder px-5 rounded pt-4 pb-2 h-16' placeholder='Jawab Pertanyaan' />
                        <button className='rounded-md text-white w-24 justify-center items-center font-bold bg-secondarymain hover:bg-secondaryhover duration-300'>Kirim</button>
                    </form>
                </div>
            </div>
            <div className='flex flex-col bg-white w-full p-6  gap-10 rounded-2xl'>
                <h1 className='text-2xl font-bold text-secondarymain'>Balasan Pertanyaan</h1>
                <BalasanCard/>
                <BalasanCard/>
                <BalasanCard/>
            </div>
        </div>
)
}

export default Menjawab