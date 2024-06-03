'use client'
import React, { useState } from 'react';
import Link from 'next/link'

const Masuk = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateForm = () => {
        let isValid = true;

        if (!email) {
        setEmailError('*Email harus diisi');
        isValid = false;
        } else if (!email.includes('@')) {
        setEmailError('*Email harus mengandung karakter @');
        isValid = false;
        } else {
        setEmailError('');
        }

        if (!password) {
        setPasswordError('*Kata sandi harus diisi');
        isValid = false;
        } else if (password.length < 8) {
        setPasswordError('*Kata sandi minimal 8 karakter');
        isValid = false;
        } else {
        setPasswordError('');
        }

        return isValid;
    };

    const handleSubmit = (e: { key?: string; preventDefault?: any; }) => {
        e.preventDefault();
        if (validateForm()) {
        window.location.href = '/';
        }
    };

    const handleKeyPress = (e: { key: string; }) => {
        if (e.key === 'Enter') {
        handleSubmit(e);
        }
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            {/* kiri */}
            <div className="md:w-1/2 p-4 h-screen flex items-center justify-center">
            <div className='flex-col flex gap-5 cursor-default '>
                <h1 className="text-5xl font-bold text-primarymain">Masuk</h1>
                <p className='text-base text-neutural '>Belum Punya Akun? <Link href='/daftar' className='text-secondarymain cursor-pointer font-bold hover:text-primaryhover duration-150'>Daftar</Link></p>
                <h2 className='text-xl font-bold text-black'>Email</h2>
                <input
                type="text"
                className={`input w-96 h-16 pl-5 border  ${emailError ? 'border-red-500' : 'border-primaryborder'} rounded-lg border-primaryborder outline-none text-neutural text-base`}
                placeholder='Contoh@gmail.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                />
                {emailError && <p className="text-red-500">{emailError}</p>}
                <h2 className='text-xl font-bold text-black'>Kata Sandi <a className='text-sm text-secondarymain ml-40 font-bold hover:text-primaryhover duration-150' href='/lupasandi'>Lupa Kata Sandi?</a></h2>
                <input
                type="password"
                className={`input w-96 h-16 pl-5 border ${passwordError ? 'border-red-500' : 'border-primaryborder'} rounded-lg border-primaryborder outline-none text-neutural text-base`}
                placeholder='Minimal 8 karakter'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                />
                {passwordError && <p className="text-red-500">{passwordError}</p>}
                <button
                onClick={handleSubmit}
                className='justify-center items-center flex w-96 h-16 rounded-lg text-white text-xl font-bold bg-secondarymain hover:bg-secondaryhover duration-150'
                >
                Masuk
                </button>
            </div>
            </div>

            {/* kanan */}
            <div className="md:w-1/2 p-4 bg-secondarypresed h-screen hidden md:block"></div>
        </div>
    );
    };

export default Masuk;