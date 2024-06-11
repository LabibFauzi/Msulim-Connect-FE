import Link from 'next/link'
import React from 'react'

const ArtikelSection = () => {
    return (
            <Link className='flex flex-col w-full h-36 md:h-52 xl:h-60 cursor-pointer gap-1' href='/artikelopen'>
                <img src='/asets/artikel1.jpg' className='object-cover rounded-lg md:rounded-xl h-full bg-gray-200'></img>
                <h1 className='text-sm md:text-xl  font-bold'>Bidang Farmasi Menurut Integrasi Islam</h1>
            </Link>
    )
}

export default ArtikelSection