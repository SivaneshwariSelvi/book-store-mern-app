import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BookCard from '../books/BookCard';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

const Recommended = () => {
    const { data: books = [] } = useFetchAllBooksQuery();

    return (
        <div className='py-16 ml-6 pl-4 mr-6 pr-4 relative'>
            <h2 className='text-3xl font-semibold mb-6'>Recommended for you</h2>

            {/* Custom Navigation Buttons */}
            <div className="relative">
                <button className="swiper-button-prev-custom absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10 
                    bg-white text-blue-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg 
                    hover:bg-gray-200 transition pointer-events-auto">
                    ❮
                </button>
                <button className="swiper-button-next-custom absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 
                    bg-white text-blue-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg 
                    hover:bg-gray-200 transition pointer-events-auto">
                    ❯
                </button>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={{
                    prevEl: '.swiper-button-prev-custom',
                    nextEl: '.swiper-button-next-custom',
                }}
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 40 },
                    1024: { slidesPerView: 2, spaceBetween: 50 },
                    1180: { slidesPerView: 3, spaceBetween: 50 },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    books.length > 0 && books.slice(8, 18).map((book, index) => (
                        <SwiperSlide key={index}>
                            <BookCard book={book} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Recommended;
