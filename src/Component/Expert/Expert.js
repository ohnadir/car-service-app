import React from 'react';

const Expert = ({ expert }) => {
    const { img, name } = expert;
    return (
        <div>
            <div className='mx-auto shadow-xl w-[305px]'>
                <img className='w-[300px] p-1' src={img} alt="" />
                <p className='p-2'>{name}</p>
            </div>
        </div>
    );
};

export default Expert;