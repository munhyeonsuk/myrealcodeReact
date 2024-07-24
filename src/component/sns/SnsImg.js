import React from 'react';
import snsscss from '../scss/srh.module.scss';
import imgIndices from '../../json/snsImgdata.json'

function SnsImg() {
    
    // 호버 이벤트 핸들러
    const handleHover = (index) => {
        document.querySelectorAll(".hoverimgaction > div").forEach((v, i) => {
            if (i !== index) {
                v.classList.add(snsscss.blurred);
            } else {
                v.classList.remove(snsscss.blurred);
            }
        });
    };

    // 블러 제거
    const handleRemoveBlur = () => {
        document.querySelectorAll(".hoverimgaction > div").forEach((v) => {
            v.classList.remove(snsscss.blurred);
        });
    };

    return (
        <div className="row d-flex align-items-stretch"> 
            {imgIndices.images.map((index, i) => (
                <div 
                    key={index} 
                    className="col-lg-3 col-md-6 mb-4 hoverimgaction"
                    onMouseEnter={() => handleHover(i)} // 호버 이벤트
                    onMouseLeave={handleRemoveBlur} //  블러 제거
                >
                    <div className={`${snsscss.snsImgR} d-flex justify-content-center align-items-center`}>
                        <img src={index} alt={`인스타그램 이미지 ${i}번`} className="img-fluid" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SnsImg;