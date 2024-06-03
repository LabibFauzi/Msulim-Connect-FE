'use client'
import React, { useState } from 'react'
import ShareModel from '../components/model/share'
import ReportModel from '../components/model/reportModel';

const PostinganIslami = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0); 
  const [ShareCard, setShareCard] = useState(false);
  const [reportCard, setReportCard] = useState(false);

  const toggleReport = () => {
  setReportCard(!reportCard);
  };
  const closeReport= ()=>{
      setReportCard(false)
  };
  const toggleShare = () => {
  setShareCard(!ShareCard);
  };
  const closeShare= ()=>{
      setShareCard(false)
  };

  const handleLikeClick = () => {
    setLiked(!liked);
    setLikeCount(prevCount => liked ? prevCount - 1 : prevCount + 1); 
  };

  const handleDoubleClick = () => {
    if (!liked) {
      setLiked(true);
      setLikeCount(likeCount + 1);
    }
  };

  return (
      <div className='flex flex-col items-center gap-10'>
        <section className='flex flex-col w-2/5 h-1/2 bg-white rounded-2xl px-4 py-6 gap-3 select-none shadow-lg'>
          <div className='flex flex-row h-16 justify-between items-center'>
              <div className='flex gap-4 justify-center items-center'>
                  <img src="/asets/profile-picture.png" alt="" className='flex w-10 h-10 rounded-full' />
                  <div className='flex flex-col '>
                      <h1 className='font-bold text-base'>Labib Fauzi</h1>
                      <h1 className='font-medium text-base text-neutural'>1 jam yang lalu</h1>
                  </div>
              </div>
              <button onClick={toggleReport}>
                  <img src="/asets/report.png" alt="" className='flex w-6 h-6 hover:scale-110' />
              </button>
          </div>
          {reportCard && <ReportModel onClose={closeReport}/>}
          <picture className='relative' onDoubleClick={handleDoubleClick}>
            <img src='/asets/posting1.png' className='posting-img' alt="" />
          </picture>
          <div className='flex flex-row gap-6 mt-2'>
            <img 
              src={liked ? "/asets/filed_like.png" : "/asets/like.png"} 
              alt="" 
              className='w-8 h-8 cursor-pointer transition duration-300 transform hover:scale-110 hover:opacity-70' 
              onClick={handleLikeClick} 
            />
            <img 
              src="/asets/share.png" alt="" 
              className='w-8 h-8  cursor-pointer transition duration-300 transform hover:scale-110 hover:opacity-70'
              onClick={toggleShare}
            />
            {ShareCard && <ShareModel onClose={closeShare}/>}
          </div>
          {likeCount !== 0 && (
            <h1 className='font-semibold text-base'>{likeCount} kali disukai</h1>
          )}
          <h1 className='font-normal text-base'> <span className='font-extrabold'>Admin</span> Seringlah beristigfar itulah caramu meminta maaf kepada Allah dari dosa dosamu.</h1>
        </section> 
        <section className='flex flex-col w-2/5 h-1/2 bg-white rounded-2xl px-4 py-6 gap-3 select-none shadow-lg'>
          <div className='flex flex-row h-16 justify-between items-center'>
              <div className='flex gap-4 justify-center items-center'>
                  <img src="/asets/profile-picture.png" alt="" className='flex w-10 h-10 rounded-full' />
                  <div className='flex flex-col '>
                      <h1 className='font-bold text-base'>Rafi Akmal</h1>
                      <h1 className='font-medium text-base text-neutural'>3 jam yang lalu</h1>
                  </div>
              </div>
              <button onClick={toggleReport}>
                  <img src="/asets/report.png" alt="" className='flex w-6 h-6 hover:scale-110' />
              </button>
          </div>
          {reportCard && <ReportModel onClose={closeReport}/>}
          <picture className='relative' onDoubleClick={handleDoubleClick}>
            <img src='/asets/posting2.png' className='posting-img' alt="" />
          </picture>
          <div className='flex flex-row gap-6 mt-2'>
            <img 
              src={liked ? "/asets/filed_like.png" : "/asets/like.png"} 
              alt="" 
              className='w-8 h-8 cursor-pointer transition duration-300 transform hover:scale-110 hover:opacity-70' 
              onClick={handleLikeClick} 
            />
            <img 
              src="/asets/share.png" alt="" 
              className='w-8 h-8  cursor-pointer transition duration-300 transform hover:scale-110 hover:opacity-70'
              onClick={toggleShare}
            />
            {ShareCard && <ShareModel onClose={closeShare}/>}
          </div>
          {likeCount !== 0 && (
            <h1 className='font-semibold text-base'>{likeCount} kali disukai</h1>
          )}
          <h1 className='font-normal text-base'> <span className='font-extrabold'>Admin</span> Kesedihan yang kamu alami membentukmu menjadi pribadi yang lebih kuat.</h1>
        </section> 
        <section className='flex flex-col w-2/5 h-1/2 bg-white rounded-2xl px-4 py-6 gap-3 select-none shadow-lg'>
          <div className='flex flex-row h-16 justify-between items-center'>
              <div className='flex gap-4 justify-center items-center'>
                  <img src="/asets/profile-picture.png" alt="" className='flex w-10 h-10 rounded-full' />
                  <div className='flex flex-col '>
                      <h1 className='font-bold text-base'>Ferdyan Angkara</h1>
                      <h1 className='font-medium text-base text-neutural'>5 jam yang lalu</h1>
                  </div>
              </div>
              <button onClick={toggleReport}>
                  <img src="/asets/report.png" alt="" className='flex w-6 h-6 hover:scale-110' />
              </button>
          </div>
          {reportCard && <ReportModel onClose={closeReport}/>}
          <picture className='relative' onDoubleClick={handleDoubleClick}>
            <img src='/asets/posting3.png' className='posting-img' alt="" />
          </picture>
          <div className='flex flex-row gap-6 mt-2'>
            <img 
              src={liked ? "/asets/filed_like.png" : "/asets/like.png"} 
              alt="" 
              className='w-8 h-8 cursor-pointer transition duration-300 transform hover:scale-110 hover:opacity-70' 
              onClick={handleLikeClick} 
            />
            <img 
              src="/asets/share.png" alt="" 
              className='w-8 h-8  cursor-pointer transition duration-300 transform hover:scale-110 hover:opacity-70'
              onClick={toggleShare}
            />
            {ShareCard && <ShareModel onClose={closeShare}/>}
          </div>
          {likeCount !== 0 && (
            <h1 className='font-semibold text-base'>{likeCount} kali disukai</h1>
          )}
          <h1 className='font-normal text-base'> <span className='font-extrabold'>Admin</span> Seberat beratnya ujian, Allah tidak akan memberikan ujian yang kamu tidak bisa hadapi</h1>
        </section> 
      </div>
  )
}

export default PostinganIslami