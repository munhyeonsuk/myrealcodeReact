import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// import 'swiper/swiper-bundle.min.css'; // Swiper 스타일 추가

import snsscss from '../scss/srh.module.scss'; 
import imgIndices from '../../json/snsImgdata.json';

function SnsImg() {
    const [isGrid, setIsGrid] = useState(window.innerWidth > 1024);
    const [spaceBetween, setSpaceBetween] = useState(window.innerWidth <= 490 ? 10 : 20);

    // 호버 이벤트 핸들러
    const handleHover = (index) => {
        if (isGrid) {
            document.querySelectorAll(".hoverimgaction > div").forEach((v, i) => {
                if (i !== index) {
                    v.classList.add(snsscss.blurred);
                } else { 
                    v.classList.remove(snsscss.blurred);
                }
            });
        }
    };

    // 블러 제거
    const handleRemoveBlur = () => {
        if (isGrid) {
            document.querySelectorAll(".hoverimgaction > div").forEach((v) => {
                v.classList.remove(snsscss.blurred);
            });
        }
    };

    // 태블릿사이즈
    useEffect(() => {
        const handleResize = () => {
            setIsGrid(window.innerWidth > 1024);
            setSpaceBetween(window.innerWidth <= 490 ? 10 : 20);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`${snsscss.sns} container-1400`}>
            {isGrid ? (
                <div className="row d-flex align-items-stretch">
                    {imgIndices.images.map((index, i) => (
                        <div
                            key={index}
                            className="col-lg-3 col-md-6 mb-4 hoverimgaction"
                            onMouseEnter={() => handleHover(i)}
                            onMouseLeave={handleRemoveBlur}
                        >
                            <div className={`${snsscss.snsImgR} d-flex justify-content-center align-items-center`}>
                                <img src={index} alt={`인스타그램 이미지 ${i}번`} className="img-fluid" />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                // tablet
                <div className={`${snsscss.tablet} overflow-hidden`}>
                    <div className={`${snsscss.imgWrapper} d-flex mb-4`}>
                        <Swiper
                            className={`${snsscss.imgSwiper} overflow-hidden`}
                            spaceBetween={spaceBetween}
                            loop={true}
                            slidesPerView={2}
                            slidesPerGroup={1}
                            // navigation
                            // pagination={{ clickable: true }}
                        >
                            {imgIndices.images.map((index, i) => (
                                <SwiperSlide key={index} className={snsscss.swiperslide}>
                                    <div className={`${snsscss.slideImg} d-block`}>
                                        <img src={index} alt={`인스타그램 이미지 ${i}번`} className="img-fluid"/>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className={`${snsscss.snsRighttextR} d-flex`}>
                        <ul className="p-0">
                            <li className="d-flex align-items-center mb-2">
                                <strong className='ps-0'>선정기준</strong>
                                <p className="ms-3 mb-0">필수 해시태그 입력 여부<span></span>경주의 멋이 들어있는 감각적인 사진</p>
                            </li>
                            <li className="d-flex align-items-center">
                                <strong className='ps-0'>당첨자발표</strong>
                                <p className="ms-3 mb-0">매월 첫 주 인스타그램 DM으로 개별 연락</p>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SnsImg;
