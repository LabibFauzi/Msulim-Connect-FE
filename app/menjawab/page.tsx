'use client'
import React from 'react'
import Profile from '../components/card/profile'
import BalasanSection from '../components/section/balasansection';
import BalasanUser from '../components/section/balasanuser';

const Menjawab = () => {

return (
    <>
        <div className='flex flex-col ml-16 w-full gap-10 cursor-default'>
            <div className='flex flex-col bg-white rounded-2xl px-6 gap-5'>
                <Profile/>
                <div className='flex flex-col pl-14 gap-5 pb-10 '>
                    <h1 className='text-2xl font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit beatae ullam ratione est sequi ab dolorem cupiditate provident molestias illum!</h1>
                    <form className='flex flex-row w-full gap-5 justify-center'>
                        <textarea spellCheck="false" className='w-full  resize-none outline-none text-xl bg-neutural2 px-5 rounded border pt-4 pb-2 h-16' placeholder='Jawab Pertanyaan' />
                        <button className=' border border-primaryborder rounded-md text-secondarymain w-24 justify-center items-center font-bold hover:scale-105 duration-150'>Kirim</button>
                    </form>
                </div>
            </div>
            <div className='flex flex-col bg-white w-full p-6  gap-10 rounded-2xl'>
                <h1 className='text-2xl font-bold text-secondarymain'>Balasan Pertanyaan</h1>
                <BalasanUser/>
                <BalasanSection/>
                <BalasanSection/>
                <BalasanSection/>
                <BalasanSection/>
                <BalasanSection/>
                <BalasanSection/>
                <BalasanSection/>
            </div>
        </div>
    </>
)
}

export default Menjawab