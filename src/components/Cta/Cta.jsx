import React from 'react';
import { FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';

export default function CTA() {
    return (
        <section className="py-24 text-center bg-[#167733]">
            <div className="text-center space-y-4 responsive__container">
                <h2
                    className="text-3xl font-semibold text-white"
                    data-aos="fade-up"
                >
                    Ready to simplify your accounting?
                </h2>
                <p
                    className="m-0 self-stretch relative text-base leading-[20px] text-white"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Whether you're a freelancer, small business, or
                    international client – we’re here to help you manage your
                    finances effortlessly.
                </p>

                <div
                    className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10 text-sm  py-6 text-white"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt />
                        +123 456 7890
                    </div>
                    <div className="flex items-center gap-2">
                        <FaRegEnvelope />
                        support@yourcompany.com
                    </div>
                </div>
            </div>
        </section>
    );
}
