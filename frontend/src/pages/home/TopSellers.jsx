import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BookCard from '../books/BookCard';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure", "Novel", "Technology"];

const TopSellers = () => {
    const [selectedCategory, setSelectedCategory] = useState("Choose a genre");
    const { data: books = [] } = useFetchAllBooksQuery();

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    const filteredBooks = selectedCategory === "Choose a genre"
        ? books
        : books.filter(book => book.category.toLowerCase() === selectedCategory.toLowerCase());

    return (
        <div className="py-12 ml-6 pl-4 mr-6 pr-4 relative">
            <h2 className='text-3xl font-semibold mb-6 '>Top Sellers</h2>

            {/* Category Filtering */}
            <div className='mb-8 '>
                <select
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            <div className="relative">
                {/* Fixed Navigation Buttons Inside Swiper */}
                <button 
                    ref={prevRef} 
                    className="absolute left-[-20px] top-6/2 transform -translate-y-1/2 z-10 
                    bg-white text-blue-500 w-12 h-12 rounded-full flex items-center justify-center shadow-md
                    hover:bg-gray-200 transition">
                    ❮
                </button>
                <button 
                    ref={nextRef} 
                    className="absolute right-[-20px] top-6/2 transform -translate-y-1/2 z-10 
                    bg-white text-blue-500 w-12 h-12 rounded-full flex items-center justify-center shadow-md
                    hover:bg-gray-200 transition">
                    ❯
                </button>

                {/* Swiper Container */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
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
                    {filteredBooks.length > 0 && filteredBooks.map((book, index) => (
                        <SwiperSlide key={index}>
                            <BookCard book={book} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default TopSellers;
