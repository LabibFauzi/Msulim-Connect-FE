"use client"
import React from 'react'
import Link from 'next/link'
const tanyajawab = () => {
    return (
    <>
        <div className='flex w-full flex-col ml-16'>
            <div className='flex flex-row  gap-10 mb-10'>
                <div className='flex flex-col bg-white w-1/2 h-56 rounded-2xl p-4 gap-2 shadow-md cursor-default hover:shadow-lg duration-150'>
                    <div className='flex flex-row h-16 justify-between items-center'>
                    <div className='flex gap-4'>
                        <img src="/asets/profile-picture.png" alt="" className='flex w-10 h-10 rounded-full ' />
                        <div className='flex flex-col '>
                            <h1 className='font-bold text-sm'>Labib Fauzi</h1>
                            <h1 className='font-bold text-sm text-neutural'>1 jam yang lalu</h1>
                        </div>
                    </div>
                    </div>
                    <div className='ml-14 flex flex-col gap-4 '>
                        <h1 className='font-bold text-xl'>Mau tanya, syarat sah shalat itu apa aja? </h1>
                        <Link  className='font-bold text-xl text-secondarymain hover:text-secondaryhover duration-150 w-20' href='/menjawab'>Jawab</Link>
                    </div>
                </div>
                <div className='flex flex-col bg-white w-1/2 h-56 rounded-2xl p-4 gap-2 shadow-md cursor-default hover:shadow-lg duration-150'>
                    <div className='flex flex-row h-16 justify-between items-center'>
                        <div className='flex gap-4'>
                            <img src="/asets/profile-picture.png" alt="" className='flex w-10 h-10 rounded-full ' />                  
                        <div className='flex flex-col '>
                            <h1 className='font-bold text-sm'>Rafi Akmal</h1>
                            <h1 className='font-bold text-sm text-neutural'>3 jam yang lalu</h1>
                        </div>
                        </div>
                    </div>
                    <div className='ml-14 flex flex-col gap-4 '>
                        <h1 className='font-bold text-xl'>Apa sih zakat mal itu?</h1>
                        <Link  className='font-bold text-xl text-secondarymain hover:text-secondaryhover duration-150 w-20' href='/menjawab2'>Jawab</Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-row gap-10 mb-10'>
                <div className='flex flex-col bg-white w-1/2 h-56 rounded-2xl p-4 gap-2 shadow-md cursor-default hover:shadow-lg duration-150'>
                    <div className='flex flex-row h-16 justify-between items-center'>
                        <div className='flex gap-4'>
                            <img src="/asets/profile-picture.png" alt="" className='flex w-10 h-10 rounded-full ' />
                        <div className='flex flex-col '>
                            <h1 className='font-bold text-sm'>Ferdyan Angkara</h1>
                            <h1 className='font-bold text-sm text-neutural'>10 jam  yang lalu</h1>
                        </div>
                        </div>
                    </div>
                    <div className='ml-14 flex flex-col gap-4 '>
                        <h1 className='font-bold text-xl'>Saya ingin bertanya, bagaimana cara istiqomah dalam beribadah?</h1>
                        <Link  className='font-bold text-xl text-secondarymain hover:text-secondaryhover duration-150 w-20' href='/menjawab3'>Jawab</Link>
                    </div>
                </div>
                <div className='flex flex-col bg-white w-1/2 h-56 rounded-2xl p-4 gap-2 shadow-md cursor-default hover:shadow-lg duration-150'>
                    <div className='flex flex-row h-16 justify-between items-center'>
                        <div className='flex gap-4'>
                            <img src="/asets/profile-picture.png" alt="" className='flex w-10 h-10 rounded-full ' /> 
                        <div className='flex flex-col '>
                            <h1 className='font-bold text-sm'>Ivan M</h1>
                            <h1 className='font-bold text-sm text-neutural'>11 jam yang lalu</h1>
                        </div>
                        </div>
                    </div>
                    <div className='ml-14 flex flex-col gap-4 '>
                        <h1 className='font-bold text-xl'>Sikap yang diambil saat suka teman lawan jenis?</h1>
                        <Link  className='font-bold text-xl text-secondarymain hover:text-secondaryhover duration-150 w-20' href='/menjawab4'>Jawab</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default tanyajawab