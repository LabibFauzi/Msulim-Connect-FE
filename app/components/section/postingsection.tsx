'use client'
import React, { useState } from 'react';
import Profile from '../card/profile';
import '../styles/global.css'

const PostingSection = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0); 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/asets/zakirturun.jpg", "/asets/zakirnaik.jpg", "/asets/aselole.jpg"]; 

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

  const handleSlideLeft = () => {
    setCurrentImageIndex(prevIndex => prevIndex === 0 ? 0 : prevIndex - 1);
  };

  const handleSlideRight = () => {
    setCurrentImageIndex(prevIndex => prevIndex === images.length - 1 ? images.length - 1 : prevIndex + 1);
  };

  return (
    <section className='flex flex-col w-2/5 h-1/2 bg-white rounded-2xl px-4 py-6 gap-3 select-none shadow-lg'>
      <Profile />
      <picture className='relative' onDoubleClick={handleDoubleClick}>
        <img src={images[currentImageIndex]} className='posting-img' alt="" />
        <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between px-4'>
          <button onClick={handleSlideLeft}>
            <img src="/asets/slideKiri.png" className={`hover:opacity-80 duration-150 w-7 h-7 z-30 cursor-pointer ${currentImageIndex === 0 ? 'hidden' : ''}`} alt="" />
          </button>
          <button onClick={handleSlideRight}>
            <img src="/asets/slideKanan.png" className={`hover:opacity-80 duration-150 w-7 h-7 z-30 cursor-pointer ${currentImageIndex === images.length - 1 ? 'hidden' : ''}`} alt="" />
          </button>
        </div>
        {images.length > 1 && (
          <div className="flex justify-center absolute bottom-4 w-full">
            {images.map((_, index) => (
              <div key={index} className={`w-2 h-2 mx-1 ${currentImageIndex === index ? 'bg-white' : 'bg-gray-400'} rounded-full`}></div>
            ))}
          </div>
        )}
      </picture>
      <div className='flex flex-row gap-6 mt-2'>
        <img 
          src={liked ? "/asets/filed_like.png" : "/asets/like.png"} 
          alt="" 
          className='w-8 h-8 cursor-pointer transition duration-300 transform hover:scale-110 hover:opacity-70' 
          onClick={handleLikeClick} 
        />
        <img src="/asets/share.png" alt="" className='w-8 h-8  cursor-pointer transition duration-300 transform hover:scale-110 hover:opacity-70' />
      </div>
      {likeCount !== 0 && (
        <h1 className='font-semibold text-base'>{likeCount} kali disukai</h1>
      )}
      <h1 className='font-semibold text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sequi asperiores hic rerum, deleniti ipsum architecto fuga! Veniam, porro placeat.</h1>
    </section>
  );
}

export default PostingSection;
