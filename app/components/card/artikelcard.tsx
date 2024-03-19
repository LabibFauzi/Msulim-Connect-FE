import Link from 'next/link'
import React from 'react'

const ArtikelSection = () => {
    return (
        <>
            <Link className='flex flex-col bg-background w-1/5 h-40 hover:scale-105 duration-300  gap-1 ' href='/artikel'>
                <img  className='object-cover w-full hover:opacity-95 duration-150' src="/asets/sapi.png" alt="" />
                <h2 className='text-black font-semibold text-lg'>Judul Artikel</h2>
            </Link>
        </>
    )
}

export default ArtikelSection