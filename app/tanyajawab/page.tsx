"use client"
import React from 'react'
import Link from 'next/link'
import Tanyasection from '../components/section/tanyasection'
const tanyajawab = () => {
    return (
        <div className='flex w-full flex-col ml-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-10'>
                <Tanyasection/>
                <Tanyasection/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-10'>
                <Tanyasection/>
                <Tanyasection/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-10'>
                <Tanyasection/>
                <Tanyasection/>
            </div>
        </div>
)
}

export default tanyajawab