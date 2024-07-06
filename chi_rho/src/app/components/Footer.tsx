'use client';
import Link from 'next/link';
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
} from '@fortawesome/free-brands-svg-icons';
import ContactForm from './ContactForm';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), { ssr: false });

export default function Footer() {
   

    return (
        <div className="dark:text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Business Info */}
                <div className='ml-8 py-5 space-y-3'>
                    <h2 className="text-3xl font-bold">Contact Us</h2>
                    <p className='font-bold'>The Rats Den</p>
                    <p>
                        <a href="https://maps.google.com/?q=Toledo,+Ohio" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> 1488 Back Ally LN Toledo, Ohio
                        </a>
                    </p>
                    <p>
                        <a href="tel:+1734224-0978">
                            <FontAwesomeIcon icon={faPhone} /> Phone: (419)343-9894
                        </a>
                    </p>
                    <p>Open M-F: 9:00 AM – 5:00 PM</p>
                    <p>
                        <a href="mailto:contact@jacobssupply.com">
                            <FontAwesomeIcon icon={faEnvelope} /> chirhostrength@gmail.com
                        </a>
                    </p>
                    <div className="flex space-x-3">
                        <p>
                            <a href="customurl" target="_blank" rel="noopener noreferrer" className="text-md">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </p>
                        <p>
                            <a href="customurl" target="_blank" rel="noopener noreferrer" className="text-md">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </p>
                        <p>
                            <a href="customurl" target="_blank" rel="noopener noreferrer" className="text-md">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </p>
                    </div>
                    <div>
                        <h5 className="text-3xl font-bold">Help</h5>
                        <p className="py-2">
                            <Link href="/workouttemplets" className="hover:underline">Workout Plans</Link>
                        </p>
                        <p>
                            <Link href="/blog" className="hover:underline">Blog</Link>
                        </p>
                        <p>
                            <Link href="/mystory" className="hover:underline">My Story</Link>
                        </p>
                    </div>
                </div>

                {/* Map */}
                <div className='py-5 px-5'>
                    <Map/>
                </div>

                {/* Contact Form */}
                <div className='py-5 px-5'>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}