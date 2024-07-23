import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import recommend from './scss/psh.module.scss'
import './scss/recommendslide.scss'

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
                        spaceBetween={53}
                        scrollbar={{ el: '.swiper-scrollbar', draggable: true }}
                        navigation={{
                          nextEl: ".recommendSlideS .swiper-button-next",
                          prevEl: ".recommendSlideS .swiper-button-prev",
                        }}
                        modules={[Navigation, Scrollbar]}
                        className="reSwiper"
                    >
                        <SwiperSlide>
                            <div className="recommendSlideItemS">
                                <div className="recommendSlideItemInnerS">
                                    <img src="./img/recommend1.jpg" alt="강릉" />
                                </div>
                                <p>서울에서 강릉까지<br />
                                    KTX 당일치기</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="recommendSlideItemS">
                                <div className="recommendSlideItemInnerS">
                                    <img src="./img/recommend1.jpg" alt="강릉" />
                                </div>
                                <p>서울에서 강릉까지<br />
                                    KTX 당일치기</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="recommendSlideItemS">
                                <div className="recommendSlideItemInnerS">
                                    <img src="./img/recommend1.jpg" alt="강릉" />
                                </div>
                                <p>서울에서 강릉까지<br />
                                    KTX 당일치기</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="recommendSlideItemS">
                                <div className="recommendSlideItemInnerS">
                                    <img src="./img/recommend1.jpg" alt="강릉" />
                                </div>
                                <p>서울에서 강릉까지<br />
                                    KTX 당일치기</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="recommendSlideItemS">
                                <div className="recommendSlideItemInnerS">
                                    <img src="./img/recommend1.jpg" alt="강릉" />
                                </div>
                                <p>서울에서 강릉까지<br />
                                    KTX 당일치기</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="recommendSlideItemS">
                                <div className="recommendSlideItemInnerS">
                                    <img src="./img/recommend1.jpg" alt="강릉" />
                                </div>
                                <p>서울에서 강릉까지<br />
                                    KTX 당일치기</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="recommendSlideItemS">
                                <div className="recommendSlideItemInnerS">
                                    <img src="./img/recommend1.jpg" alt="강릉" />
                                </div>
                                <p>서울에서 강릉까지<br />
                                    KTX 당일치기</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div class="slide-control">
                        <div class="swiper-scrollbar"></div>
                        <div class="swiper-btns">
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Recommend
