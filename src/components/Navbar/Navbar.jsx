import React, { useState } from 'react';
// import BRAND_ICON from '../../assets/brand-icon.png';
import BRAND_ICON from '../../assets/test-bg.png';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';

const NAVIGATION_LINKS = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Service', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="sticky top-0 bg-white z-50">
            <div className="responsive__container overflow-hidden flex flex-col items-start justify-start py-[22px]">
                <nav className="m-0 self-stretch flex flex-row items-center justify-between text-left text-base text-gray font-body-regular-body-3">
                    <a href="#" className="flex items-center space-x-2">
                        <img
                            src={BRAND_ICON}
                            alt="Nexcent Logo"
                            className="size-14 object-contain"
                        />
                        <p className="text-base sm:text-xl font-semibold text-gray-800flex">
                            Azhar Global Accounting
                        </p>
                    </a>
                    {/* <div className="overflow-hidden flex flex-row items-center justify-center gap-[50px]"> */}
                    <div
                        className={`absolute left-0 top-16 w-full flex-col gap-6 space-y-4 bg-primary-400 px-7 py-12 transition-all duration-300 md:static md:flex md:w-auto md:flex-row md:gap-10 md:space-y-0 md:py-0 ${
                            isOpen ? 'flex bg-white min-h-screen' : 'hidden'
                        }`}
                    >
                        {NAVIGATION_LINKS?.map((link) => (
                            <a
                                onClick={() => setIsOpen(false)}
                                href={link.href}
                                className="[text-decoration:none] relative leading-[24px] text-[inherit] hover:text-green-600 transition-all duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <IoClose size={24} />
                        ) : (
                            <HiBars3BottomRight size={24} />
                        )}
                    </button>
                </nav>
            </div>
        </header>
    );
}
/* <button className="py-3 cursor-pointer [border:none] px-5 bg-forestgreen rounded-sm  items-center justify-start flex gap-2 relative text-sm leading-[20px]  font-body-regular-body-3 text-white text-center hover:bg-green-600 transition-all duration-300">
    <span>Register Now</span>
    <FaArrowRightLong />
</button> */
