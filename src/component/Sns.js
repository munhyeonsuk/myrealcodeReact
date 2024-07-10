import React, { useState } from 'react';
import instagram from '../img/instagram1.svg';
import snsscss from './scss/srh.module.scss'; 

function Sns() {
    const imgIndices = [1, 2, 3, 4, 5, 6, 7, 8]; // 이미지 인덱

    const [hoveredIndex, setHoveredIndex] = useState(null);
    // hoveredIndex는 현재 호버된 이미지의 인덱스를 저장하는 상태 변수
    // setHoveredIndex는 hoveredIndex 상태를 업데이트하는 함수
    // 초기값은 null로 설정하여 아무 이미지도 호버되지 않은 상태
   
    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };
    // handleMouseEnter 함수는 이미지에 마우스가 올라갔을 때 호출
    // index 매개변수는 호버된 이미지의 인덱스
    // setHoveredIndex(index)를 호출하여 hoveredIndex 상태를 호버된 이미지의 인덱스로 업데이트

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };
    // handleMouseLeave 함수는 이미지에서 마우스가 떠났을 때 호출
    // setHoveredIndex(null)를 호출하여 hoveredIndex 상태를 null로 업데이트. 이는 어떤 이미지도 호버되지 않은 상태

    // 사용자가 이미지에 마우스를 올리면 handleMouseEnter 함수가 호출되어 hoveredIndex가 해당 이미지의 인덱스로 설정
    // 사용자가 이미지에서 마우스를 떼면 handleMouseLeave 함수가 호출되어 hoveredIndex가 null로 설정

    return (
        <section className={snsscss.sns}>
            <div className="container-1400">
                <div className="row justify-content-between align-items-end">
                    <div className={`${snsscss.snsLefttextR} col-lg-6`}>
                        <div className="d-flex align-items-center mb-2">
                            <i><img src={instagram} alt="인스타그램 아이콘" /></i>
                            <div className="ms-3">
                                <h2 className="mb-1">#경주어때 #마이리얼경주</h2>
                                <p className="mb-0">여행자들의 눈으로 본 경주</p>
                            </div>
                        </div>
                        <p>필수 해시태그 <span>#경주어때 #마이리얼경주</span> 와 함께 경주의 멋진 사진을 남겨주시면<br />
                        추첨을 통해서 10분께 스타벅스 커피 쿠폰을 보내드립니다.</p>
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
                
                <div className="row d-flex align-items-stretch"> 
                    {imgIndices.map(index => (
                        <div 
                            key={index} 
                            className="col-lg-3 col-md-6 mb-4"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={`${snsscss.snsImgR} d-flex justify-content-center align-items-center ${hoveredIndex !== null && hoveredIndex !== index ? snsscss.blurred : ''}`}>
                                <img src={`/img/sns${index}.jpg`} alt={`인스타그램 이미지 ${index}번`} className="img-fluid" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Sns;
