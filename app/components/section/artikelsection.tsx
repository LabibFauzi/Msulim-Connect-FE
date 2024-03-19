import Link from 'next/link'
import React from 'react'

const ArtikelSection = () => {
return (
    <Link className='flex flex-col w-4/12  gap-2 p-2 border-abu border-2 rounded-lg cursor-default' href='/artikelopen'>
        <img src="/asets/zakirnaik.jpg" className='flex w-full object-center h-60 rounded-lg ' alt="" />
        <h1 className='text-xl font-bold '>ini judul artikel</h1>
        <p>kalo ini keterangan Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nesciunt voluptate commodi iure. Aut, corporis. Nihil totam ipsam eos laborum!</p>
    </Link>
)
}

export default ArtikelSection
