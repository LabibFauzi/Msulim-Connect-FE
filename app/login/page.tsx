import Link from 'next/link'
import React from 'react'
const login = () => {
  return (
    <>
      <div className="flex">
        {/* kiri */}
        <div className="w-1/2 p-4 flex items-center justify-center">
          <div className='flex-col flex gap-5'>
            <h1 className="text-5xl font-bold text-primarymain">Masuk</h1>
            <p className='text-base text-neutural mb-5'>Belum Punya Akun? <Link href='/daftar' className='text-secondarymain cursor-pointer'>Daftar</Link></p>
            <h2 className='text-xl font-bold text-black'>Email</h2>
            <input type="text" className='input w-96 h-16 pl-5 border border-primaryborder rounded-lg outline-none text-neutural text-base' placeholder='Contoh@gmail.com'  />
            <h2 className='text-xl font-bold text-black'>Kata Sandi <span className='text-sm text-secondarymain ml-40 cursor-pointer'>Lupa Kata Sandi?</span></h2>
            <input type="password"  className='input w-96 h-16 pl-5 border border-primaryborder rounded-lg outline-none text-neutural text-base' placeholder='Minimal 8 karakter'  />
            <button className='w-96 h-16 bg-primarypresed rounded-lg text-white text-xl font-bold'>Masuk</button>
          </div>
        </div>

        {/* kanan */}
        <div className="w-1/2 p-4 bg-secondarypresed h-screen">

        </div>
      </div>
    </>
  )
}

export default login