import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import news1 from "../../assets/news/news-1.png"
import news2 from "../../assets/news/news-2.png"
import news3 from "../../assets/news/news-3.png"
import news4 from "../../assets/news/news-4.png"
import { Link } from 'react-router-dom';

const news = [
    {
        "id": 1,
        "title": "Landscape Photography",
        "description": "Landscape photography captures the natural beauty of our environment, from sweeping mountain ranges to serene seascapes. It focuses on showcasing the vastness, patterns, and colors of nature, inspiring awe and respect for the world around us.",
        "image": news1
    },
    {
        "id": 2,
        "title": "Portrait Photography",
        "description": " Portrait photography focuses on capturing the personality and emotion of individuals or groups, often highlighting the subject’s expressions, mood, and essence. Portraits can be candid or posed, emphasizing either natural beauty or personal story.",
        "image": news2
    },
    {
        "id": 3,
        "title": "Wildlife Photography",
        "description": "Wildlife photography showcases animals in their natural habitats, capturing unique and often rare moments that reveal their behaviors, interactions, and survival. It requires patience and respect for nature and aims to bring awareness to conservation efforts.",
        "image": news3
    },
    {
        "id": 4,
        "title": "Fashion Photography",
        "description": "Fashion photography merges art and style, focusing on clothing, accessories, and beauty. Often set in striking environments, it brings out the aesthetic appeal and vision behind fashion, creating scenes that are bold, creative, and glamorous.",
        "image": news4
    },
    {
        "id": 5,
        "title": "Street Photography",
        "description": "Street photography is about capturing candid moments of everyday life in urban environments. It highlights the diversity, energy, and spontaneity of public spaces, telling stories of people, places, and moments in time.",
        "image": news2
    }
]

const News = () => {
  return (
    <div className='py-16'>
        <h2 className='text-3xl font-semibold mb-6'>  <span style={{color:"red"}}>Popular </span> products
        </h2>

        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        {
            news.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className='flex flex-col sm:flex-row sm:justify-between items-center gap-12'>
                        {/* content */}
                        <div className='py-4'>
                            <Link to="/">
                                 <h3 className='text-lg font-medium hover:text-blue-500 mb-4'>{item.title}</h3>
                            </Link>
                            <div className='w-12 h-[4px] bg-primary mb-5'></div>
                            <p className='text-sm text-gray-600'>{item.description}</p>
                        </div>

                        <div className='flex-shrink-0'>
                            <img src={item.image} alt=""  className='w-full object-cover'/>
                        </div>
                    </div>
                </SwiperSlide>
            ) )
        }
      </Swiper>
    </div>
  )
}

export default News