import React from 'react'

interface ReportModelProps {
    onClose: () => void;
}
const reportModel: React.FC<ReportModelProps> = ({ onClose }) =>{
return (
    <div className='fixed flex top-0 left-0 w-full h-full bg-black bg-opacity-30 z-50 justify-center items-center'>
    <div className='flex flex-col bg-white w-96 h-auto rounded-2xl items-center p-3 gap-3'>
        <div className='flex flex-row items-center justify-end w-full gap-24 p-2'>
            <h1 className='font-bold text-2xl'>Laporkan</h1>
            <button onClick={onClose}>
                <img src="/asets/exit.png" alt="" className='flex w-8 h-8 hover:scale-110'/>
            </button>
        </div>
        <div className='flex border-b-2 w-full'></div>
        <form action="" className='w-full '>
        <textarea 
        className='h-52 w-full resize-none outline-none text-xl ' 
        spellCheck="false" 
        placeholder='Tulis Laporan'
        ></textarea>
        <button className='bg-secondarymain w-full h-16 text-white font-bold text-xl rounded-lg hover:bg-secondaryhover duration-150' >Kirim</button>
        </form>
    </div>
</div>
)
}

export default reportModel
