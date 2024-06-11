import React from 'react'

const Footer = () => {
  return (
      <div className=' flex-col flex w-full '>
        <div className='bg-primarypresed text-white px-5 py-2 md:py-5 flex flex-col'>
          <div className='flex flex-row items-start'>
              <img src="/asets/logo.png" alt="" className='w-16 h-16 md:mb-5'/>
            <div className='flex items-center w-screen justify-end gap-5 p-5'>
                  <a href="#"><img src="/asets/yt.png"  className='w-7 h-7 hover:scale-110 duration-150' /></a>
                  <a href="#"><img src="asets/facebook.png"  className='w-5 h-5 hover:scale-110 duration-150'/></a>
                  <a href="#"><img src="/asets/tiktok.png"  className='w-5 h-5 hover:scale-110 duration-150'/></a>
                  <a href="#"><img src="/asets/ig.png" className='w-5 h-5 hover:scale-110 duration-150 ' /></a>
            </div>
          </div>
            <h1 className=' text-lg hidden md:flex'> Website di mana anda dapat bertanya dan <br /> mendapatkan jawaban dari komunitas online.</h1>
        </div>
        <div className='flex bg-secondarymain text-black flex-row justify-between items-center px-5 py-1 '>
          <p className='text-xs font-bold '>©2024 Muslim connect.</p>
          <p className='text-xs font-bold '>Mconnect@gmail.com</p>
        </div>
      </div>
  )
}

export default Footer