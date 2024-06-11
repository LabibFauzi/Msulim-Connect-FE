import React from 'react'
import '../components/styles/global.css'
import ArtikelCard from '../components/card/artikelcard'
import Link from 'next/link'

const page = () => {
    return (
            <div className='flex flex-col h-full w-full ml-10 md:pr-10  gap-10'>
                <section className=' flex flex-col items-center gap-10 bg-white shadow-lg rounded-lg py-10 px-5'>
                    <div className='flex flex-col gap-2 justify-start w-full'>
                        <h1 className='text-2xl md:text-4xl text-secondarymain font-bold'>Bidang Farmasi Menurut Integrasi Islam</h1>
                        <div className='flex flex-row gap-4'>
                            <p className='text-xs'>5 menit yang lalu</p>
                            <p className='text-xs'>Ditinjau oleh Adim</p>
                            <p className='text-xs'>17 januari 2024</p>
                        </div>
                    </div>
                    <img src="/asets/artikel1.jpg" className='flex w-full h-full md:h-full rounded-lg object-cover' alt="" />
                    <div className='flex flex-col gap-4 justify-center pb-10 '>
                        <h1 className='text-xl md:text-2xl text-neutural3 tracking-wide leading-8 text-pretty '>Islam, agama yang sempurna dan penuh kasih sayang, memandang semua ilmu sebagai anugerah Allah, termasuk ilmu kefarmasian. Mempelajari ilmu kefarmasian bukan hanya bermanfaat bagi individu, tetapi juga menjadi sarana ibadah dan membantu sesama. Integrasi ilmu agama dan ilmu kefarmasian ini merupakan wujud kesempurnaan Islam dalam membawa manfaat bagi seluruh alam.
                            <br /><br />Al-Qur'an dan Hadits, sumber utama ajaran Islam, menjadi panduan bagi ilmu kefarmasian, membuka jalan bagi pemahaman dan pengembangan ilmu kefarmasian yang selaras dengan nilai-nilai Islam, mewujudkan kehidupan sejahtera dan berkah.
                            <br /><br />Agama Islam mengajarkan pentingnya menjaga keseimbangan antara urusan dunia dan akhirat. Kita diminta untuk mempelajari dan menggunakan pengetahuan untuk kebaikan di dunia dan akhirat, sesuai dengan firman Allah dalam QS. Al-Mujadilah ayat 11 yang menyatakan bahwa Allah akan meninggikan orang-orang yang beriman dan yang memiliki ilmu beberapa derajat, karena Dia Maha Mengetahui segala yang kita kerjakan.
                            <br /><br />Farmasi adalah profesi yang mengurus penyediaan obat dari bahan alam atau sintetis untuk pengobatan dan pencegahan penyakit. Para profesional farmasi, dengan pengetahuan luas mereka dalam ilmu alam, fisika, dan kedokteran, bertanggung jawab atas obat-obatan dan menyadari risiko kesalahan yang dapat membahayakan pasien.
                            <br /><br />Sejarah farmasi Islam mencerminkan kontribusi besar terhadap kemajuan ilmu farmasi. Mulai dari perintis seperti Jabir bin Hayyan hingga ilmuwan seperti Ibnu Sina dan Zakariya Ar-Razi, serta pengembangan industri farmasi oleh tokoh seperti Ibnu Zuhr, mereka semua berperan penting dalam memajukan ilmu farmasi.
                            <br /><br />Allah SWT dalam Al-Qur'an menyebutkan beberapa tanaman yang dapat digunakan dalam pengobatan diantaranya adalah kacang adas/lentil, anggur, bawang putih, kurma, jelai/gandum, labu, buah tin, zaitun, jinten hitam, delima, pohon sikat gigi/siwak, jahe yang terdapat dalam berbagai surah seperti Al-Baqarah, An-Nahl, Al-Anam, Surat Yusuf, Surat Yunus, At-Tin, An Nur, Al-Insan. Disebutkan pula penggunaan madu dan propolis dalam Al Qur'an seperti tertera pada surat An Nahl. Selain dalam Al Qur'an, pengobatan dalam Islam juga disebutkan dalam Hadits, diantaranya hadits tentang madu, hadits tentang kurma ajwa, hadis tentang habbatusauda', hadits tentang buah zaitun. bn
                            <br /><br />Dunia medis modern semakin mengakui keutamaan madu, jintan hitam, bekam, kurma, dan air Zamzam sebagai obat herbal yang efektif dalam pencegahan penyakit. Tradisi yang diamalkan oleh Nabi Muhammad SAW dalam kehidupan sehari-hari semakin terbukti memiliki manfaat yang signifikan. 
                            <br /><br />Dalam memilih pengobatan alternatif, kita perlu memperhatikan kehalalan produk yang digunakan. Rasulullah mengingatkan agar tidak menggunakan obat yang diharamkan, terutama yang bahan dasarnya haram dalam Islam. Produk obat yang halal diproduksi dengan mematuhi prinsip-prinsip Syariah, menyebutkan dengan jelas sumber bahan bakunya, serta tidak mengandung zat-zat yang diharamkan seperti alkohol, produk dari hewan yang diharamkan, atau zat-zat lain yang dilarang dalam Islam.
                        </h1>
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

export default page
