import React from 'react'

interface ShareModelProps {
    onClose: () => void;
}
const share: React.FC<ShareModelProps> = ({ onClose }) =>{
return (
    <div className='fixed flex top-0 left-0 w-full h-full bg-black bg-opacity-30 z-50 justify-center items-center'>
        <div className='flex flex-col bg-white w-[300px] h-auto rounded-2xl items-center p-3 gap-3'>
            <div className='flex flex-row items-center justify-end w-full gap-32 p-2'>
                <h1 className='font-bold text-2xl'>Bagikan</h1>
                <button onClick={onClose}>
                    <img src="/asets/exit.png" alt="" className='flex w-8 h-8 hover:scale-110'/>
                </button>
            </div>
            <div className='flex border-b-2 w-full'></div>
            <div className='flex flex-row justify-center items-center gap-3'>
                <img src="/asets/wa.png" className='flex w-20 h-20 hover:scale-105 duration-300 cursor-pointer'  />
                <img src="/asets/ig-share.png" className='flex w-24 h-24 hover:scale-105 duration-300 cursor-pointer'  />    
                <img src="/asets/fb.png" className='flex w-20 h-20 hover:scale-105 duration-300 cursor-pointer'  />
                <img src="/asets/tt.png" className='flex w-20 h-20 hover:scale-105 duration-300 cursor-pointer'  />    
            </div>
            <button className='bg-secondarymain w-full h-16 text-white font-bold text-xl rounded-lg hover:bg-secondaryhover duration-150' >Salin tautan</button>
        </div>
    </div>
)
}

export default share
