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
    <>
        <div className='flex items-center justify-between px-16 py-10  '>
            <div className=' flex flex-row items-center w-3/4 gap-5'>
                <form className='flex bg-white items-center rounded-lg w-3/4  border h-14 border-primaryborder'>
                    <button className='flex w-16 justify-center h-full items-center'>
                        <img src="/asets/search.png" className='h-6 w-6 m-2 cursor-pointer hover:opacity-50' />
                    </button>
                    <input 
                    className='flex outline-none text-neutural3 text-xl w-3/4 h-full '
                    spellCheck="false"
                    type='text'
                    placeholder='Cari Pertanyaan Dan Artikel...'
                    
                    />
                </form>
                <button 
                className=' bg-white  border rounded-lg border-primaryborder w-12 h-12 justify-center flex items-center hover:scale-105 duration-150' 
                onClick={toggleTambah}>
                    <img src="/asets/plus.png" className='w-6 h-6 flex' alt="" />
                </button>
            </div>
            <div className='flex justify-center items-center gap-4 text-base font-bold cursor-default'>
                    <button onClick={toggleProfile}>
                        <img src="/asets/profile.png" className='flex w-10 h-10' alt=""/>
                    </button>
                    <h1 className='font-bold text-lg cursor-pointer'>Labib Fauzi</h1>
                {profileModel && (
                    <div ref={profileRef}className='flex  absolute mt-96 mr-96'>
                        <div className='flex flex-col justify-center items-center gap-3 z-30  bg-white rounded-lg w-72 h-72 drop-shadow-xl border'>
                            <img src="/asets/profile.png" className='flex w-20 h-20 object-cover' alt="" />
                            <div className='flex items-center flex-col '>
                                <h1 className='font-bold text-2xl'>Labib Fauzi</h1>
                                <h1 className='text-lg font-light'>Contoh@gmail.com</h1>
                            </div>
                            <div className='flex border-y w-full justify-center py-3'>
                                <button  
                                    className='text-secondarymain border rounded-lg border-primaryborder w-28 h-12 justify-center flex items-center hover:scale-105 duration-150' 
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
    </>
    )
}

export default Header