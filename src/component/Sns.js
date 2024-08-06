import React, { useState, useEffect } from 'react';
import snsscss from './scss/srh.module.scss'; 
import instagram from '../img/instagram1.svg';
import SnsImg from './sns/SnsImg';

function Sns() {
    const [isGrid, setIsGrid] = useState(window.innerWidth > 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsGrid(window.innerWidth > 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className={snsscss.sns}>
            {isGrid ? (
                <div className="container-1400">
                    <div className={`${snsscss.textbox} row justify-content-between align-items-end mx-0`}>
                        <div className={`${snsscss.snsLefttextR} col-lg-6`}>
                            <div className="d-flex align-items-center mb-2">
                                <i><img src={instagram} alt="인스타그램 아이콘" /></i>
                                <div className="ms-3">
                                    <h2 className="mb-1">#경주어때 #마이리얼경주</h2>
                                    <p className="mb-0">여행자들의 눈으로 본 경주</p>
                                </div>
                            </div>
                            <p>필수 해시태그<span className={snsscss.colorchange}> #경주어때 #마이리얼경주</span>와 함께 경주의 멋진 사진을 남겨주시면<br />
                            추첨을 통해서 <span className={snsscss.spantext}>10분께 </span>스타벅스 커피 쿠폰을 보내드립니다.</p>
                        </div> 
                        <div className={`${snsscss.snsRighttextR} col-md-6 d-flex justify-content-end`}>
                            <ul className="">
                                <li className="d-flex align-items-center mb-2">
                                    <strong className='ps-0'>선정기준</strong>
                                    <p className="ms-2 mb-0">필수 해시태그 입력 여부<br />
                                        경주의 멋이 들어있는 감각적인 사진</p>
                                </li>
                                <li className="d-flex align-items-center">
                                    <strong>당첨자발표</strong>
                                    <p className="ms-2 mb-0">매월 첫 주 인스타그램 DM으로 개별 연락</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ) : ( 
                // 태블릿 , 모바일
                <div className={snsscss.textarea}>
                    <div className={snsscss.snsLefttextR}>
                        <div className={`${snsscss.titlebox} d-flex`}>
                            <i><img src={instagram} alt="인스타그램 아이콘"/></i>
                            <div className={`${snsscss.text}`}>
                                <h2 className="mb-2">#경주어때 #마이리얼경주</h2>
                                <p> 필수 해시태그와 함께 경주의 멋진 사진을 남겨주시면<br />
                                    추첨을 통해 스타벅스 커피 쿠폰을 보내드립니다.</p>
                            </div>
                        </div>        
                    </div> 
                </div>
            )}
                
                <SnsImg />
        </section>
    );
}

export default Sns;
