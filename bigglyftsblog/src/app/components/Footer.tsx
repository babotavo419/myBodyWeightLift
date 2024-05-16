'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhone,
    faEnvelope,
    faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

import {
    faFacebookF,
    faInstagram,
    faYoutube,
    faTiktok,
}   
    from '@fortawesome/free-brands-svg-icons';
import "leaflet/dist/leaflet.css";
import ContactForm from './ContactForm';

// Dynamically import react-leaflet components
const MapContainer = dynamic(
    () => import('react-leaflet').then((mod) => mod.MapContainer),
    { ssr: false }
) as any;
const TileLayer = dynamic(
    () => import('react-leaflet').then((mod) => mod.TileLayer),
    { ssr: false }
) as any;
const Marker = dynamic(
    () => import('react-leaflet').then((mod) => mod.Marker),
    { ssr: false }
) as any;
const Popup = dynamic(
    () => import('react-leaflet').then((mod) => mod.Popup),
    { ssr: false }
) as any;

// Leaflet Icon Configuration
import L from 'leaflet';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadowUrl from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
    iconUrl,
    shadowUrl: iconShadowUrl,
});

export default function Footer() {
    // Define position as a tuple [latitude, longitude]
    const position: [number, number] = [41.7537494, -83.5676985];

    return (
        <div className="dark:text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Business Info */}
                <div className='ml-8 py-5 space-y-3'>
                    <h2 className="text-3xl font-bold">Contact Us</h2>
                    <p className='font-bold'>The Rats Den</p>
                    <p>
                        <a href="https://maps.google.com/?q=7555+Lewis+Ave,+Temperance,+Michigan" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> 1488 Back Ally LN Toledo, Ohio
                        </a>
                    </p>
                    <p>
                        <a href="tel:+1734224-0978">
                            <FontAwesomeIcon icon={faPhone} /> Phone: (419)867-5309
                        </a>
                    </p>
                    <p>Open M-F: 9:00 AM – 5:00 PM</p>
                    <p>
                        <a href="mailto:contact@jacobssupply.com">
                            <FontAwesomeIcon icon={faEnvelope} /> contact@biglifts.com
                        </a>
                    </p>
                    <div className="flex space-x-3">
                        <p>
                            <a href="https://www.facebook.com/JacobsSupply/" target="_blank" rel="noopener noreferrer" className="text-md">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </p>
                        <p>
                            <a href="https://www.instagram.com/jacobssupply/" target="_blank" rel="noopener noreferrer" className="text-md">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </p>
                        <p>
                            <a href="https://www.youtube.com/channel/UC56iAES3fwkcVktW3B9htrg" target="_blank" rel="noopener noreferrer" className="text-md">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </p>
                        <p>
                            <a href="https://www.tiktok.com/@jacobssupply" target="_blank" rel="noopener noreferrer" className="text-md">
                                <FontAwesomeIcon icon={faTiktok} />
                            </a>
                        </p>
                    </div>
                    <div>
                        <h5 className="text-3xl font-bold">Help</h5>
                        <p className="py-2">
                            <Link href="/custom-logo" className="hover:underline">Workout Plans</Link>
                        </p>
                        <p>
                            <Link href="/custom-logo" className="hover:underline">Blog</Link>
                        </p>
                    </div>
                </div>

                {/* Map */}
                <div className='py-5 px-5'>
                    <MapContainer center={position} zoom={13} style={{ height: '250px', width: '250px' }} scrollWheelZoom={false}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={position}>
                            <Popup>We are here!</Popup>
                        </Marker>
                    </MapContainer>
                </div>
                
                {/* Contact Form */}
                <div className='py-5 px-5'>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
