import React, { useState } from 'react';
import ftscss from './scss/mhs.module.scss';

import logo from '../img/hdLogo.svg';
import facebook from '../img/ftFacebook.svg';
import instagram from '../img/ftInstagram.svg';
import youtube from '../img/ftYoutube.svg';
import language from '../img/ftlanguage.svg';
import check from '../img/ftCheck1.svg';

const Ft = () => {
  const [showul, setShowul] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('한국어');

  const handleLanguageClick = (language) => {
    setActiveLanguage(language);
    setShowul(false); 
  };

  return (
    <footer className={`${ftscss.ft} py-3`}>
      <div className="container-1824">
        <div className={`${ftscss.footerMenu} d-flex justify-content-between align-items-center mb-0`}>
          <h1><a href="/"><img src={logo} alt=""/></a></h1>
          <ul className={`${ftscss.ftsns} d-flex align-items-center mb-0 p-0`}>
            <li><span className={`${ftscss.footerIcon} visually-hidden`}>페이스북 </span><img src={facebook} alt="" /> </li>
            <li><span className={`${ftscss.footerIcon} visually-hidden`}>인스타그램</span><img src={instagram} alt="" /></li>
            <li><span className={`${ftscss.footerIcon} visually-hidden`}>유튜브</span><img src={youtube} alt="" /></li>
            <li className={`${ftscss.verticalLine}`}></li>
          </ul>

          <div className={`${ftscss.language} text-center ms-3 `}>
            <div className={`${ftscss.languageSelector}`}>
              <div className={`${ftscss.languageButton}`} onClick={() => setShowul(!showul)}>
                <img src={language} alt="" />
                <span className="text-white">{activeLanguage}</span>
                <img src={check} alt="" className={`${showul ? 'up' : ''}`} />
              </div>
              {showul && (
                <ul className={`${ftscss.languageMenu} ps-0`}>
                  <li
                    className={`${activeLanguage === '한국어' ? ftscss.active : ''} m-0`}
                    onClick={() => handleLanguageClick('한국어')}
                  >
                    한국어
                  </li>
                  
                  <li
                    className={`${activeLanguage === 'English' ? ftscss.active : ''} m-0`}
                    onClick={() => handleLanguageClick('English')}
                  >
                    English
                  </li>
                </ul>
              )}
            </div>
          </div>
         
        </div>

        <div>
          <ul className={`${ftscss.fnb} d-flex flex-wrap mt-2`}>
            <li>회사소개</li>
            <li>이용안내</li>
            <li>개인정보처리방침</li>
            <li>여행약관</li>
            <li>고객센터</li>
          </ul>
          <p className={`${ftscss.fnbdes} mb-0`}>
            상호명 (주)마이리얼트립 | 대표 이동건 | 개인정보보호책임자 정재훈 | 사업자등록번호 209-81-55339 사업자정보확인 |  통신판매업신고번호 2019-서울서초-0260 | 관광사업등록번호 : 제2019-3호<br />
            주소 서울특별시 서초구 강남대로 311, 드림플러스 강남 18층 (서초동, 한화생명보험빌딩) | 이메일 help@myrealtrip.com | 마케팅 문의 marketing@myrealtrip.com <br />
            제휴 문의 partnership@myrealtrip.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Ft;
