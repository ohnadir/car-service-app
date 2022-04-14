import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'
import {FaFacebookF} from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useSignInWithFacebook, useSignInWithGithub } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
const Signup = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState({value: "", error:""});
    const [password, setPassword] = useState({value: "", error:""});
    const [confirmationPassword, setConfirmationPassword] = useState({value: "", error:""});
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user2] = useSignInWithFacebook(auth);
    const [signInWithGithub, user3] = useSignInWithGithub(auth);
    if (user) {
        navigate('/home');
    }
    if (user1) {
        navigate('/home');
    }
    if (user2) {
        navigate('/home');
    }
    if (user3) {
        navigate('/home');
    }


    const handleFormReload = (event) => {
        event.preventDefault();
        
    }

    const handleEmail = (event) => {
        const emailInput = event.target.value;
        if (/\S+@\S+\.\S+/.test(emailInput)) {
            setEmail({value:emailInput, error:""})
        } else {
            setEmail({value:"", error:"Please provide a Valia Email"})
        }
        // setEmail(event.target.value);
        console.log(emailInput);
    }
    
    const handlePassword = (event) => {
        const passwordInput = event.target.value;
        if (passwordInput.length < 7) {
            setPassword({value:"", error:"Password is too short"})
        } else {
            setPassword({value:passwordInput, error:""})
        }
        // setPassword(event.target.value);
        console.log(passwordInput);
    }

    const handleConfirmationPassword = (event) => {
        const confirmationPasswordInput = event.target.value;
        if (confirmationPasswordInput !== password.value) {
            setConfirmationPassword({value:"", error:"Password Mismatch"})
        } else {
            setConfirmationPassword({value:confirmationPasswordInput, error:""})
        }
        // setConfirmationPassword(event.target.value);
        // console.log(confirmationPassword);
    }

    const handleSubmit = () => {
        if (agree) { 
            createUserWithEmailAndPassword(email.value, password.value);
        }
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    const handleFacebookSignIn = () => {
        signInWithFacebook();
    }
    const handleGithubSignIn = () => {
        signInWithGithub();
    }
    return (
        <div className='flex justify-center items-center h-[92vh]'>
            <div className='w-[500px] shadow-xl p-4 h-[620px]'>
                <form onSubmit={handleFormReload}>
                    <h1 className='text-center text-xl mb-8 text-slate-400'>Sign Up</h1>
                    <div className='mb-8'>
                        <label className='text-slate-400' htmlFor="Email">Email</label>
                        <input onChange={handleEmail} className='w-full p-1 bg-gray-100 border-0' type="email" name="email" id="" />
                        {email.error && (
                            <p className='text-red-600 text-sm'>{email.error}</p>
                        )}
                    </div>

                    <div className='mb-8'>
                        <label className='text-slate-400' htmlFor="password">Password</label>
                        <input onChange={handlePassword} className='w-full p-1 bg-gray-100 border-0' type="password" name="password" id="" />
                        {password.error && (
                            <p className='text-red-600 text-sm'>{password.error}</p>
                        )}
                    </div>
                    <div className='mb-8'>
                        <label className='text-slate-400' htmlFor="password">Confirmation Password</label>
                        <input onChange={handleConfirmationPassword} className='w-full p-1 bg-gray-100 border-0' type="password" name="confirmationPassword" id="" />
                        {confirmationPassword.error && (
                            <p className='text-red-600 text-sm'>{confirmationPassword.error}</p>
                        )}
                    </div>
                    <div className='mb-2'>
                        <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                        <label className={agree ? "px-2 text-blue-600" : "px-2 text-red-700"} htmlFor="terms">Accept Car service terms and Conditions</label>
                   </div>
                    <button
                        disabled={!agree}
                        onClick={handleSubmit}
                        className='w-full bg-cyan-600 py-2 text-white'
                        type='submit'>Sign Up</button>
                    
                    <p className='text-sm text-right mb-8 text-slate-400'>Already have Account ! <span><Link className='text-cyan-600' to='/login'>Login</Link></span></p>
                    <div className='my-8 flex justify-between items-center'>
                        <span className='w-[186px]'><hr /></span>
                        <span className='text-slate-400'>or</span>
                        <span className='w-[186px]'><hr /></span>
                    </div>
                    <div className='flex gap-8 items-center justify-center'>
                        <button onClick={handleGoogleSignIn} className='text-4xl border p-4'><FcGoogle /></button>
                        <button onClick={handleFacebookSignIn} className='text-4xl border p-4'><FaFacebookF /></button>
                        <button onClick={handleGithubSignIn} className='text-4xl border p-4'><AiFillGithub/></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;