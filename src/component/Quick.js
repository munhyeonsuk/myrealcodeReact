import React, { useState } from 'react'
import up from '../img/quickUp.svg'
import form from '../img/quickQuestion.svg'
import ai from '../img/quickAI.svg'
import quscss from './scss/mhs.module.scss'

import Popupform from './Popupform'

const Quick = () => {
  const [popVisible, setPopVisible] = useState(false);

  const popOpen = () => {
    setPopVisible(true);
  }

  const popClose = () => {
    setPopVisible(false);
  }

  return (
    <>
      <section className={quscss.quick}>
        <ul>
          <li>
            <a href="#top">
              <img src={up} alt="" />
              <span className="visually-hidden">위로</span>
            </a>
          </li>
          <li className={quscss.questionIcon} onClick={popOpen}><img src={form} alt="" /></li>
          <li className="position-relative"><img src={ai} alt="" />
            <span className="mt-2 position-absolute">AI TRIP PLANNER</span>
          </li>
        </ul>      
      </section>
      <Popupform onOpen={popVisible} onClose={popClose} />
    </>    
  );
};
  
export default Quick;