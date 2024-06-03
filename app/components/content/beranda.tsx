import React from 'react'
import ArtikelCard from '../card/artikelcard';
import Link from 'next/link';
import '../styles/global.css'

export const Beranda = () => {
return (
        <div className='w-full flex items-center flex-col ml-16 gap-10'>
            <section className=' rounded-2xl overflow-hidden relative section-beranda cursor-default shadow-lg'>
                <img src="/asets/beranda.jpg" className='object-cover w-full rounded-2xl brightness-50 hover:scale-105 duration-300' />
                    <div className='z-30 flex flex-col absolute w-1/2 pl-20 justify-center h-full gap-20'> 
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-5xl font-bold text-white'>Komunitas Online Untuk Umat Islam.</h1>
                        </div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-2xl text-white font-bold'>Terpopuler</p>
                        <div className='flex flex-row gap-5 '>
                            <Link className='flex w-36 h-14 bg-secondarymain justify-center items-center text-lg text-white rounded-xl hover:bg-secondaryhover font-bold duration-300' href='/tanyajawab'>Topik</Link>
                            <Link className='flex w-36 h-14 bg-secondarymain justify-center items-center text-lg text-white rounded-xl hover:bg-secondaryhover font-bold duration-300' href='/postingan'>Postingan</Link>
                            <Link className='flex w-36 h-14 bg-secondarymain justify-center items-center text-lg text-white rounded-xl hover:bg-secondaryhover font-bold duration-300' href='/artikel'>Artikel</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full  flex flex-col justify-center items-start bg-white rounded-2xl gap-16 px-10 py-10  cursor-default shadow-lg'>
                <h1 className='text-2xl font-bold text-secondarymain items-start'>Artikel Terkini</h1>
                <div className='flex flex-col gap-20 w-full  '>
                    <div className='flex flex-row gap-10 w-full justify-center '>
                        <Link className='flex flex-col w-1/5 h-40  gap-1 ' href='/artikel1'>
                            <img  className='object-cover rounded-lg h-full ' src="/asets/artikel1.jpg" alt="" />
                            <h2 className='text-black font-semibold text-md'>Bidang Farmasi Menurut Integrasi Islam</h2>
                        </Link>
                        <Link className='flex flex-col w-1/5 h-40  gap-1 ' href='/artikel2'>
                            <img  className='object-cover rounded-lg h-full ' src="/asets/artikel2.jpg" alt="" />
                            <h2 className='text-black font-semibold text-md'>Perempuan dalam Konflik dan Rekonsiliasi: Perspektif Islam</h2>
                        </Link>
                        <Link className='flex flex-col w-1/5 h-40 gap-1 ' href='/artikel3'>
                            <img  className='object-cover rounded-lg h-full ' src="/asets/artikel3.jpg" alt="" />
                            <h2 className='text-black font-semibold text-md'>Perspektif Peradaban Islam Terhadap Pengaruh Budaya Barat di Indonesia</h2>
                        </Link>
                        <ArtikelCard/>
                        <ArtikelCard/>
                        <ArtikelCard/>
                    </div>
                </div>
                <div className='flex flex-col gap-20 w-full  '>
                    <div className='flex flex-row gap-10 w-full justify-center '>
                        <ArtikelCard/>
                        <ArtikelCard/>
                        <ArtikelCard/>
                        <ArtikelCard/>
                        <ArtikelCard/>
                        <ArtikelCard/>
                    </div>
                </div>
            </section>
        </div>
)
}
export default Beranda;