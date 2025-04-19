import React from 'react';
import Label from '../shared/Label';
import _config from '../../constants/index.js';

export default function Services() {
    return (
        <section
            className="py-16 responsive__container text-center scroll-mt-20"
            id="services"
            data-aos="fade-up"
        >
            <div className="mb-12 space-y-4">
                <Label>Popular Services</Label>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Income Tax Services We Offer
                </h2>
                <p className="text-seconday mt-2">
                    We have been working with some Fortune 500+ clients
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {_config.SERVICES?.map((service, index) => (
                    <div
                        data-aos="zoom-in-up"
                        key={index}
                        className="bg-white shadow-md rounded-lg p-8 text-left space-y-4 transition-transform duration-500 ease-in-out hover:scale-105"
                    >
                        <h3 className="text-xl font-semibold">
                            {service.title}
                        </h3>
                        <p className="text-sm text-seconday">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
