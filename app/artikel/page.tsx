import React from 'react'
import '../components/styles/global.css'
import Link from 'next/link'
import ArtikelCard from '../components/card/artikelcard'
const Artikel = () => {
  return (
      <div className='flex flex-col h-full w-full gap-10 ml-10 md:pr-10'>
        <section className='flex flex-col bg-white w-full md:w-auto h-full md:h-[500px] py-10 px-5  items-center rounded-2xl gap-5 justify-center shadow-lg'>
          <div className='flex items-start w-full justify-start'>
            <h1 className=' text-secondarymain font-bold text-xl md:text-2xl xl:text-3xl'>Artikel Terpopuler</h1>
          </div>
          <Link className='w-full relative overflow-hidden rounded-lg md:rounded-xl' href='/artikelopen'>
            <img src="/asets/artikel1.jpg" className='flex w-full h-full object-coversidenav  hover:scale-105 hover:brightness-75 duration-300 brightness-90' alt="" />
            <div className='w-full h-24 pl-5 md:pl-0 bg-black absolute justify-center items-center flex bottom-0 opacity-0 z-30 transition-opacity duration-300'>
              <h1 className='text-white text-lg md:text-2xl xl:text-3xl font-bold'>Bidang Farmasi Menurut Integrasi Islam</h1>
            </div>
          </Link>
        </section>
        <section className='w-full  flex flex-col justify-center bg-white rounded-2xl gap-5 px-5 py-10 pb-20 cursor-default shadow-lg'>
                <h1 className='text-xl md:text-2xl xl:text-3xl font-bold text-secondarymain items-start'>Artikel Terkini</h1>
                    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-10 md:gap-20 xl:gap-5 w-full justify-center '>
                        <ArtikelCard/>
                        <ArtikelCard/>
                        <ArtikelCard/>
                        <ArtikelCard/>
                        <ArtikelCard/>
                        <ArtikelCard/>
                    </div>
            </section>
        </div>
  )
}

export default Artikel