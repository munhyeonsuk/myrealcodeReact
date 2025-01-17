import React, { useState } from 'react';
import ftscss from './scss/mhs.module.scss';
import{ Link } from 'react-router-dom'

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
    <footer className={`${ftscss.ft} footerWrap py-3`}>
      <div className="container-1824">
        <div className={`${ftscss.footerMenu} d-flex justify-content-between align-items-center mb-0`}>
          <h1><a href="/"><img src={logo} alt="로고" className="img-fluid" /></a></h1>
          <ul className={`${ftscss.ftsns} d-flex align-items-center`}>
            <li><a href="#"><img src={facebook} alt="페이스북" className="img-fluid" /><span className="visually-hidden">페이스북</span></a></li>
            <li><a href="#"><img src={youtube} alt="유튜브" className="img-fluid" /><span className="visually-hidden">유튜브</span></a></li>
            <li><a href="#"><img src={instagram} alt="인스타그램" className="img-fluid" /><span className="visually-hidden">인스타그램</span></a></li>
          </ul>

          <div className={`${ftscss.language} m-0`}>
            <div className={`${ftscss.languageSelector}`}>
              <div className={`${ftscss.languageButton}`} onClick={() => setShowul(!showul)}>
                <img src={language} alt="언어 아이콘" className="img-fluid" />
                <span className="text-white">{activeLanguage}</span>
                <img src={check} alt="드롭다운 아이콘" className={`${showul ? 'up' : ''} img-fluid`} />
              </div>
              {showul && (
                <ul className={`${ftscss.languageMenu} mb-0`}>
                  <li
                    className={`${activeLanguage === '한국어' ? ftscss.active : ''}`}
                    onClick={() => handleLanguageClick('한국어')}
                  >
                    한국어
                  </li>
                  
                  <li
                    className={`${activeLanguage === 'English' ? ftscss.active : ''}`}
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
          <ul className={`${ftscss.fnb} d-flex flex-wrap mt-2 ms-0`}>
            <li><Link>회사소개</Link></li>
            <li><Link>이용안내</Link></li>
            <li><Link>개인정보처리방침</Link></li>
            <li><Link>여행약관</Link></li>
            <li><Link>고객센터</Link></li>
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
