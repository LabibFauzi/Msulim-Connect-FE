import React from 'react'
import '../components/styles/global.css'
import Link from 'next/link'
import ArtikelSection from '../components/section/artikelsection'
const Artikel = () => {
  return (
    <>
      <div className='flex flex-col h-full w-full gap-10'>
        <aside className='aside-artikel ml-16 flex flex-col items-center rounded-xl gap-2 justify-center'>
          <div className='w-full items-start pl-14 text-secondarymain font-bold text-2xl'>
            Artikel Terpopuler
          </div>
          <Link className='h-5/6 w-11/12 relative overflow-hidden rounded-xl' href='/artikelopen'>
            <img src="/asets/aselole.jpg" className='flex w-full h-full object-cover  hover:scale-110 duration-300' alt="" />
            <div className='w-full h-24 bg-black absolute justify-center items-center flex bottom-0 opacity-0 z-30 transition-opacity duration-300'>
              <h1 className='text-white text-4xl font-bold'>Judul Artikel</h1>
            </div>
          </Link>
        </aside>
        <aside className='w-full ml-16  flex flex-col justify-center items-start bg-white rounded-2xl gap-4 pl-12 px-10 pt-10 pb-20 cursor-default'>
            <h1 className='text-2xl font-bold text-secondarymain items-start'>Artikel Terkini</h1>
              <section className='flex flex-row gap-4 mb-10'>
                <ArtikelSection/>
                <ArtikelSection/>
                <ArtikelSection/>
              </section>
              <section className='flex flex-row gap-4 mb-10'>
                <ArtikelSection/>
                <ArtikelSection/>
                <ArtikelSection/>
              </section>
        </aside>
      </div>
    </>
  )
}

export default Artikel