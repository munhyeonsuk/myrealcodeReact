import React, { useState, useEffect } from 'react';
import hdscss from './scss/mhs.module.scss'
import './scss/mhs.hd.scss'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import logo from '../img/hdLogo.svg'
import search from '../img/hdSearch.svg'
import login from '../img/hdLogin.svg'
import close from '../img/hdClose.svg'
import allbtn from '../img/allbtn.svg'

import Hdnavi from './hd/Hdnavi';
import Hdpopular from './hd/Hdpopular';
import Mnavi from './hd/Mnavi';

const HdWrap = styled.header`
    &.showMnavi {
        background: transparent !important;
        padding: 0;
        &:after {
            content: "";
            display:block;
            width: 100vw;
            height: 100vh;
            background: rgba(0,0,0,0.5);
            position: fixed;
            top: 0;
    
        }
        & > div {
            max-width: 490px;
            width: 100%;
            background-color: #FFEBB7;
            position: relative;
            z-index: 1;
            padding: 13px 15px;
            h1 {
                margin : 0 auto;
            }
        }
    }
`;


const HdBtn = styled.button`
    position: fixed;
    right:0;
    bottom:0;
`;

function Hd() {
    const [hd, setHd] = useState(true);

    const [bgColor, setBgColor] = useState("transparent"); // 헤더 배경색 초기값
    const [SubClass, setSubClass] = useState(null); // 헤더 border-bottom 초기값
    const [showMnavi, setShowMnavi] = useState(false); // Mnavi 표시 여부
    const [showAllMenuBtn, setShowAllMenuBtn] = useState(true); // 햄버거 메뉴 버튼 표시 여부
    const [showSearchIcon, setShowSearchIcon] = useState(true); 
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024); // 1024 기준 데스크탑 여부 체크

    const scrollEvent = () => {
        const scrollY = window.scrollY;

        if (scrollY > 806) {
            setBgColor("#fff")
            setSubClass("on")
        } else {
            setBgColor("transparent")
            setSubClass("none")
        }
    }

    useEffect(() => {
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

    

        return () => {
            window.removeEventListener('scroll', scrollEvent);
            if (openBtn) {
                openBtn.removeEventListener('click', toggleMenu);
            }
            if (closeBtn) {
                closeBtn.removeEventListener('click', toggleMenu);
            }
        }
    }, [])
    
    useEffect(()=>{
        console.log(showMnavi)
        if(showMnavi){
            document.body.classList.add('overflow-hidden')

        } else{
            document.body.classList.remove('overflow-hidden')
        }
    }, [showMnavi]);

    useEffect(() => {
        const handleResize = () => {
            const isDesktop = window.innerWidth >= 1024;
            setIsDesktop(isDesktop);

            if (isDesktop) {
                setShowMnavi(false); // 데스크탑 모드일 때 Mnavi 자동 닫기
                handleCloseBtnClick(false) 
            }
        };

        window.addEventListener('resize', handleResize);

        // 초기 화면 크기 확인
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const handleAllMenuBtnClick = () => {
        setShowMnavi(true);
        setShowAllMenuBtn(false);
        setShowSearchIcon(false);
    };

    const handleCloseBtnClick = () => {
        setShowMnavi(false);
        setShowAllMenuBtn(true);
        setShowSearchIcon(true);
    };

    return (
        <>
            { hd ? <header className={`${hdscss.hd} fixed-top ${showMnavi ? "showMnavi" : "" }`} style={{ backgroundColor: bgColor }}>
                <HdBtn onClick={ () => { setHd(false)}}>헤더2</HdBtn>
                <div className="container-1824 d-flex justify-content-between align-items-center">
                    {showAllMenuBtn && (
                        <button className={`${hdscss.allMenuBtn} p-0`} onClick={handleAllMenuBtnClick}>
                            <img src={allbtn} alt="메뉴" />
                        </button>
                    )}
                    <h1><a href="/"><img src={logo} alt="" /></a></h1>
                    <ul className={`${hdscss.gnb} ${SubClass} d-flex ps-0 mb-0`}>
                        <Hdnavi handleCloseBtnClick={handleCloseBtnClick} /> {/* handleCloseBtnClick 전달 */}
                    </ul>
                    <ul className={`${hdscss.utill}  justify-content-end position-relative mb-0 p-0 ${showMnavi ? "d-none" : "d-flex" }`}>
                        <li className="position-relative">
                            {showSearchIcon ? (
                                <img src={search} alt="검색" className={`${hdscss.searchimg} open`} />
                            ) : (
                                <img src={close} alt="닫기" className={`${hdscss.closeimg}`} onClick={handleCloseBtnClick} />
                            )}
                            <span className="visually-hidden">검색</span>

                            <div className={`${hdscss.searchMenu} searchdivbox d-none`}>
                                <div className={`${hdscss.dropdownbox} m-0`}>
                                    <div className={`${hdscss.searchbar} d-flex justify-content-between align-items-center text-end pb-1`}>
                                        <img className={`${hdscss.searchimg} pe-2`} src={search} alt="검색" />
                                        <input type="text" placeholder='검색' className={hdscss.searchinput} />
                                        <button className={`${hdscss.searchbt} pe-1 close`} ><img src={close} alt="닫기" className={`${hdscss.closeImg}`} /></button>
                                    </div>
                                    <div className={`${hdscss.popularbar} p-0`}>
                                        <p className={`${hdscss.searchPopular} pt-2 mb-1 text-black-50`}>실시간인기</p>
                                        <div className={`${hdscss.searchTop10} d-flex`}>
                                            <div>
                                                <Hdpopular />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </li>
                        <li className={`${hdscss.loginImg} ms-4 `}>
                            <Link><img src={login} alt="로그인" /></Link>
                            <span className="visually-hidden">로그인</span>
                        </li>
                    </ul>
                    {!isDesktop && showMnavi && (
                        <button className={hdscss.mnaviclose} onClick={handleCloseBtnClick}><img src={close} alt="닫기" /></button>
                    )}
                </div>
                {showMnavi && <Mnavi handleCloseBtnClick={handleCloseBtnClick} />}
            </header>
            : <HdWrap className={`${hdscss.hd} fixed-top ${showMnavi ? "showMnavi" : "" }`} style={{ backgroundColor: bgColor }}>
                <HdBtn onClick={ () => { setHd(true)}}>헤더</HdBtn>
            <div>
                <div className="container-1824 d-flex justify-content-between align-items-center">
                    {showAllMenuBtn && (
                        <button className={`${hdscss.allMenuBtn} p-0`} onClick={handleAllMenuBtnClick}>
                            <img src={allbtn} alt="메뉴" />
                        </button>
                    )}
                    <h1><a href="/"><img src={logo} alt="" /></a></h1>
                    <ul className={`${hdscss.gnb} ${SubClass} d-flex ps-0 mb-0`}>
                        <Hdnavi handleCloseBtnClick={handleCloseBtnClick} /> {/* handleCloseBtnClick 전달 */}
                    </ul>
                    <ul className={`${hdscss.utill}  justify-content-end position-relative mb-0 p-0 ${showMnavi ? "d-none" : "d-flex" }`}>
                        <li className="position-relative">
                            {showSearchIcon ? (
                                <img src={search} alt="검색" className={`${hdscss.searchimg} open`} />
                            ) : (
                                <img src={close} alt="닫기" className={`${hdscss.closeimg}`} onClick={handleCloseBtnClick} />
                            )}
                            <span className="visually-hidden">검색</span>

                            <div className={`${hdscss.searchMenu} searchdivbox d-none`}>
                                <div className={`${hdscss.dropdownbox} m-0`}>
                                    <div className={`${hdscss.searchbar} d-flex justify-content-between align-items-center text-end pb-1`}>
                                        <img className={`${hdscss.searchimg} pe-2`} src={search} alt="검색" />
                                        <input type="text" placeholder='검색' className={hdscss.searchinput} />
                                        <button className={`${hdscss.searchbt} pe-1 close`} ><img src={close} alt="닫기" className={`${hdscss.closeImg}`} /></button>
                                    </div>
                                    <div className={`${hdscss.popularbar} p-0`}>
                                        <p className={`${hdscss.searchPopular} pt-2 mb-1 text-black-50`}>실시간인기</p>
                                        <div className={`${hdscss.searchTop10} d-flex`}>
                                            <div>
                                                <Hdpopular />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </li>
                        <li className={`${hdscss.loginImg} ms-4 `}>
                            <Link><img src={login} alt="로그인" /></Link>
                            <span className="visually-hidden">로그인</span>
                        </li>
                    </ul>
                    {!isDesktop && showMnavi && (
                        <button className={hdscss.mnaviclose} onClick={handleCloseBtnClick}><img src={close} alt="닫기" /></button>
                    )}
                </div>
                {showMnavi && <Mnavi handleCloseBtnClick={handleCloseBtnClick} />}                
            </div>
        </HdWrap>}
        </>
    );
}

export default Hd;
