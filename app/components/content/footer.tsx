import React from 'react'

const Footer = () => {
  return (
    <>
      <div className=' flex-col flex '>
        <div className='bg-primarypresed text-white p-5 flex flex-col'>
          <div className='flex flex-row items-start'>
              <img src="/asets/logo.png" alt="" className='w-16 h-16  mb-5'/>
            <div className='flex items-center w-screen justify-end gap-5 p-5'>
                  <a href="https://www.youtube.com/@cidukbeban"><img src="/asets/yt.png"  className='w-7 h-7 hover:scale-110 duration-150' /></a>
                  <a href="https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1223490383955845980"><img src="asets/facebook.png"  className='w-5 h-5 hover:scale-110 duration-150'/></a>
                  <a href="https://dribbble.com/"><img src="/asets/tiktok.png"  className='w-5 h-5 hover:scale-110 duration-150'/></a>
                  <a href="https://www.instagram.com/labib.fauzi/"><img src="/asets/ig.png" className='w-5 h-5 hover:scale-110 duration-150 ' /></a>
            </div>
          </div>
            <h1 className=' text-lg'> Website di mana anda dapat bertanya dan <br /> mendapatkan jawaban dari komunitas online.</h1>
        </div>
        <div className='flex bg-secondarymain text-black flex-row justify-between items-center px-10 p-1 '>
          <p className='text-xs font-bold '>©2024 Muslim connect.</p>
          <p className='text-xs font-bold '>Mconnect@gmail.com</p>
        </div>
      </div>
      
    </>
  )
}

export default Footer