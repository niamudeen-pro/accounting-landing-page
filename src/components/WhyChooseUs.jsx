const points = [
    {
        title: 'Expert Accountants',
        desc: 'Our team has years of experience helping businesses stay financially healthy.',
    },
    {
        title: 'Affordable Pricing',
        desc: 'Transparent and flexible plans to fit all business sizes.',
    },
    {
        title: 'Secure & Confidential',
        desc: 'We protect your data with strong security measures and strict privacy.',
    },
    {
        title: 'Timely Reports',
        desc: 'Never miss a deadline again – we deliver on time, every time.',
    },
];
export default function WhyChooseUs() {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Why Choose Us
                </h2>
                <p className="text-neutral-grey mb-10">
                    We go beyond just numbers. Here's why businesses trust our
                    accounting solutions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
                    {points.map((point, idx) => (
                        <div
                            data-aos="zoom-in-up"
                            key={idx}
                            className="bg-gray-50 p-10 rounded-xl shadow-md transition-transform duration-500 ease-in-out hover:scale-105"
                        >
                            <h3 className="text-lg font-semibold text-green-600 mb-2">
                                {point.title}
                            </h3>
                            <p className="text-neutral-grey">{point.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
