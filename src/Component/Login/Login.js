import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
const Login = () => {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const handleFormReload = (event) => {
        event.preventDefault();
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    if (user) {
        navigate('/home');
    }
    const handleLogin = () => {
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='flex justify-center items-center h-[92vh]'>
            <div className='w-[500px] shadow-xl p-4 h-[520px]'>
                <form onSubmit={handleFormReload}>
                    <h1 className='text-center text-xl mb-8 text-slate-400'>Log In</h1>
                    <div className='mb-8'>
                        <label className='text-slate-400' htmlFor="Email">Email</label>
                        <input onChange={handleEmail} className='w-full p-1 bg-gray-100 border-0' type="email" name="email" id="" />
                    </div>
                    <div className='mb-8'>
                        <label className='text-slate-400' htmlFor="password">Password</label>
                        <input onChange={handlePassword} className='w-full p-1 bg-gray-100 border-0' type="password" name="" id="" />
                    </div>
                    <button onClick={handleLogin} className='w-full bg-cyan-600 py-2 text-white' type='submit'>Login</button>
                    <p className='text-sm text-right text-slate-400'>Create an Account ! <span><Link className='text-cyan-600' to='/signup'>Sign up</Link></span></p>
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

export default Login;