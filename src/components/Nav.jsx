import React from 'react'
import {headerLogo} from "../assets/images/index.js";
import {navLinks} from "../constants/index.js";
import {hamburger} from "../assets/icons/index.js";

const Nav = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex items-center justify-between max-container">
                <a href="/">
                    <img src={headerLogo} alt="Logo" width={130} height={29}/>
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map(item => (
                        <li key={item.label}>
                            <a href={item.href} rel="noopener noreferrer"
                               className="font-montserrat leading-normal text-lg text-slate-grey">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
                    <a href="/" className="hover:underline">Sign In</a>
                    <span></span>
                    <a href="/" className="hover:underline">Explore Now</a>
                </div>
                <div className="hidden max-lg:block">
                    <img src={hamburger} alt="Hamburger" width={25} height={25}/>
                </div>
            </nav>
        </header>
    )
}
export default Nav
