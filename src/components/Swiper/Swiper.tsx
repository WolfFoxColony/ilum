import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "./Swiper.scss";

const SwiperSlider = () => {
    return (
        <Swiper
            className="container swiper-slider"
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={'auto'}
            navigation
            pagination={{clickable: true}}
            scrollbar={{draggable: true}}
        >
            <SwiperSlide className="swiper-slider__slide">
                <div className="swiper-slider__slide-block">
                    <img className="swiper-slider__slide-img" src="/spd.webp"/>
                </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slider__slide">
                <div className="swiper-slider__slide-block">
                    <img className="swiper-slider__slide-img" src="/prometheus.webp"/>
                </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slider__slide">
                <div className="swiper-slider__slide-block">
                    <img className="swiper-slider__slide-img" src="/andersen.webp"/>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}
export default SwiperSlider;
