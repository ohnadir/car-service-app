import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex justify-center items-center h-[92vh]'>
            <div className='w-[500px] shadow-xl p-4 h-[510px]'>
                <form action="">
                    <h1 className='text-center text-xl mb-8 text-slate-400'>Log In</h1>
                    <div className='mb-8'>
                        <label className='text-slate-400' htmlFor="Email">Email</label>
                        <input className='w-full bg-gray-100 border-0' type="email" name="email" id="" />
                    </div>
                    <div className='mb-8'>
                        <label className='text-slate-400' htmlFor="password">Password</label>
                        <input className='w-full bg-gray-100 border-0' type="password" name="" id="" />
                    </div>
                    <button className='w-full bg-cyan-600 py-2 text-white' type='submit'>Login</button>
                    <span className='text-sm right-0 mb-8 text-slate-400'>Create an Account ! <span><Link className='text-cyan-600' to='/signup'>Login</Link></span></span>
                    <div className='my-8 flex justify-between items-center'>
                        <span className='w-[186px]'><hr /></span>
                        <span className='text-slate-400'>or</span>
                        <span className='w-[186px]'><hr /></span>
                    </div>
                    <button className='border border-cyan-600 py-3 w-full text-slate-400'>Continue with Google</button>
                </form>
            </div>
        </div>
    );
};

export default Login;