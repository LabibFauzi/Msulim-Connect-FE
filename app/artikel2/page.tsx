import React from 'react'
import '../components/styles/global.css'
import ArtikelCard from '../components/card/artikelcard'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <div className='flex flex-col h-full w-full ml-16 gap-10'>
                <section className=' flex flex-col items-center gap-10 bg-white shadow-lg rounded-lg py-10'>
                    <div className='flex flex-col gap-2 justify-start w-11/12 '>
                        <h1 className='text-4xl text-secondarymain font-bold'>Perempuan dalam Konflik dan Rekonsiliasi: Perspektif Islam</h1>
                        <div className='flex flex-row gap-4'>
                            <p className='text-base text-neutural'>10 menit yang lalu</p>
                            <p className='text-base text-neutural'>Ditinjau oleh Admin</p>
                            <p className='text-base text-neutural'>17 januari 2024</p>
                        </div>
                    </div>
                    <img src="/asets/artikel2.jpg" className='flex w-11/12 rounded-lg artikelopen-img object-cover' alt="" />
                    <div className='flex flex-col gap-4 justify-center w-11/12 pb-10 '>
                        <h1 className='text-2xl text-neutural3  tracking-wide leading-8 text-pretty '>Konflik gender dan rekonsiliasi dalam Islam merupakan topik yang kompleks dan sensitif. Konflik ini muncul dari berbagai aspek, seperti peran gender dalam ibadah, hak-hak perempuan dalam hukum Islam, dan perdebatan tentang kesetaraan gender dalam masyarakat Islam. Rekonsiliasi gender dalam Islam mengacu pada upaya untuk mengatasi dan mengurangi konflik tersebut dengan memahami dan mengamalkan ajaran Islam yang lebih inklusif dan egaliter.
                            <br /><br />Konflik gender dalam Islam, yang diakibatkan oleh berbagai faktor seperti perbedaan penafsiran ayat Al-Qur'an dan hadits, serta norma dan tradisi budaya, memiliki dampak signifikan pada masyarakat Islam. Dampak ini termasuk stereotip dan diskriminasi terhadap perempuan, keterbatasan akses terhadap pendidikan dan peluang, peningkatan kekerasan terhadap perempuan, dan melemahnya komunitas Muslim.
                            <br /><br />Rekonsiliasi laki-laki dan perempuan dalam islam dapat dicapai dengan memahami dan mengamalkan ajaran islam yang lebih inklusif dan egaliter. Salah satu caranya adalah dengan memahami ayat-ayat Al-Qur'an yang menjelaskan kesetaraan gender, seperti QS An-Nahl ayat 97 danAn-NIsa ayat 32.Ayat-ayat tersebut menunjukkan bahwa Allah tidak membeda-bedakan perempuan dan laki-laki dalam berbagai aspek kehidupan termasuk ibadah. 
                            <br /><br />Rekonsiliasi gender dalam Islam adalah upaya untuk mengatasi kesenjangan dan ketidakadilan antara laki-laki dan perempuan dalam masyarakat Islam. Upaya ini berlandaskan pada pemahaman dan pengamalan ajaran Islam yang lebih inklusif dan egaliter.
                            <br /><br />Salah satu kunci utama rekonsiliasi gender adalah memahami ayat-ayat Al-Qur'an yang menjelaskan kesetaraan gender. Contohnya, QS An-Nahl ayat 97 dan An-Nisa ayat 32. Ayat-ayat tersebut menegaskan bahwa Allah SWT tidak membeda-bedakan perempuan dan laki-laki dalam berbagai aspek kehidupan, termasuk ibadah.
                            <br /><br />Rekonsiliasi gender dalam Islam adalah proses yang berkelanjutan dan membutuhkan komitmen dari semua pihak. Dengan terus belajar, berdialog, dan berkolaborasi, umat Islam dapat membangun masyarakat yang lebih adil, inklusif, dan sejahtera bagi semua, di mana laki-laki dan perempuan memiliki kesempatan yang sama untuk mencapai potensi penuh mereka dan berkontribusi pada kemajuan bersama.
                        </h1>
                    </div>
                </section>
                <section className='w-full  flex flex-col justify-center items-start bg-white rounded-2xl gap-4 pl-12 px-10 pt-10 pb-20 cursor-default shadow-lg'>
                    <h1 className='text-2xl font-bold text-secondarymain items-start'>Artikel Terkait</h1>
                    <div className='flex flex-col gap-20 w-full'>
                        <div className='flex flex-row gap-10 w-full justify-center '>
                            <Link className='flex flex-col w-1/5 h-40 gap-1 ' href='/artikel1'>
                                <img  className='object-cover rounded-lg h-full ' src="/asets/artikel1.jpg" alt="" />
                                <h2 className='text-black font-semibold text-md'>Bidang Farmasi Menurut Integrasi Islam</h2>
                            </Link>
                            <Link className='flex flex-col w-1/5 h-40 gap-1 ' href='/artikel3'>
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

export default page
