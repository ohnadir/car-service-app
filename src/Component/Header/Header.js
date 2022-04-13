import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <nav class="bg-slate-600  px-2 sm:px-4 py-2.5 text-white ">
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Flowbite
                    </span>
                    <button
                        data-collapse-toggle="mobile-menu"
                        type="button"
                        class="focus:ring-2 focus:ring-gray-100  inline-flex items-center p-2 ml-3 text-sm text-white rounded md:hidden  focus:outline-none    dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu"
                        aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                                <AiOutlineMenu className="w-6 h-6 "></AiOutlineMenu>
                    </button>
                    <div class="hidden w-full md:block md:w-auto " id="mobile-menu">
                        <ul class="text-center flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li><CustomLink to='/home'>Home</CustomLink></li>
                            <li><CustomLink to='/order-review'>Order-Review</CustomLink></li>
                            <li><CustomLink to='/grandpa'>Grandpa</CustomLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Header;