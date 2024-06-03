import React from 'react'
import '../components/styles/global.css'
import Link from 'next/link'
import ArtikelCard from '../components/card/artikelcard'
const Artikel = () => {
  return (
    <>
      <div className='flex flex-col h-full w-full gap-10 ml-16'>
        <section className='w-full bg-white h-[500px] flex flex-col items-center rounded-2xl gap-2 justify-center shadow-lg'>
          <div className='flex items-start w-[90%] justify-start'>
            <h1 className=' text-secondarymain font-bold text-2xl'>Artikel Terpopuler</h1>
          </div>
          <Link className='h-[400px] w-[90%] relative overflow-hidden rounded-lg' href='/artikel1'>
            <img src="/asets/artikel1.jpg" className='flex w-full h-full object-coversidenav  hover:scale-105 hover:brightness-75 duration-300 brightness-90' alt="" />
            <div className='w-full h-24 bg-black absolute justify-center items-center flex bottom-0 opacity-0 z-30 transition-opacity duration-300'>
              <h1 className='text-white text-2xl font-bold'>Bidang Farmasi Menurut Integrasi Islam</h1>
            </div>
          </Link>
        </section>
        <section className='w-full  flex flex-col justify-center items-start bg-white rounded-2xl gap-4 pl-12 px-10 pt-10 pb-20 cursor-default shadow-lg'>
                <h1 className='text-2xl font-bold text-secondarymain items-start'>Artikel Terkini</h1>
                <div className='flex flex-col gap-20 w-full '>
                    <div className='flex flex-row gap-10 w-full justify-center '>
                      <Link className='flex flex-col w-1/5 h-40 gap-1' href='/artikel2'>
                        <img  className='object-cover rounded-lg h-full ' src="/asets/artikel2.jpg" alt="" />
                        <h2 className='text-black font-semibold text-md'>Perempuan dalam Konflik dan Rekonsiliasi: Perspektif Islam</h2>
                      </Link>
                      <Link className='flex flex-col w-1/5 h-40  gap-1 ' href='/artikel3'>
                        <img  className='object-cover rounded-lg h-full ' src="/asets/artikel3.jpg" alt="" />
                        <h2 className='text-black font-semibold text-md'>Perspektif Peradaban Islam Terhadap Pengaruh Budaya Barat di Indonesia</h2>
                      </Link>
                        <ArtikelCard/>
                        <ArtikelCard/>
                        <ArtikelCard/>
                        <ArtikelCard/>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default Artikel