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
                        <h1 className='text-4xl text-secondarymain font-bold'>Perspektif Peradaban Islam Terhadap Pengaruh Budaya Barat di Indonesia</h1>
                        <div className='flex flex-row gap-4'>
                            <p className='text-base text-neutural'>15 menit yang lalu</p>
                            <p className='text-base text-neutural'>Ditinjau oleh Admin</p>
                            <p className='text-base text-neutural'>17 januari 2024</p>
                        </div>
                    </div>
                    <img src="/asets/artikel3.jpg" className='flex w-11/12 rounded-lg artikelopen-img object-cover' alt="" />
                    <div className='flex flex-col gap-4 justify-center w-11/12 pb-10'>
                        <h1 className='text-2xl text-neutural3  tracking-wide leading-8 text-pretty '>Pengaruh budaya asing di Indonesia, khususnya budaya Barat, memang terasa semakin kuat di era modern. Namun, jika ditelusuri lebih jauh, percampuran budaya di Indonesia telah berlangsung sejak lama. Sejak abad ke-7, Indonesia telah menjadi bagian penting dalam jalur perdagangan maritim yang menghubungkan berbagai peradaban. Hal ini membawa pertukaran budaya yang signifikan, termasuk masuknya agama Islam pada abad ke-13.Apa jadinya jika kita melihat pengaruh budaya Barat dari perspektif sejarah peradaban Islam di Indonesia?
                            <br/><br/>1.Sejak era kolonialisme, budaya Barat telah merasuki Indonesia melalui sistem pendidikan, administrasi, dan teknologi Belanda. Setelah kemerdekaan, pengaruhnya semakin kuat melalui media massa dan globalisasi. Teknologi dan media sosial mempercepat penyebaran budaya Barat, mendominasi ruang publik dengan gaya hidup, fashion, musik, dan film yang menggeser tradisi lokal.Dari perspektif Islam, teknologi dan media Barat dapat menjadi alat netral, namun dominasi konten yang tidak sejalan dengan nilai-nilai Islam dapat merusak identitas dan moral masyarakat. Penting untuk memfilter konten, memanfaatkan teknologi untuk dakwah, memperkuat pendidikan Islam, meningkatkan literasi digital, dan menjaga identitas budaya untuk membangun peradaban Islam yang kuat di era digital.
                            <br/><br/>2.Gaya hidup dan nilai budaya Barat yang individualistis dan materialistis bertolak belakang dengan nilai kolektif dan spiritual budaya Islam dan lokal Indonesia. Hal ini berakibat pada pudarnya solidaritas, kesenjangan sosial, memudarnya nilai agama, dan hilangnya identitas budaya. Mempertahankan nilai-nilai Islam dan lokal melalui pendidikan, penguatan budaya lokal, dan pembatasan pengaruh negatif budaya asing menjadi kunci untuk membangun masyarakat yang harmonis, sejahtera, dan bermoral.
                            <br/><br/>3.Sistem pendidikan Indonesia yang terinspirasi Barat, dengan fokus pada sains dan teknologi, mengikis budaya lokal dan nilai-nilai Islam. Hal ini menyebabkan pudarnya pemahaman budaya dan agama, lemahnya moralitas, dan kesenjangan sosial. Diperlukan evaluasi sistem pendidikan untuk menyeimbangkan ilmu pengetahuan dengan pendidikan agama dan budaya, membangun generasi muda yang cerdas, bermoral, dan berbudaya.
                            <br /><br />4. budaya konsumerisme dan individualisme Barat bertentangan dengan nilai-nilai budaya lokal dan Islam yang menjunjung tinggi kesederhanaan, gotong royong, dan solidaritas.Dominasi budaya Barat juga dapat mengancam kelestarian budaya lokal. Produk-produk budaya luar negeri yang dianggap lebih modern dan bergengsi, sering kali menggeser produk budaya lokal yang memiliki nilai-nilai luhur dan makna mendalam.Namun, berbagai upaya dilakukan untuk melestarikan budaya lokal dan nilai-nilai Islam. Upaya-upaya ini penting untuk memperkuat identitas budaya, meningkatkan kesejahteraan spiritual, dan mendukung ekonomi lokal.Pemerintah, organisasi keagamaan, dan komunitas budaya aktif menyelenggarakan acara dan program, seperti pendidikan agama, dakwah di media sosial, festival budaya, dan pertunjukan seni tradisional. Upaya-upaya ini perlu didukung oleh semua pihak agar budaya lokal dan nilai-nilai Islam dapat terus lestari dan menjadi pedoman hidup masyarakat Indonesia.
                            <br /><br />Kesimpulan Pengaruh budaya Barat membawa dampak positif dan negatif bagi Indonesia. Kemajuan ilmu pengetahuan dan teknologi bermanfaat, namun budaya konsumerisme dan individualisme bertentangan dengan nilai-nilai budaya lokal dan Islam. Masyarakat Indonesia perlu menjaga nilai-nilai luhur dengan melestarikan budaya lokal dan nilai-nilai Islam, serta membuka diri terhadap kemajuan positif dari budaya lain. Penting untuk menyaring pengaruh negatif budaya asing agar identitas budaya dan nilai-nilai agama tidak terkikis. Dengan keseimbangan ini, Indonesia dapat membangun masyarakat yang maju, sejahtera, dan berbudaya luhur di era globalisasi.
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
                            <Link className='flex flex-col w-1/5 h-40 gap-1 ' href='/artikel2'>
                                <img  className='object-cover rounded-lg h-full ' src="/asets/artikel2.jpg" alt="" />
                                <h2 className='text-black font-semibold text-md'>Perempuan dalam Konflik dan Rekonsiliasi: Perspektif Islam</h2>
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
