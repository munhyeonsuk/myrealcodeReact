import React from 'react'
import lognaviscss from '../scss/mhs.module.scss';
import Hdnavi from './Hdnavi'

import login from '../../img/hdLogin1.svg'

function Mnavi( { handleCloseBtnClick }) {
    return (
        <div className={lognaviscss.lognavi}>
            <div className="d-flex ps-3 pt-3">
                <div className={`${lognaviscss.loginimg} me-3`}>
                    <img src={login} alt=""/>
                </div>
                <div>
                    <p className={`${lognaviscss.logtext1} m-0`}>로그인 <span>하세요</span></p>
                    <p className={lognaviscss.logtext2}>로그인을 하시면 <br />
                        더 많은 서비스를 이용하실 수 있습니다.</p>
                </div>
            </div>
            <div className={lognaviscss.navi}>
                <Hdnavi handleCloseBtnClick={handleCloseBtnClick} />
            </div>
        </div>
    )
}

export default Mnavi
