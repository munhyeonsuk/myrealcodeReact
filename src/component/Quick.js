import React, { useEffect, useState } from 'react'
import up from '../img/quickUp.svg'
import form from '../img/quickQuestion.svg'
import ai from '../img/quickAI.svg'
import quscss from './scss/mhs.module.scss'

import Popupform from './Popupform'

const Quick = () => {
  const [popVisible, setPopVisible] = useState(false);  

  // 문의사항접수 팝업
  const popOpen = () => {
    setPopVisible(true);
  }

  const popClose = () => {
    setPopVisible(false);
  }

  // 퀵 top 고정
  useEffect(() => {
    const handleScroll = () => {
      const quickButton = document.querySelector('.quickWrap');
      const footer = document.querySelector('.footerWrap');
      const footerRect = footer.getBoundingClientRect();

      if (footerRect.top < window.innerHeight) {
        // 푸터에 도달한 경우, 버튼 위치를 조정
        quickButton.style.bottom = `${window.innerHeight - footerRect.top + 25}px`;
      } else {
        // 그렇지 않으면 기본 위치
        quickButton.style.bottom = '25px';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className={`${quscss.quick} quickWrap`}>
        <ul>
          <li>
            <a href="#top">
              <img src={up} alt="top" className="img-fluid" />
              <span className="visually-hidden">위로</span>
            </a>
          </li>
          <li className={quscss.questionIcon} onClick={popOpen}>
            <img src={form} alt="문의사항접수" className="img-fluid" />
            <span className="visually-hidden">위로</span>
          </li>
          <li className="position-relative">
            <img src={ai} alt="AI TRIP PLANNER" className="img-fluid" />
            <span className="position-absolute">AI TRIP PLANNER</span>
          </li>
        </ul>      
      </div>
      <Popupform onOpen={popVisible} onClose={popClose} />
    </>    
  );
};
  
export default Quick;