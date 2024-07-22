import React from 'react';
import{ Link } from 'react-router-dom'
import navicafe from '../../json/hdnavi.json';
import hdscss from '../scss/mhs.module.scss'

function Hdnavi() {
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

    return (
        <>
            {d1navi.map((v, i) => (
                <li key={`${i}`} className={`${hdscss.gnb_li} px-5 position-relative py-3`}>
                    <Link className={hdscss.gnb_a}> {v.gnbnm}</Link>
                    { submenu[v.cateno] && <ul className={`${hdscss.gnb_li_ul} position-absolute ps-0 pt-2`}>
                        { submenu[v.cateno].map((vv, ii) => (
                            <li key={`submenu${ii}`} >
                                <Link to={`*${vv.gnblink}`}>{vv.gnbnm}</Link>
                                </li>
                        ))
                        }
                    </ul>
                     }
                </li>
            ))}
        </>
    );
}

export default Hdnavi;