import React from 'react';
import ABOUT_BG from '../../assets/about-us.svg';

export default function About() {
    return (
        <section
            className="responsive__container flex gap-16 py-16 scroll-mt-20"
            id="about-us"
            data-aos="fade-up"
        >
            <div className="w-full hidden lg:block">
                <img
                    src={ABOUT_BG}
                    alt="About us"
                    className="w-full h-auto max-w-[600px] mx-auto"
                />
            </div>
            <div className="space-y-6">
                <h2 className="text-3xl font-semibold text-gray-800">
                    About Us
                </h2>
                <p className="m-0 self-stretch relative text-base leading-[20px] text-neutral-grey">
                    At [Your Company Name], we are committed to revolutionizing
                    the way businesses manage their finances. Our mission is to
                    provide streamlined, efficient, and affordable accounting
                    solutions that allow businesses of all sizes to focus on
                    what matters most—growth and success.
                </p>
                <p className="m-0 self-stretch relative text-base leading-[20px] text-neutral-grey">
                    Our vision is to empower businesses around the world with
                    the tools they need to manage their finances efficiently,
                    effortlessly, and securely. We believe that accounting
                    doesn’t have to be complicated—our goal is to simplify the
                    process so that business owners and financial professionals
                    can make informed decisions without the stress.
                </p>
            </div>
        </section>
    );
}
