import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const faqs = [
    {
        question: 'What types of accounting solutions do you provide?',
        answer: `We provide a full range of accounting services to help you manage your finances better. This includes:
  - Keeping track of daily income and expenses (bookkeeping)
  - Running payroll for your employees
  - Planning and filing taxes on time
  - Preparing financial reports to show how your business is doing
  - Creating and sending invoices to your customers
  - Making sure your GST is calculated and filed properly
  - Acting as your virtual CFO to guide you in financial decisions
    
  Our services are flexible and can be customized based on your business size and needs.`,
    },
    {
        question: 'How can outsourcing accounting help my business?',
        answer: `Outsourcing your accounting means you don’t have to worry about doing it yourself or hiring a full-time accountant. Here’s how it helps:
  - Saves you time to focus on growing your business
  - Reduces chances of making costly mistakes
  - Ensures your taxes and filings are done right and on time
  - Gives you clear reports to make better decisions
  - Cuts down the cost of hiring and managing in-house staff
    
  In short, you get expert help without the headache.`,
    },
    {
        question: 'Is my financial information safe with you?',
        answer: `Yes, your data is completely safe with us. We take data protection very seriously. We use:
  - Bank-level encryption to protect your information
  - Secure cloud servers to store your data
  - Limited access so only trusted team members can view it
    
  We follow best practices and always keep your privacy a top priority.`,
    },
    {
        question: 'Can you support startups and growing businesses?',
        answer: `Absolutely! We love working with startups and businesses that are growing fast. We offer:
  - Flexible pricing plans that fit your budget
  - Help with cash flow so you don’t run out of money
  - Forecasting tools to plan for the future
  - Accounting support that grows with you as your business grows
    
  You won’t have to worry about your numbers—we’ll take care of them while you scale.`,
    },
    {
        question: 'What is the onboarding process like?',
        answer: `Getting started with us is quick and simple. Here's how it works:
  1. We begin with a short consultation to understand your needs
  2. We help you collect and organize your existing financial records
  3. We set up the accounting systems you’ll need
  4. A dedicated accountant will be assigned to your business
  5. We start managing your books right away, usually within a few days
    
  You’ll be up and running in no time, with full support from our team.`,
    },
    {
        question: 'Do you handle tax filings and compliance?',
        answer: `Yes, we take care of all your tax needs. This includes:
  - Filing income tax for your business
  - Managing GST returns on time
  - Handling TDS (Tax Deducted at Source)
  - Keeping you updated with the latest tax rules
  - Making sure your business stays compliant and avoids fines
    
  We’ll handle everything so you never miss a deadline or face penalties.`,
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <section className="py-16 px-4 overflow-hidden scroll-mt-20" id="faq">
            <div className="responsive__container">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    FAQ
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="bg-white shadow-sm rounded-lg p-4 transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 200}
                                data-aos-duration="600"
                            >
                                <button
                                    className="w-full text-left flex justify-between items-center"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span className="font-medium text-gray-800">
                                        {faq.question}
                                    </span>
                                    <IoIosArrowDown
                                        size={22}
                                        className={`text-green-600 transform transition-transform duration-300 ${
                                            isOpen ? 'rotate-180' : 'rotate-0'
                                        }`}
                                    />
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                        isOpen ? 'max-h-40 mt-3' : 'max-h-0'
                                    }`}
                                >
                                    <p className="text-neutral-grey text-sm">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
