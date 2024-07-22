import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import pshscss from './scss/psh.module.scss'
import './scss/mainslide.scss'


function Mainslider() {    
    return (        
        <div className={pshscss.slide_wrap}>
            <Swiper
                spaceBetween={53}
                slidesPerView={6}
                loop={true} // 루프 옵션 활성화
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className={pshscss.slide_item}>Slide 1</SwiperSlide>
                <SwiperSlide className={pshscss.slide_item}>Slide 2</SwiperSlide>
                <SwiperSlide className={pshscss.slide_item}>Slide 3</SwiperSlide>
                <SwiperSlide className={pshscss.slide_item}>Slide 4</SwiperSlide>
                <SwiperSlide className={pshscss.slide_item}>Slide 5</SwiperSlide>
                <SwiperSlide className={pshscss.slide_item}>Slide 6</SwiperSlide>
                <SwiperSlide className={pshscss.slide_item}>Slide 7</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Mainslider
