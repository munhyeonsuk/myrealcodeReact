import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import navicafe from '../../json/hdnavi.json';
import hdscss from '../scss/mhs.module.scss';

function Hdnavi({ handleCloseBtnClick }) {
    const [activeIndex, setActiveIndex] = useState(null); 
    

    const d1navi = navicafe.filter((item) => item.prnum === "");
    const submenu = {};

    for (let item of navicafe) {
        if (item.prnum) {
            if (!submenu[item.prnum]) {
                submenu[item.prnum] = [];
            }
            submenu[item.prnum].push(item);
        }
    }

    const handleMenuClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index); 
        // 저장된 원래 --header-height 값으로 복원합니다.
       
   

    };

    const handleSubMenuClick = () => {
        if (handleCloseBtnClick) {
            handleCloseBtnClick();
        }
    };


    useEffect(() => {
        // 컴포넌트가 마운트될 때 초기 --header-height 값을 저장합니다.
        const rootStyle = getComputedStyle(document.documentElement);
        const initialHeaderHeight = rootStyle.getPropertyValue('--header-height').trim();

        const headerElement = document.querySelector('header');
        if (headerElement && initialHeaderHeight) {
        headerElement.style.height = initialHeaderHeight; 
        }

       
        
      }, []);

   

    return (
        <>
            {d1navi.map((v, i) => (
                <li 
                    key={`${i}`} 
                    className={`${hdscss.gnb_li} px-xl-5 px-4 py-3 ${activeIndex === i ? hdscss.open : ''}`} 
                    onClick={() => { 
                        handleMenuClick(i); 
                        v.gnblink == 'faq' &&  handleCloseBtnClick();
                    
                    } }
                >
                    <Link to={`/${v.gnblink}`} className={hdscss.gnb_a}>{v.gnbnm}</Link>
                    {submenu[v.cateno] && (
                        <ul className={`${hdscss.gnb_li_ul} position-absolute ps-0 pt-2 ${activeIndex === i ? hdscss.show : ''}`}>
                            {submenu[v.cateno].map((vv, ii) => (
                                <li key={`submenu${ii}`} onClick={handleSubMenuClick}>
                                    <Link to={`/${vv.gnblink}`}>{vv.gnbnm}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </>
    );
}

export default Hdnavi;
