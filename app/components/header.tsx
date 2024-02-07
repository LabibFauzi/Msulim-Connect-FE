import Link from 'next/link'
import React from 'react'
const Header = () => {
  return (
    <>
        <div className='flex items-center justify-between gap-80 pl-3 h-40'>
            <div className='flex ml-20 bg-white w-96 items-center rounded-lg border border-primaryborder pl-3'>
                <img src="/asets/search.png" className='h-6 w-6 m-2' />
                <input 
                className='flex outline-none text-neutural text-base font-bold'
                type='text'
                placeholder='Cari Pertanyaan'
                />
            </div>
            <div className='flex ml-72 w-96 justify-center items-center gap-5 text-base font-bold'>
                  <Link href='/login' className='text-secondarypresed w-28 h-12 border border-primaryborder rounded-lg flex justify-center items-center'>Masuk</Link>
                  <Link href='/daftar' className='text-white w-28 bg-secondarymain h-12 rounded-lg flex justify-center items-center'>Daftar</Link>
            </div>
        </div>
    </>
  )
}

export default Header