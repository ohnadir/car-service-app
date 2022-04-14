import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBars, faTimes,} from "@fortawesome/free-solid-svg-icons"
import CustomLink from "../CustomLink/CustomLink"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";
function Header() {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <div className="flex items-center h-14 px-6 justify-between  bg-slate-600 text-white relative z-50">
      <div className="h-7"> Genius Car Service</div>
      <div className="flex gap-4 ml-10 items-center hidden md:flex">
            <CustomLink to='/home'>Home</CustomLink>
            <CustomLink to='/services'>Services</CustomLink>
            <CustomLink to='/experts'>Experts</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
            {user ? <button onClick={handleSignOut}>Sign Out</button>
                :
              <CustomLink to='/login'>Login</CustomLink>
            }
      </div>
      <FontAwesomeIcon
        icon={open ? faTimes : faBars}
        onClick={() => setOpen(!open)}
        className="text-white w-6 h-6 cursor-pointer md:hidden"/>
      {open && (
        <div className="bg-slate-600 absolute top-full left-0 flex flex-col w-full pb-8 md:hidden">
            <div className=" flex gap-4 flex-col items-center text-xl">
            <CustomLink to='/home'>Home</CustomLink>
            <CustomLink to='/services'>Services</CustomLink>
            <CustomLink to='/experts'>Experts</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
            <CustomLink to='/login'>Login</CustomLink>
            </div>
        </div>
      )}
    </div>
  )
}

export default Header