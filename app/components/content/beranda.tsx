import React from 'react'
import ArtikelCard from '../card/artikelcard';
import Link from 'next/link';
import '../styles/global.css'

export const Beranda = () => {
return (
        <div className='w-full flex items-center flex-col ml-10 md:pr-10 gap-10'>
            <section className=' flex rounded-2xl overflow-hidden relative w-full md:h-[400px] xl:h-[500px] h-[300px] cursor-default shadow-lg'>
                <img src="/asets/beranda.jpg" className='object-cover w-full rounded-2xl brightness-50 md:hover:scale-105 duration-300' />
                    <div className='z-30 flex flex-col absolute md:w-1/2 w-4/5 md:pl-20 px-5 justify-center h-full gap-20'> 
                        <div className='flex flex-col gap-2'>
                            <h1 className='md:text-5xl xl:text-6xl text-3xl font-bold text-white'>Komunitas Online Untuk Umat Islam.</h1>
                        </div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-xl md:text-2xl xl:text-3xl text-white font-bold'>Terpopuler</p>
                        <div className='flex flex-row gap-5 '>
                            <Link className='flex w-36 md:w-40 h-14 md:h-16 bg-secondarymain justify-center items-center xl:text-xl md:text-lg text-xs text-white rounded-xl hover:bg-secondaryhover font-bold duration-300' href='/tanyajawab'>Topik</Link>
                            <Link className='flex w-36 md:w-40 h-14 md:h-16 bg-secondarymain justify-center items-center xl:text-xl md:text-lg text-xs text-white rounded-xl hover:bg-secondaryhover font-bold duration-300' href='/postingan'>Postingan</Link>
                            <Link className='flex w-36 md:w-40 h-14 md:h-16 bg-secondarymain justify-center items-center xl:text-xl md:text-lg text-xs text-white rounded-xl hover:bg-secondaryhover font-bold duration-300' href='/artikel'>Artikel</Link>
                        </div>
                    </div>
                </div>
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
export default Beranda;