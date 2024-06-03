'use client'
import React, { useState } from 'react'

interface Errors {
  nama?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const Daftar = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Errors>({});

  const validateForm = () => {
    const newErrors: Errors = {};

    if (!nama) {
      newErrors.nama = '*Nama harus diisi';
    }

    if (!email) {
      newErrors.email = '*Email harus diisi';
    } else if (!email.includes('@')) {
      newErrors.email = '*Email harus mengandung karakter @';
    }

    if (!password) {
      newErrors.password = '*Kata sandi harus diisi';
    } else if (password.length < 8) {
      newErrors.password = '*Kata sandi minimal 8 karakter';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (validateForm()) {
      // Lakukan proses masuk disini
      window.location.href = '/login';
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      {/* kiri */}
      <div className="md:w-1/2 h-screen p-4 flex items-center justify-center cursor-default">
        <div className='flex-col flex gap-5'>
          <h1 className="text-5xl font-bold text-primarymain">Daftar</h1>
          <h2 className='text-xl font-bold text-black'>Nama</h2>
          <input
            type="text"
            className={`input w-96 h-16 pl-5 border ${errors.nama ? 'border-red-500' : 'border-primaryborder'} rounded-lg border-primaryborder outline-none text-neutural text-base`}
            placeholder='Nama Anda'
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          {errors.nama && <p className="text-red-500">{errors.nama}</p>}
          <h2 className='text-xl font-bold text-black'>Email</h2>
          <input
            type="text"
            className={`input w-96 h-16 pl-5 border ${errors.email ? 'border-red-500' : 'border-primaryborder'} rounded-lg border-primaryborder outline-none text-neutural text-base`}
            placeholder='Contoh@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          <h2 className='text-xl font-bold text-black'>Kata Sandi</h2>
          <input
            type="password"
            className={`input w-96 h-16 pl-5 border ${errors.password ? 'border-red-500' : 'border-primaryborder'} rounded-lg border-primaryborder outline-none text-neutural text-base`}
            placeholder='Minimal 8 karakter'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress} 
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
          <button
            onClick={handleSubmit}
            className='justify-center items-center flex w-96 h-16 rounded-lg text-white text-xl font-bold bg-secondarymain hover:bg-secondaryhover duration-150'
          >
            Daftar
          </button>
        </div>
      </div>

      {/* kanan */}
      <div className="md:w-1/2 p-4 bg-secondarypresed h-screen hidden md:block"></div>
    </div>
  );
};

export default Daftar;