import Label from './shared/Label';
import _config from '../constants/index.js';

export default function WhyChooseUs() {
    return (
        <section
            className="bg-white py-16 px-4 scroll-mt-20"
            data-aos="fade-up"
            id="features"
        >
            <div className="max-w-5xl mx-auto text-center space-y-4">
                <Label>Choose us</Label>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Smart, Simple, Reliable Accounting
                </h2>
                <p className="text-seconday mb-10">
                    We go beyond just numbers. Here's why businesses trust our
                    accounting solutions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
                    {_config.FEATURES.map((point, idx) => (
                        <div
                            data-aos="zoom-in-up"
                            key={idx}
                            className="bg-gray-50 p-10 rounded-xl shadow-md transition-transform duration-500 ease-in-out hover:scale-105"
                        >
                            <h3 className="text-lg font-semibold mb-2">
                                {point.title}
                            </h3>
                            <p className="text-seconday">{point.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
