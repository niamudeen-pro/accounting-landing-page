import React from 'react';
import HERO_BG from '../../assets/hero-bg.png';
import { FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';
import { MdCheckCircle } from 'react-icons/md';
import _config from '../../constants/index.js';

export default function Hero() {
    return (
        <section className="bg-neutral-silver  py-16 sm:py-24" id="#">
            <div className="responsive__container flex  items-center justify-between gap-8">
                <div>
                    <div className="space-y-2 text-center md:text-left">
                        <h1
                            className="text-4xl sm:text-5xl md:text-6xl text-inherit font-bold font-inherit font-body-regular-body-3"
                            data-aos="fade-right"
                        >
                            Accounting Solutions
                        </h1>
                        <h1
                            data-aos="fade-right"
                            className="text-4xl sm:text-5xl md:text-6xl  text-inherit font-bold  font-body-regular-body-3 !text-forestgreen"
                        >
                            for Global Entrepreneurs
                        </h1>
                        <p className="pt-4 text-sm sm:text-base  text-seconday md:text-center">
                            Manage your finances, taxes, and compliance across
                            multiple countries — all in one platform.
                        </p>
                    </div>

                    {/* Quick Highlights */}
                    <div className="grid grid-cols-2 gap-4 mt-6 text-gray-700 py-6">
                        <div className="flex items-center gap-2">
                            <MdCheckCircle className="text-green-600 text-xl" />
                            Bookkeeping
                        </div>
                        <div className="flex items-center gap-2">
                            <MdCheckCircle className="text-green-600 text-xl" />
                            Tax Filing
                        </div>
                        <div className="flex items-center gap-2">
                            <MdCheckCircle className="text-green-600 text-xl" />
                            Multi-Currency
                        </div>
                        <div className="flex items-center gap-2">
                            <MdCheckCircle className="text-green-600 text-xl" />
                            Real-time Reports
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-8 mt-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800">
                                500+
                            </h3>
                            <p className="text-sm text-gray-600">
                                Clients Served
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800">
                                30+
                            </h3>
                            <p className="text-sm text-gray-600">
                                Countries Covered
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800">
                                99%
                            </h3>
                            <p className="text-sm text-gray-600">
                                Satisfaction Rate
                            </p>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-10 text-sm text-gray-700 py-6">
                        <div className="flex items-center gap-2">
                            <FaPhoneAlt className="text-green-600" />
                            <a
                                href={`tel:${_config.PHONE_NUMBER}`}
                                className="hover:underline"
                            >
                                {_config.PHONE_NUMBER}
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaRegEnvelope className="text-green-600" />
                            <a
                                href={`mailto:${_config.EMAIL}`}
                                className="hover:underline"
                            >
                                {_config.EMAIL}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block h-full">
                    <img
                        className="max-w-md h-full object-cover"
                        alt=""
                        src={HERO_BG}
                    />
                </div>
            </div>
        </section>
    );
}
