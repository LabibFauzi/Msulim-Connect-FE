'use client'
import Link from 'next/link'
import React, { useState } from 'react'

interface FormErrors {
  password?: string;
  confirmPassword?: string;
}

const Gantisandi = () => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!password) {
      newErrors.password = '*Kata sandi baru harus diisi';
    } else if (password.length < 8) {
      newErrors.password = '*Kata sandi harus memiliki minimal 8 karakter';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = '*Masukkan ulang kata sandi';
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = '*Kata sandi tidak cocok';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (validateForm()) {
      // Lakukan proses ganti kata sandi disini
      window.location.href = '/login';
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };
  return (
      <div className="flex md:flex-row justify-center items-center ">
        {/* kiri */}
        <div className="md:w-1/2 p-4 h-screen flex items-center justify-center cursor-default">
          <div className='flex-col flex gap-10'>
            <h1 className="text-5xl font-bold text-primarymain">Ganti Kata Sandi?</h1>
            <div className='gap-5 flex flex-col'>
              <h2 className='text-xl font-bold text-black'>Masukan Kata Sandi Baru</h2>
              <input 
                type="password" 
                className={`input w-96 h-16 pl-5 border ${errors.password ? 'border-red-500' : 'border-primaryborder'} rounded-lg border-primaryborder outline-none text-neutural text-base`} 
                placeholder='*********' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              {errors.password && <p className="text-red-500">{errors.password}</p>}
              <h2 className='text-xl font-bold text-black'>Masukan Ulang Kata Sandi </h2>
              <input 
                type="password" 
                className={`input w-96 h-16 pl-5 border ${errors.confirmPassword ? 'border-red-500' : 'border-primaryborder'} rounded-lg border-primaryborder outline-none text-neutural text-base`} 
                placeholder='*********' 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
            </div>
            <button
              onClick={handleSubmit}
              className='justify-center items-center flex w-96 h-16 rounded-lg text-white text-xl font-bold bg-secondarymain hover:bg-secondaryhover'
            >
              Masuk
            </button>
          </div> 
        </div>

        {/* kanan */}
        <div className="md:w-1/2 hidden md:block p-4 bg-secondarypresed h-screen"></div>
      </div>
  )
}

export default Gantisandi
