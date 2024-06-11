'use client'
import React, { useState } from 'react';
import Profile from '../card/profile';
import ShareModel from '../model/share';
import '../styles/global.css'

const PostingSection = () => {
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
    <section className='flex flex-col w-[250px] md:w-[350px] h-full  bg-white rounded-2xl px-4 py-6 gap-3 select-none shadow-lg'>
          <Profile/>
          <picture className='relative' onDoubleClick={handleDoubleClick}>
            <img src='/asets/posting1.png' className='flex rounded-lg object-center w-full h-[250px] md:h-[350px]' alt="" />
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
            <h1 className='font-semibold md:font-bold text-base md:text-lg'>{likeCount} kali disukai</h1>
          )}
          <h1 className='font-normal text-base md:text-lg'> <span className='font-bold md:text-xl '>Admin</span> Seringlah beristigfar itulah caramu meminta maaf kepada Allah dari dosa dosamu.</h1>
    </section> 
  );
}

export default PostingSection;
