import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BookCard from '../books/BookCard';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

const Recommened = () => {
    const { data: books = [], isLoading, isError, error } = useFetchAllBooksQuery();

    if (isLoading) return <div>Loading recommended books...</div>;
    if (isError) {
        console.error("Error fetching books:", error);
        return <div>Error loading recommended books. Please try again later.</div>;
    }
    if (books.length === 0) {
        return <div>No recommended books available at this time.</div>;
    }

    return (
        <div className='py-16'>
            <h2 className='text-3xl font-semibold mb-6'>Recommended for you</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 40 },
                    1024: { slidesPerView: 2, spaceBetween: 50 },
                    1180: { slidesPerView: 3, spaceBetween: 50 },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                loop={true}
            >
                {books.slice(0, 10).map((book, index) => (
                    <SwiperSlide key={index}>
                        <BookCard book={book} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Recommened;
