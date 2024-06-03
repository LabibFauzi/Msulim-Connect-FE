import React, { useState } from 'react'
import DeleteModel from '../model/deleteModel'
const BalasanUser = () => {
    const [deleteModel,setDeleteModel] = useState(false);

    const toggleDelete = () => {
        setDeleteModel(!deleteModel);
    };
    const closeDelete = () => {
        setDeleteModel(false);
    };
    return (
            <div className='flex flex-col pl-14 pr-2'>
                    <div className='flex flex-row h-16 justify-between items-center'>
                        <div className='flex gap-4'>
                            <img src="/asets/profile.png" alt="" className='flex w-10 h-10 ' />
                            <div className='flex flex-col '>
                                <h1 className='font-bold text-sm text-secondarymain'>Labib Fauzi</h1>
                                <h1 className='font-bold text-sm text-neutural'>1 jam yang lalu</h1>
                            </div>
                        </div>
                        <button onClick={toggleDelete}>
                            <img src="/asets/sampah.png" alt="" className='flex w-5 h-6 hover:scale-110 ' />
                        </button>
                        {deleteModel && <DeleteModel onClose={closeDelete}/>}
                    </div>
                    <div className='flex pl-14'>
                        <h1 className='text-xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam possimus voluptatem nulla ex itaque nisi minus atque rerum, similique sit.</h1>
                    </div>
                </div>
    )
}

export default BalasanUser