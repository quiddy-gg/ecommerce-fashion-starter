"use client";
import { Poppins } from "next/font/google"
import Link from "next/link"
import React, { useState } from "react"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const poppins = Poppins({ subsets: ["latin"], weight: ['700'] })

export const Navbar = () => {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <nav className="flex 
                justify-between 
                items-center
                w-[100vw]
                backdrop-blur-lg
                fixed
                z-[222]
                top-0
                px-10
                py-4
                bg-black/40
        
                max-lg:px-8">
                <div>
                    <div>
                        <div
                            className={`
                                justify-self-center 
                            
                                lg:block 
                                lg:pb-0 
                                lg:mt-0 ${menu ? 'block' : 'hidden'}`}>
                            <ul className="flex
                            items-center 
                            justify-center
                            gap-8
                            transition-all
                            duration-500
                            ease-in
                            
                            max-lg:absolute 
                            max-lg:left-0
                            max-lg:top-0 
                            max-lg:h-[100vh]
                            max-lg:w-[100vw]
                            max-lg:bg-gradient-to-b
                            from-[#05080f]
                            to-black/95            
                            max-lg:-z-[10]
                            max-lg:flex-col
                            max-lg:gap-10
                            max-lg:text-3xl">
                                <li className="text-white">
                                    <Link href="#">
                                        COLLECTION
                                    </Link>
                                </li>
                                <li className="text-white">
                                    <Link href="../../about">
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
                            onClick={() => setMenu(!menu)}
                        >
                            {menu ? (
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
                    <h2 className={` text-3xl 
                        text-white 
                        font-bold
                        drop-shadow-[0_0_5px_rgba(255,255,255,.3)] 
                        ${poppins.className} `}>quiddy</h2>
                </Link>
                    
                        <button className="text-white"><ShoppingCartIcon /></button>
                
            </nav>
        </>
    );
}