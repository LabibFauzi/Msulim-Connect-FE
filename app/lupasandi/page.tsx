'use client'
import React, { useState } from 'react'

  interface Errors {
    email?: string;
  }
  
  const Lupasandi = () => {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState<Errors>({});
  
    const validateForm = () => {
      const newErrors: Errors = {};
      if (!email) {
        newErrors.email = '*Email harus diisi';
      } else if (!email.includes('@')) {
        newErrors.email = '*Email harus mengandung karakter @';
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      if (validateForm()) {
        // Lakukan proses masuk disini
      window.location.href = '/gantisandi';
      }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleSubmit(e);
      }
    };
  return (
    <>
      <div className="flex md:flex-row items-center justify-center">
        {/* kiri */}
        <div className="md:w-1/2 h-screen p-4 flex items-center justify-center cursor-default">
          <div className='flex-col flex gap-10'>
            <h1 className="text-5xl font-bold text-primarymain">Lupa Kata Sandi?</h1>
            <div className='gap-5 flex flex-col'>
            <h2 className='text-xl font-bold text-black'>Email</h2>
            <input 
            type="text" 
            className={`input w-96 h-16 pl-5 border ${errors.email ? 'border-red-500' : 'border-primaryborder'} rounded-lg border-primaryborder outline-none text-neutural text-base`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder='Contoh@gmail.com'
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <button 
            onClick={handleSubmit} 
            className=' justify-center items-center flex w-96 h-16 rounded-lg text-white text-xl font-bold bg-secondarymain hover:bg-secondaryhover duration-150'>
            Masuk</button>
          </div> 
        </div>

        {/* kanan */}
        <div className="md:w-1/2 md:block hidden p-4 bg-secondarypresed h-screen">

        </div>
      </div>
    </>
  )
}

export default Lupasandi