import React from 'react';
import GROUP_ICON from '../../assets/services/group-icon.png';
import Label from '../shared/Label';

const SERVICES = [
    {
        title: 'Tax Filing Assistance',
        description:
            'We simplify tax filing for international entrepreneurs, ensuring compliance in your home country and abroad.',
        icon: GROUP_ICON, // Replace with your icon
    },
    {
        title: 'Multi-Currency Accounting',
        description:
            'Our solution supports multi-currency transactions, ensuring smooth accounting for businesses operating globally.',
        icon: GROUP_ICON, // Replace with your icon
    },
    {
        title: 'Invoicing & Payments',
        description:
            'Automate your invoicing and payment processing with our accounting system, designed for foreign businesses.',
        icon: GROUP_ICON, // Replace with your icon
    },
    {
        title: 'Financial Reporting',
        description:
            'Get real-time financial reports, including balance sheets and profit & loss statements, tailored for global businesses.',
        icon: GROUP_ICON, // Replace with your icon
    },
    {
        title: 'Global Tax Planning',
        description:
            'Plan and optimize your global tax strategy, taking advantage of international tax laws to reduce liabilities.',
        icon: GROUP_ICON, // Replace with your icon
    },
    {
        title: 'Expense Tracking',
        description:
            'Easily track expenses in multiple currencies, and get insights to optimize your business spending.',
        icon: GROUP_ICON, // Replace with your icon
    },
];

export default function Services() {
    return (
        <section
            className="py-16 responsive__container text-center scroll-mt-20"
            id="services"
        >
            <div className="mb-12 space-y-4">
                <Label>Popular Services</Label>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Income Tax Services We Offer
                </h2>
                <p className="text-neutral-grey mt-2">
                    We have been working with some Fortune 500+ clients
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {SERVICES?.map((service, index) => (
                    <div
                        data-aos="zoom-in-up"
                        key={index}
                        className="bg-white shadow-md rounded-lg p-8 text-center space-y-4 transition-transform duration-500 ease-in-out hover:scale-105"
                    >
                        {/* <IoPeopleOutline className="text-forestgreen mx-auto size-6" /> */}
                        <h3 className="text-xl font-semibol">
                            {service.title}
                        </h3>
                        <p className="text-sm text-neutral-grey">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
