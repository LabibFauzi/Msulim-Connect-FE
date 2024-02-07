import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='h-72 flex-col flex '>

        <div className='bg-primarypresed text-white p-10 flex flex-col'>
          <div className='flex flex-row items-start'>
              <img src="/asets/logo.png" alt="" className='w-20 h-20  mb-10'/>
            <div className='flex items-center w-screen justify-end gap-5 p-5'>
                  <a href="https://www.youtube.com/@cidukbeban"><img src="/asets/yt.png"  className='w-8 h-8' /></a>
                  <a href=""><img src="asets/facebook.png"  className='w-6 h-6'/></a>
                  <a href=""><img src="/asets/tiktok.png"  className='w-6 h-6'/></a>
                  <a href=""><img src="/asets/ig.png" className='w-6 h-6' /></a>
            </div>
          </div>
            <h1 className='font-bold text-xl'> Website di mana anda dapat bertanya dan <br /> mendapatkan jawaban dari komunitas online.</h1>
        </div>

        <div className='flex bg-secondarymain text-black flex-row justify-between items-center px-10 p-2 '>
          <p className='text-base font-bold '>©2024 Muslim connect.</p>
          <p className='text-base font-bold '>Mconnect@gmail.com</p>
        </div>
      </div>
      
    </>
  )
}

export default Footer