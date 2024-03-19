"use client"
import React from 'react'
import Tanyasection from '../components/section/tanyasection'
const tanyajawab = () => {
  return (
    <>
        <div className='flex w-full flex-col ml-16'>
          <div className='flex flex-row  gap-10 mb-10'>
            <Tanyasection/>
            <Tanyasection/>
          </div>
          <div className='flex flex-row gap-10 mb-10'>
            <Tanyasection/>
            <Tanyasection/>
          </div>
          <div className='flex flex-row gap-10 mb-10'>
            <Tanyasection/>
            <Tanyasection/>
          </div>
        </div>
    </>
  )
}

export default tanyajawab