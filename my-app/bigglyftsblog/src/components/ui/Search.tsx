'use client';

import React, { useState } from 'react';

export default function Search() {
    const [query, setQuery] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        // Implement search functionality here, such as navigating to a search results page
        console.log(`Searching for: ${query}`);
    };

    return (
        <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-2">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search..."
                className="w-full md:w-auto px-3 py-2 border rounded-lg focus:outline-none focus:border-cyan-300"
            />
            <button
                onClick={handleSearch}
                className="w-full md:w-auto bg-cyan-950 text-white px-4 py-2 rounded-lg hover:bg-cyan-700"
            >
                Search
            </button>
        </div>

    );
}