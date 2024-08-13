import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Controller } from 'swiper/modules';
import { Link } from 'react-router-dom';

import './scss/srh.mainslider.scss';
import mainSlider from './scss/srh.module.scss';
import slides from '../json/maindata.json';

const MainSlider = () => {
  const [bgColor, setBgColor] = useState(slides[0].bgcolor);
  const [isPlaying, setIsPlaying] = useState(true);
  const [swiperTextInstance, setSwiperTextInstance] = useState(null);
  const [swiperImgInstance, setSwiperImgInstance] = useState(null);
  const [spaceBetween, setSpaceBetween] = useState(window.innerWidth <= 480 ? 10 : 30);

  const resetProgressBar = () => {
    const fillElement = document.querySelector(`.mainSlider_fill`);
    if (fillElement) {
      fillElement.style.transition = 'none';
      fillElement.style.width = '0%';
      setTimeout(() => {
        fillElement.style.transition = 'width 5s linear';
        fillElement.style.width = '100%';
      }, 50);
    }
  };

  useEffect(() => {
    const fillElement = document.querySelector(`.mainSlider_fill`);
    
    if (swiperTextInstance) {
      swiperTextInstance.on('init', () => {
        resetProgressBar();
        const activeSlide = swiperTextInstance.slides[swiperTextInstance.activeIndex];
        const bgcolor = activeSlide.getAttribute('data-bgcolor');
        setBgColor(bgcolor);
      });
      
      swiperTextInstance.on('slideChange', () => {
        if (isPlaying) {
          resetProgressBar();
        }
        const activeSlide = swiperTextInstance.slides[swiperTextInstance.activeIndex];
        const bgcolor = activeSlide.getAttribute('data-bgcolor');
        setBgColor(bgcolor);
      });

      swiperTextInstance.on('autoplayStop', () => {
        if (fillElement) {
          fillElement.style.transition = 'none';
          fillElement.style.width = `${(swiperTextInstance.autoplay.paused ? swiperTextInstance.autoplay.timeLeft : 0) / 50}%`;
        }
      });

      swiperTextInstance.on('autoplayStart', () => {
        resetProgressBar();
      });

      if (swiperImgInstance) {
        swiperImgInstance.controller.control = swiperTextInstance;
        swiperTextInstance.controller.control = swiperImgInstance;
      }
    }
  }, [swiperTextInstance, swiperImgInstance, isPlaying]);

  useEffect(() => {
    const handleResize = () => {
      setSpaceBetween(window.innerWidth <= 480 ? 10 : 30);
      const hdElement = document.querySelector('header');
      const swiperdom = document.querySelector('.srh_mainSlider')
      if (hdElement && swiperdom) {
        const hdComputedStyle = window.getComputedStyle(hdElement);
        const headerHeight = hdComputedStyle.height;
        
        // CSS 변수 설정
        document.documentElement.style.setProperty('--header-height', headerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const togglePlayPause = () => {
    const playPauseButton = document.querySelector('.btnchange');
    const fillElement = document.querySelector(`.mainSlider_fill`);
    const fillCoverElement = document.querySelector(`.mainSlider_fillCover`);

    if (isPlaying) {
      swiperTextInstance.autoplay.stop();
      swiperImgInstance.autoplay.stop();
      setIsPlaying(false);
      playPauseButton.classList.add('play');
      if (fillElement) {
        fillElement.style.transition = 'none';
        fillElement.style.width = '0%';
      }
      if (fillCoverElement) {
        fillCoverElement.style.display = 'block';
      }
    } else {
      swiperTextInstance.params.autoplay = {
        delay: 5000,
        disableOnInteraction: false
      };
      swiperTextInstance.autoplay.start();
      resetProgressBar();
      setIsPlaying(true);
      playPauseButton.classList.remove('play');
      if (fillCoverElement) {
        fillCoverElement.style.display = 'none';
      }
    }
  };

  return (
    <section className={`${mainSlider.mainslider} overflow-hidden srh_mainSlider`} style={{ backgroundColor: bgColor }}>
      <div className={`${mainSlider.mainwrapper} d-flex justify-content-center start-50 position-relative`}>
        <div className={`${mainSlider.mainTextbox} position-relative`}>
          <Swiper
            className={mainSlider.mbTextSwp}
            spaceBetween={0}
            loop={true}
            loopAdditionalSlides={2}
            pagination={{
              el: `.mainSlider_numberui`,
              type: 'fraction',
              formatFractionCurrent: number => ('0' + number).slice(-2),
              formatFractionTotal: number => ('0' + number).slice(-2),
            }}
            navigation={{
              nextEl: `.mainSlider_buttonNext`,
              prevEl: `.mainSlider_buttonPrev`
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Pagination, Autoplay, Controller]}
            onSwiper={(swiper) => setSwiperTextInstance(swiper)}
            onInit={resetProgressBar}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className={mainSlider.mainSlidetext} data-bgcolor={slide.bgcolor}>
                <p className="mb-3 px-2 d-inline-flex w-auto">{slide.description}</p>
                <strong className="d-block">{slide.title.split('|')[0]}<br />{slide.title.split('|')[1]}</strong>
                <Link to={slide.link} className={`${mainSlider.text_with_underline} d-block mt-3`}>자세히보기</Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={`${mainSlider.mainPagebox} d-flex align-items-center`}>
            <div className={`swiper_pagination ${mainSlider.swiper_progress_bar} d-flex align-items-center`}>
              <span className={mainSlider.slide_progress_bar}>
                <span className={`${mainSlider.fill} mainSlider_fill`}></span>
                <span className={`${mainSlider.fillCover} mainSlider_fillcover`} style={{ display: isPlaying ? 'none' : 'block' }}></span>
              </span>
            </div>
            <div className={`swiper_pagination ${mainSlider.numberui} mainSlider_numberui`}></div>
            <div className={`${mainSlider.btn} d-flex align-items-center justify-content-between`}>
              <button className={`${mainSlider.buttonPrev} mainSlider_buttonPrev`}>
                <span className="visually-hidden">이전</span>
              </button>
              <div className={`${mainSlider.button_auto} d-flex align-items-center`}>
                <button
                  className={`${mainSlider.button_autoControl} btnchange ${!isPlaying ? 'play' : ''}`}
                  onClick={togglePlayPause}
                >
                  <span className="visually-hidden">{isPlaying ? '멈춤' : '재생'}</span>
                </button>
              </div>
              <button className={`${mainSlider.buttonNext} mainSlider_buttonNext`}>
                <span className="visually-hidden">다음</span>
              </button>
            </div>
          </div>
        </div>

        <div className="col overflow-hidden">
          <Swiper
            className={`${mainSlider.mainImgbox} swiper mx-0 overflow-visible`}
            spaceBetween={spaceBetween}
            loop={true}
            loopAdditionalSlides={2}
            pagination={{
              el: `.${mainSlider.fill}`
            }}
            slidesPerView={1}
            modules={[Navigation, Pagination, Autoplay, Controller]}
            onSwiper={(swiper) => setSwiperImgInstance(swiper)}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <Link to={slide.link} className='d-block'>
                  <img className={mainSlider.img} src={slide.imgSrc} alt={slide.imgAlt} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
      </div>
    </section>
  );
};

export default MainSlider;