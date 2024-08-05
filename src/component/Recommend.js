import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Pagination } from 'swiper/modules';
import recommend from './scss/psh.module.scss'
import './scss/psh.recommend.scss'
import Slide from './recommend/Slide';
import redata from '../json/recommend.json'

function Recommend() {
    
    return (
        <section className={recommend.recommend}>
            <div className="container-1824">
                <div className="container-1400">
                    <div className={recommend.title}>
                        <h2>다채로운 매력, 대한민국</h2>
                        <p>전국 곳곳의 다양한 매력을 느껴보세요.<br />
                        여행은 계획하는 지금, 이 순간에 시작됩니다.</p>
                    </div>
                </div>
                <div className="recommendSlideS">
                    <Swiper
                        loop={true}
                        slidesPerView="auto"
                        slidesPerGroup={1}
                        spaceBetween={16} // 기본 간격
                        breakpoints={{
                            1440: {
                            spaceBetween: 23, // 1440px 이상일 때 간격
                            },
                            1520: {
                            spaceBetween: 53, // 1520px 이상일 때 간격
                            }
                        }}
                        scrollbar={{ el: '.swiper-scrollbar', draggable: true }}
                        navigation={{
                          nextEl: ".recommendSlideS .swiper-button-next",
                          prevEl: ".recommendSlideS .swiper-button-prev",
                        }}
                        pagination={{
                            el: '.swiper-pagination',
                            type: 'fraction',
                            clickable: true,
                            formatFractionCurrent: number => ('0' + number).slice(-2),
                            formatFractionTotal: number => ('0' + number).slice(-2),
                        }}
                        modules={[Navigation, Scrollbar, Pagination]}
                        className="reSwiper"
                    >
                        {
                            redata.map((v, i)=> {
                                return(
                                    <SwiperSlide key={i} >
                                        <Slide src={v.img} alt={v.alt} text1={v.text.split("|")[0]} text2={v.text.split("|")[1]} href={v.href} />
                                    </SwiperSlide>
                                )
                            })
                        }                                            
                    </Swiper>
                    <div className="slide-control">
                        <div className="swiper-scrollbar"></div>
                        <div className="swiper-btns">
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Recommend