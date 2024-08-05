import mapscss from '../../scss/psh.module.scss'

import IconAdress from '../../../img/mapIconAdress.svg'
import IconPhone from '../../../img/mpaIconPhone.svg'
import IconTime from '../../../img/mapIconTime.svg'
import IconSite from '../../../img/mapIconSite.svg'
import IconMap from '../../../img/mapIconMap.svg'
import IconKakao from '../../../img/mapiconKakao.svg'
import IconNaver from '../../../img/mapiconNaver.svg'
import IconClose from '../../../img/formClose.svg'

import { Fragment } from 'react'
import { Link } from 'react-router-dom'

function getDomain(url) {
    // URL에서 프로토콜 제거
    let withoutProtocol = url.split('//')[1] || url;
    // 도메인 부분 추출
    let domain = withoutProtocol.split('/')[0].split(':')[0];
    return domain;
}

const Info = (props) => {    
    const { selectedItem, onClose, onOpen } = props;
    
    return (
        <div className={mapscss.mapInfoS} style={{display : onOpen ? "block" : "none"}}>
            {
            selectedItem ? (
                <Fragment>                    
                    <button className={mapscss.closeS} onClick={onClose}><img src={IconClose} alt="닫기" /><span className="visually-hidden">닫기</span></button>
                    <div className={mapscss.mapInfoWrapS}>
                        <img src={`//${selectedItem.CON_IMGFILENAME}`} alt={selectedItem.CON_TITLE} className="img-fluid" />
                        <p className={selectedItem.type ? selectedItem.type  : 'food'}>
                            <Link to={'/pageprepare'} className='d-flex justify-content-between items-center'><span className='text-truncate'>{selectedItem.CON_TITLE}</span><i></i></Link>                            
                        </p>
                        <ul className={`${mapscss.mapInfoTextS} ps-0 mb-0`}>
                            <li>
                                <i><img src={IconAdress} alt="위치" /></i>
                                <span>{selectedItem.CON_DESC1}</span>
                            </li>
                            <li>
                                <i><img src={IconPhone} alt="전화번호" /></i>
                                <span>{selectedItem.CON_DESC2}</span>
                            </li>
                            <li>
                                <i><img src={IconTime} alt="영업시간" /></i>
                                <span>
                                    월~일 12:00~19:00<br />
                                    매주 화요일 휴무
                                </span>
                            </li>
                            <li>
                                <i><img src={IconSite} alt="사이트" /></i>
                                <span><a href={`//${selectedItem.LINKURL}`} target='_blank' rel="noreferrer" className="link">{ getDomain(selectedItem.LINKURL) }</a></span>
                            </li>
                        </ul>
                    </div>
                    <ul className={`${mapscss.mapInfoLocationS} d-flex justify-content-between align-items-center mb-0`}>
                        <li className="ms-0 me-auto">
                            <i><img src={IconMap} alt="위치" /></i>
                            <span className={mapscss.link}>길찾기</span>
                        </li>
                        <li>
                            <i><a href="https://map.kakao.com" target='_blank' rel="noreferrer"><img src={IconKakao} alt="카카오" /></a></i>
                            <span className="visually-hidden">카카오맵</span>
                        </li>
                        <li>
                            <i><a href="https://map.naver.com" target='_blank' rel="noreferrer"><img src={IconNaver} alt="네이버" /></a></i>
                            <span className="visually-hidden">네이버맵</span>
                        </li>
                    </ul>
                </Fragment>
            ) : ( 
                <p>click error</p>
            ) }                 
        </div>
    )
}

export default Info