import React from 'react'
import TopikCard from '../card/topikcard';
import PostingCard from '../card/postingcard';
import ArtikelCard from '../card/artikelcard';
import Link from 'next/link';
import '../styles/global.css'

export const Beranda = () => {
return (
    <>
        <div className='w-full flex flex-col ml-16 gap-10'>
            <section className='rounded-2xl overflow-hidden relative section-beranda cursor-default'>
                <img src="/asets/aselole.jpg" className='object-cover w-full rounded-2xl hover:scale-110 duration-300 opacity-95' />
                    <div className='z-30 flex flex-col absolute w-1/2 pl-20 justify-center h-full gap-20'> 
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-5xl font-bold text-white'>Komunitas Online Untuk Umat Islam.</h1>
                        </div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-2xl text-white font-bold'>Terpopuler</p>
                        <div className='flex flex-row gap-5 '>
                            <Link className='flex w-36 h-14 bg-secondarymain justify-center items-center text-lg text-white rounded-xl hover:bg-secondaryhover font-bold duration-200' href='/tanyajawab'>Topik</Link>
                            <Link className='flex w-36 h-14 bg-secondarymain justify-center items-center text-lg text-white rounded-xl hover:bg-secondaryhover font-bold duration-200' href='/postingan'>Postingan</Link>
                            <Link className='flex w-36 h-14 bg-secondarymain justify-center items-center text-lg text-white rounded-xl hover:bg-secondaryhover font-bold duration-200' href='/artikel'>Artikel</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full  flex flex-col justify-center items-start bg-white rounded-2xl gap-4 pl-12 px-10 pt-10 pb-20 cursor-default'>
                <h1 className='text-2xl font-bold text-secondarymain items-start'>Topik Terkini</h1>
                <div className='flex flex-col gap-20 '>
                    <div className='flex flex-row gap-10 w-full justify-center '>
                        <TopikCard/>
                        <TopikCard/>
                        <TopikCard/>
                        <TopikCard/>
                        <TopikCard/>
                        <TopikCard/>
                    </div>
                </div>
            </section>
            <section className='w-full  flex flex-col justify-center items-start bg-white rounded-2xl gap-4 pl-12 px-10 pt-10 pb-20 cursor-default'>
                <h1 className='text-2xl font-bold text-secondarymain items-start'>Postingan Terkini</h1>
                <div className='flex flex-row gap-10 w-full justify-center '>
                    <PostingCard/>
                    <PostingCard/>
                    <PostingCard/>
                    <PostingCard/>
                    <PostingCard/>
                    <PostingCard/>
                </div>
            </section>
            <section className='w-full  flex flex-col justify-center items-start bg-white rounded-2xl gap-4 pl-12 px-10 pt-10 pb-20 cursor-default'>
                <h1 className='text-2xl font-bold text-secondarymain items-start'>Artikel Terkini</h1>
                <div className='flex flex-col gap-20 '>
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
    </> 
)
}
export default Beranda;