import React, { useState, useEffect } from 'react';
import hdscss from './scss/mhs.module.scss'

import logo from '../img/hdLogo.svg'
import search from '../img/hdSearch.svg'
import login from '../img/hdLogin.svg'
import close from '../img/hdClose.svg'
import allbtn from '../img/allbtn.svg'

import Hdnavi from './hd/Hdnavi';
import Hdpopular from './hd/Hdpopular';


function Hd() {
    const [bgColor,setBgColor] = useState("transparent"); // 헤더 배경색 // 초기값
    const [SubClass,setSubClass] = useState(null); // 헤더 border-bottom // 초기값

    const scrollEvent = () => {
        const scrollY = window.scrollY;

        if(scrollY > 806) {
            setBgColor("#fff")
            setSubClass("on")
        }else {
            setBgColor("transparent")
            setSubClass("none")
        }
      
    }

    useEffect(()=>{
        window.addEventListener('scroll', scrollEvent);
        const openBtn = document.querySelector('.open');
      const closeBtn = document.querySelector('.close');
      const searchMenu = document.querySelector(`.searchdivbox`);
  
      const toggleMenu = () => {
        if (searchMenu) {
          searchMenu.classList.toggle('d-block');
          searchMenu.classList.toggle('d-none');
        }
      };
  
      if (openBtn) {
        openBtn.addEventListener('click', toggleMenu);
      }
  
      if (closeBtn) {
        closeBtn.addEventListener('click', toggleMenu);
      }

        return() => {
            window.removeEventListener('scroll', scrollEvent);
            if (openBtn) {
              openBtn.removeEventListener('click', toggleMenu);
            }
            if (closeBtn) {
              closeBtn.removeEventListener('click', toggleMenu);
            }
            
        }
    }, [])
  
      


    return (
        <>
       
          <header className={`${hdscss.hd} mainhd fixed-top`} style={{ backgroundColor: bgColor}}>
                <div className="container-1824 d-flex justify-content-between align-items-center">
                    <button className={`${hdscss.allMenuBtn} p-0 ms-3`}><img src={allbtn} alt="" /></button>
                    <h1><a href="/"><img src={logo} alt=""/></a></h1>
                    <ul className={`${hdscss.gnb} ${SubClass} d-flex ps-0 mb-0`}>
                        <Hdnavi />
                    </ul>
                    <ul className={`${hdscss.utill} d-flex justify-content-end position-relative mb-0 p-0`}>
                        <li className="position-relative">
                            <img src={search} alt="검색" className= {`${hdscss.searchimg} open`} />
                            <span className="visually-hidden">검색</span>
            
                            <div className={`${hdscss.searchMenu} searchdivbox d-none`} >
                                <div className={`${hdscss.dropdownbox} m-0`}>
                                    <div className="text-end pb-1">
                                        <img className={`${hdscss.searchimg} pe-3`} src={search} alt="검색" />
                                        <input type="text" className={hdscss.searchinput}  />
                                        <button className={`${hdscss.searchbt} pe-1 close` }  ><img src={close} alt="닫기" /></button>
                                    </div>
                                    <p className={`${hdscss.searchPopular} pt-2 mb-1 text-black-50`}>실시간인기</p>
                                    <div className={`${hdscss.searchTop10} d-flex`}>
                                        <div>
                                          <Hdpopular />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="ms-4 me-3">
                            <img src={login} alt="로그인" />
                            <span className="visually-hidden">로그인</span>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Hd

