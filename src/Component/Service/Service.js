import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const { name, price, description, img, id } = service;
    const navigate = useNavigate();
    const handleToAdd = (id) => {
        navigate(`/services/${id}`);
    }
    return (
        <div>
            <div className='mx-auto shadow-xl w-[305px]'>
                <img className='p-2' src={img} alt="" />
                <div className='p-3'>
                    <p className='text-lg text-slate-500'>{name}</p>
                    <p className='text-sm my-2 text-slate-500'>Price:- <span className='text-[#FF4500]'>${price}</span></p>
                    <p className='text-slate-500'>{description}</p>
                </div>
                <button onClick={()=>handleToAdd(id)} className='bg-cyan-600 text-white w-full py-2 hover:bg-cyan-500'>Explore Details</button>
            </div>
            
        </div>
    );
};


export default Service;