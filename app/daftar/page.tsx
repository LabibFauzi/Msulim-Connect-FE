import React from 'react'

const daftar = () => {
  return (
    <>
        <div className="flex">
        {/* kiri */}
        <div className="w-1/2 p-4 flex items-center justify-center">
          <div className='flex-col flex gap-5'>
            <h1 className="text-5xl font-bold text-primarymain">Daftar</h1>
            <h2 className='text-xl font-bold text-black'>Email</h2>
            <input type="text" className='input w-96 h-16 pl-5 border border-primaryborder rounded-lg outline-none text-neutural text-base' placeholder='Contoh@gmail.com'  />
            <h2 className='text-xl font-bold text-black'>Kata Sandi </h2>
            <input type="password"  className='input w-96 h-16 pl-5 border border-primaryborder rounded-lg outline-none text-neutural text-base' placeholder='Minimal 8 karakter'  />
            <h2 className='text-xl font-bold text-black'>Masukan Ulang Kata Sandi </h2>
            <input type="password"  className='input w-96 h-16 pl-5 border border-primaryborder rounded-lg outline-none text-neutural text-base' placeholder='********'  />
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

export default daftar