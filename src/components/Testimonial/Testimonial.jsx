import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    {
        feedback: 'This platform changed everything for us. Super smooth!',
        author: 'Sarah Johnson',
    },
    {
        feedback: 'The best design and support I’ve ever seen.',
        author: 'David Smith',
    },
    {
        feedback: 'It’s fast, easy to use, and reliable. Highly recommended.',
        author: 'Emily Carter',
    },
    {
        feedback: 'Clean UI and perfect UX, this is what we needed.',
        author: 'Michael Brown',
    },
    { feedback: 'I love how intuitive everything is.', author: 'Lisa Adams' },
];

export default function Testimonial() {
    return (
        <section
            className="py-16 px-4 bg-neutral-silver scroll-mt-40"
            id="testimonials"
            data-aos="fade-up"
        >
            <div className="responsive__container text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    What Our Clients Say
                </h2>
                <p className="text-neutral-grey mb-12">
                    Hear from some of our happy customers using our services and
                    platform.
                </p>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1.2}
                    spaceBetween={20}
                    centeredSlides={true}
                    autoplay={{ delay: 2500 }}
                    pagination={{ clickable: true }}
                    loop={true}
                    breakpoints={{
                        768: {
                            slidesPerView: 2.5,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="pb-12"
                >
                    {testimonials.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="bg-white w-full shadow-md rounded-2xl min-h-[200px] p-8 h-full mx-4 text-left text-sm space-y-3 flex flex-col justify-between">
                                <p>“{item.feedback}”</p>
                                <p className="font-semibold">- {item.author}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
