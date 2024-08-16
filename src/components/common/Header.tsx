'use client';

import { useRouter, usePathname } from 'next/navigation';
import {  coalitionifyLogo} from '../../app/assets';
import Image from 'next/image';
import { useState } from 'react';


export default function Header() {
    const router = usePathname();
    const [currHash, setCurrHash] = useState('home')
    

    const scrolltoHash = (element_id: string) => {
        const element = document.getElementById(element_id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleNavClick = async (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
        setCurrHash(hash)
        e.preventDefault();
        if (router === '/') {
            scrolltoHash(hash);
        }
    };

    console.log(router);
    console.log(currHash)

    return (
        <header className="isolate bg-white sticky top-0 w-full shadow-md z-10">
            <nav className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-5">
                <div className="flex justify-between items-center">
                    <a href="/" className="text-2xl font-bold text-gray-800">
                        <Image className="object-cover" src={coalitionifyLogo} width={150} alt="Logo" />
                    </a>
                    <div className="hidden md:flex items-center space-x-16">
                        <a href="/#home" className="text-gray-800 hover:text-secondary hover:font-bold" style={{color: currHash =='home' && '#050337', fontWeight: currHash =='home' && 650 }} onClick={(e) => handleNavClick(e, 'home')}>Home</a>
                        <a href="/#about" className="text-gray-800 hover:text-secondary hover:font-bold" style={{color: currHash =='about' && '#050337' ,fontWeight: currHash =='about' && 650 }} onClick={(e) => handleNavClick(e, 'about')}>About</a>
                        <a href="/#service" className="text-gray-800 hover:text-secondary hover:font-bold" style={{color: currHash =='service' && '#050337', fontWeight: currHash =='service' && 650}} onClick={(e) => handleNavClick(e, 'service')}>Services</a>
                    </div>
                    <a href="/contact" className="bg-black hover:bg-secondary text-white px-4 py-2 rounded-md">Contact us</a>
                    <div className="md:hidden flex items-center">
                        <button className="text-gray-800 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
