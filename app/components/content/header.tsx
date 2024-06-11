'use client'
import React, { useEffect, useRef, useState } from 'react'
import TambahModel from '../model/tambahModel'
import ValidateModel from '../model/validateOut'
const Header : React.FC = () => {
    const [profileModel, setProfileModel] = useState(false);
    const [tambahModel, setTambahModel] = useState(false);
    const [validateOutModel, setValidateModel] = useState(false);

    //toggleprofile
    const toggleProfile = () => {
        setProfileModel(!profileModel);
    };

    //toggle tambah//
    const toggleTambah = () => {
        
        setTambahModel(!tambahModel);
    };
    const closeTambah = ()=> {
        setTambahModel(false)
    }

    //togglevalidateout//
    const toggleValidateOut = () => {
        setValidateModel(!validateOutModel);
    };
    const closeValidate = () => {
        setValidateModel(false)
    }
    
    //click outside//
    const profileRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
                setProfileModel(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [profileRef]);

return (
    <div>
        <div className='flex items-center justify-between mx-10 my-10 mr-8  '>
            <div className=' flex flex-row items-center gap-2 w-full md:w-auto'>
                <form className='flex bg-white items-center rounded-lg w-[80%] md:w-[400px] xl:w-[500px] border-2 h-14 hover:border-primaryborder'>
                    <button className='flex w-16 justify-center h-full items-center'>
                        <img src="/asets/search.png" className='h-5 w-5 m-2 cursor-pointer hover:opacity-50' />
                    </button>   
                    <input 
                    className='flex outline-none text-neutural3 text-lg md:text-xl'
                    spellCheck="false"
                    type='text'
                    placeholder='Cari konten terkait...'
                    />
                </form>
                <button 
                className='rounded-lg w-10 h-12 justify-center flex items-center bg-secondarymain hover:bg-secondaryhover duration-300' 
                onClick={toggleTambah}>
                    <img src="/asets/plus.png" alt="" className='w-4 md:w-5 h-4 md:h-5' />
                </button>
            </div>
            <div className='flex justify-center items-center gap-4 text-base font-bold cursor-default'>
                    <button onClick={toggleProfile}>
                        <img src="/asets/profile-picture.png" className='flex w-12 h-12 rounded-full' alt=""/>
                    </button>
                    <h1 className=' hidden md:flex font-bold text-lg md:text-xl cursor-pointer'>Labib Fauzi</h1>
                {profileModel && (
                    <div ref={profileRef}className='flex absolute mt-96 mr-72 md:mr-96 '>
                        <div className='flex flex-col justify-center items-center gap-3 z-50 bg-white rounded-lg w-72 h-72 drop-shadow-xl border'>
                            <img src="/asets/profile-picture.png" className='flex w-20 h-20 object-cover rounded-full' alt="" />
                            <div className='flex items-center flex-col '>
                                <h1 className='font-bold text-2xl'>Labib Fauzi</h1>
                                <h1 className='text-lg font-light'>Contoh@gmail.com</h1>
                            </div>
                            <div className='flex border-y w-full justify-center py-3'>
                                <button  
                                    className='text-white bg-secondarymain hover:bg-secondaryhover duration-300 rounded-lg w-28 h-12 justify-center flex items-center' 
                                    onClick={toggleValidateOut}
                                    >Keluar
                                </button>
                            </div>
                        </div>  
                    </div>
                )}
            </div>
        </div>
        {tambahModel && <TambahModel onClose={closeTambah} />}
        {validateOutModel &&< ValidateModel onClose={closeValidate}/>}
    </div>
    )
}

export default Header