'use client';

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faXTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
} from 'react-leaflet'
import "leaflet/dist/leaflet.css";

const Footer = () => {
    return (
        <footer className="">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className='ml-8 py-5 space-y-3'>
                <h2 className="font-semibold">Contact Us</h2>
                    <p className="font-bold py-3 text-slate-800">The Rats Den</p>
                    <p className=" text-gray-800">1488 Back Ally LN</p>
                    <p className=" text-gray-800">Toledo, Ohio</p>
                    <p className=" text-gray-800">Open M-F: 9:00 AM – 5:00 PM</p>
                    <p className=" text-gray-800">Phone: (419)867-5309</p>
                    <div className="flex space-x-3">
                <a className="flex items-center justify-center" href="https://twitter.com/octavio31848">
                    <FontAwesomeIcon icon={faFacebookF} className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </a>
                <a className="flex items-center justify-center ml-4" href="https://www.linkedin.com/in/octaviovsanchez/">
                    <FontAwesomeIcon icon={faXTwitter} className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </a>
                <a className="flex items-center justify-center ml-4" href="https://www.linkedin.com/in/octaviovsanchez/">
                    <FontAwesomeIcon icon={faYoutube} className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </a>
                </div>
                </div>

                <div className="ml-8 py-5 space-y-3">
                    <div className="w-full sm:w-1/2 md:w-1/4">
                    <h5 className="font-bold py-3 text-slate-800">
                            Help
                        </h5>
                        <p className="text-gray-800">
                            <NavLink
                                to="/custom-logo"
                                className="hover:underline">
                                Workout Plans
                            </NavLink>
                        </p>
                        <p className="text-gray-800">
                            <NavLink
                                to="/custom-logo"
                                className="hover:underline">
                                Bolg
                            </NavLink>
                        </p>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/4">
                        <p className="text-gray-800">
                            <NavLink
                                to="/returns"
                                className="hover:underline">
                                Return Policy
                            </NavLink>
                        </p>
                        <p className="text-gray-800">
                            <NavLink
                                to="/contact"
                                className="hover:underline">
                                Contact
                            </NavLink>
                        </p>
                        <p className="text-gray-800">
                            <NavLink
                                to="/refund"
                                className="hover:underline">
                                Refund Policy
                            </NavLink>
                        </p>
                        <p className="text-gray-800">
                            <NavLink
                                to="/privacy"
                                className="hover:underline">
                                Privacy Policy</NavLink></p>
                        <p className="text-gray-800">
                            <NavLink
                                to="/terms"
                                className="hover:underline">
                                Terms & Conditions
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center py-4 mt-4">
                <a className="ml-4 text-sm text-gray-500 dark:text-gray-400" href="https://www.octavioweb.dev/">© 2024 octavioweb.dev </a>
            </div>
        </footer>
    )
}

