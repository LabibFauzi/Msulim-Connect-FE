import Link from 'next/link'
import React from 'react'
import Profile from '../card/profile'
const  Tanyasection = () => {
return (
        <div className='flex flex-col bg-white md:w-[300px] xl:w-[450px] w-[250px] h-56 rounded-2xl p-4 gap-2 shadow-md cursor-default hover:shadow-lg duration-150'>
            <Profile/>
            <div className='flex flex-col gap-4 pl-14 '>
                <h1 className='font-bold text-lg md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, dolore.</h1>
                <Link  className='font-bold text-lg md:text-xl text-secondarymain hover:text-secondaryhover duration-150 w-20' href='/menjawab'>Jawab</Link>
            </div>
        
        </div>

)
}

export default Tanyasection