'use client'

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Search() {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        console.log(`Searching for: ${query}`);
        // Implement search functionality here, such as navigating to a search results page
    };

    const toggleSearch = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="">
            <FontAwesomeIcon
                icon={faSearch}
                onClick={toggleSearch}
                className={`text-gray-600 cursor-pointer ${isOpen ? 'text-cyan-500' : 'text-gray-600'}`}
                size="lg"
            />
            {isOpen && (
                <div
                    className="absolute top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-25 z-50"
                    style={{ backdropFilter: 'blur(5px)' }}
                >
                    <input
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                        placeholder="Search..."
                        className="w-full h-12 bg-transparent text-white placeholder-white placeholder-opacity-50 focus:outline-none text-xl"
                        style={{textDecoration: 'underline', fontSize: '2rem', textAlign: 'center'}}
                    />
                    <FontAwesomeIcon
                        icon={faTimes}
                        onClick={handleClose}
                        className="text-gray-600 cursor-pointer absolute top-4 right-4"
                        size="lg"
                    />
                </div>
            )}
        </div>
    );
}

