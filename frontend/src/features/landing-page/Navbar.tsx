"use client";
import { Poppins } from "next/font/google"
import Link from "next/link"
import React, { useState } from "react"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const poppins = Poppins({ subsets: ["latin"], weight: ['700'] })

export const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <>
            <nav className="w-[100vw]
        backdrop-blur-lg
        items-center
        fixed
        z-[222]
        top-0
        
        max-lg:px-8">
                <div className="flex 
                justify-evenly 
                items-center 
                py-4 
                max-lg:justify-between">
                    <div>
                        <div>
                            <div
                                className={`flex-1 
                                justify-self-center 
                                pb-3 
                            
                                lg:block 
                                lg:pb-0 
                                lg:mt-0 ${navbar ? 'block' : 'hidden'}`}>
                                <ul className="flex
                            items-center 
                            justify-center
                            gap-4
                            transition-all
                            duration-500
                            ease-in
                            
                            max-lg:absolute 
                            max-lg:left-0
                            max-lg:top-0 
                            max-lg:h-[100vh]
                            max-lg:w-[100vw]
                            max-lg:bg-gradient-to-b
                            from-[#020B21]
                            to-black/95            
                            max-lg:-z-[10]
                            max-lg:flex-col
                            max-lg:gap-10
                            max-lg:text-3xl">
                                    <li className="text-white">
                                        <Link href="/">
                                            COLLECTION
                                        </Link>
                                    </li>
                                    <li className="text-white">
                                        <Link href="/">
                                            ABOUT
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <button
                                className="text-white 
                    outline-none 
                    focus:border-0
                    hidden
                    
                    max-lg:block"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <MenuRoundedIcon />
                                ) : (
                                    <MenuRoundedIcon />
                                )}
                            </button>

                            <div className="lg:hidden">
                            </div>

                        </div>

                    </div>
                    <Link href="#">
                        <h2 className={`text-3xl 
                        text-white 
                        font-bold
                        drop-shadow-[0_0_10px_rgba(255,255,255,.3)] 
                        ${poppins.className} `}>quiddy</h2>
                    </Link>
                    <ul className="flex
                    gap-4
                    text-md
                    text-white">
                        <li>
                            <button><AccountCircleOutlinedIcon /> <span className="max-sm:hidden 
                            text-sm">Log in</span>  </button>
                        </li>
                        <li>
                            <button><ShoppingCartIcon /></button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}