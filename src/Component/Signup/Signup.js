import React from 'react';
import { Link } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'
import {FaFacebookF} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
const Signup = () => {
    return (
        <div className='flex justify-center items-center h-[92vh]'>
            <div className='w-[500px] shadow-xl p-4 h-[620px]'>
                <form action="">
                    <h1 className='text-center text-xl mb-8 text-slate-400'>Sign Up</h1>
                    <div className='mb-8'>
                        <label className='text-slate-400' htmlFor="Email">Email</label>
                        <input className='w-full p-1 bg-gray-100 border-0' type="email" name="email" id="" />
                    </div>
                    <div className='mb-8'>
                        <label className='text-slate-400' htmlFor="password">Password</label>
                        <input className='w-full p-1 bg-gray-100 border-0' type="password" name="" id="" />
                    </div>
                    <div className='mb-8'>
                        <label className='text-slate-400' htmlFor="password">Confirmation Password</label>
                        <input className='w-full p-1 bg-gray-100 border-0' type="password" name="" id="" />
                    </div>
                    <button className='w-full bg-cyan-600 py-2 text-white' type='submit'>Sign Up</button>
                    <p className='text-sm text-right mb-8 text-slate-400'>Already have Account ! <span><Link className='text-cyan-600' to='/login'>Login</Link></span></p>
                    <div className='my-8 flex justify-between items-center'>
                        <span className='w-[186px]'><hr /></span>
                        <span className='text-slate-400'>or</span>
                        <span className='w-[186px]'><hr /></span>
                    </div>
                    <div className='flex gap-8 items-center justify-center'>
                        <button className='text-4xl border p-4'><FcGoogle /></button>
                        <button className='text-4xl border p-4'><FaFacebookF /></button>
                        <button className='text-4xl border p-4'><AiFillGithub/></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;