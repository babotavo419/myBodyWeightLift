'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Search from './ui/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHome,
    faCircleInfo,
} from '@fortawesome/free-solid-svg-icons'; 

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 200);
    };

    return (
        <header className=" text-white py-3 p-5">
            <div className="container mx-auto space-x-3 flex justify-between items-center">
                <div className="logo">
                    <Image
                        src="/assets/logos/4885c978-6521-4cbf-85d6-fea7774ef2d9.png"
                        alt="Company Logo"
                        width={80}
                        height={50}
                    />
                </div>
                <nav className="flex space-x-2 items-center">
                    <Link href="/" className="flex items-center hover:text-gray-400">
                        <FontAwesomeIcon icon={faHome} className="mr-3" />
                    </Link>
                    <div
                        className="relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button className="flex items-center hover:text-gray-400">
                            <FontAwesomeIcon icon={faCircleInfo} className="mr-3" />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-10"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link href="/workouttemplets" className="block px-4 py-2 hover:bg-gray-100">
                                    Workout Templets
                                </Link>
                                <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100">
                                    Blog
                                </Link>
                                <Link href="/ourStory" className="block px-4 py-2 hover:bg-gray-100">
                                    Our Story
                                </Link>
                            </div>
                        )}
                    </div>
                    <Search />
                </nav>
            </div>
        </header>
    );
}