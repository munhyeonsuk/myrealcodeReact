import{ Link } from 'react-router-dom'
import mapscss from '../scss/psh.module.scss'

import IconAdress from '../../img/mapIconAdress.svg'
import IconPhone from '../../img/mpaIconPhone.svg'
import IconTime from '../../img/mapIconTime.svg'
import IconSite from '../../img/mapIconSite.svg'
import IconMap from '../../img/mapIconMap.svg'
import IconKakao from '../../img/mapiconKakao.svg'
import IconNaver from '../../img/mapiconNaver.svg'
import IconClose from '../../img/formClose.svg'

import mapdata from '../../json/mapdata.json'
import { Fragment } from 'react'

function getDomain(url) {
    // URL에서 프로토콜 제거
    let withoutProtocol = url.split('//')[1] || url;
    // 도메인 부분 추출
    let domain = withoutProtocol.split('/')[0].split(':')[0];
    return domain;
}

const Info = (props) => {

    const { clickKey, clickNum } = props;
    
    const time1 = mapdata.info[clickKey][clickNum].time1
        ? mapdata.info[clickKey][clickNum].time1
        : null;
    
    const time2 = mapdata.info[clickKey][clickNum].time2
        ? mapdata.info[clickKey][clickNum].time2
        : null;

    return (        
        <div className={mapscss.mapInfoS} style={{display : props.onOpen ? "block" : "none"}}>
            <Fragment>
            <button className={mapscss.closeS} onClick={props.onClose}><img src={IconClose} alt="닫기" /><span className="visually-hidden">닫기</span></button>
                <div className={mapscss.mapInfoWrapS}>
                    <img src={mapdata.info[props.clickKey][props.clickNum].img} alt="경주장소이미지" className="img-fluid" />
                    <p className={props.clickKey}><Link to={mapdata.info[props.clickKey][props.clickNum].href}>{mapdata.info[props.clickKey][props.clickNum].name}</Link></p>
                    <ul className={`${mapscss.mapInfoTextS} ps-0 mb-0`}>
                        <li>
                            <i><img src={IconAdress} alt="위치" /></i>
                            <span>{ mapdata.info[props.clickKey][props.clickNum].adress
                                ? mapdata.info[props.clickKey][props.clickNum].adress 
                                : '-' }
                            </span>
                        </li>
                        <li>
                            <i><img src={IconPhone} alt="전화번호" /></i>
                            <span>{mapdata.info[props.clickKey][props.clickNum].tel
                                ? mapdata.info[props.clickKey][props.clickNum].tel
                                : '-'}
                            </span>
                        </li>
                        <li>
                            <i><img src={IconTime} alt="영업시간" /></i>
                            <span>
                                {time1 || time2 ? (
                                    <>
                                        {time1}<br />
                                        {time2}
                                    </>
                                ) : (
                                    "-"
                                )}
                            </span>
                        </li>
                        <li>
                            <i><img src={IconSite} alt="사이트" /></i>
                            <span>
                                <a href={mapdata.info[props.clickKey][props.clickNum].site} className="link">
                                    { getDomain(mapdata.info[props.clickKey][props.clickNum].site) 
                                    ? getDomain(mapdata.info[props.clickKey][props.clickNum].site) 
                                    : '-' }
                                </a>
                            </span>
                        </li>
                    </ul>
                </div>
                <ul className={`${mapscss.mapInfoLocationS} d-flex justify-content-between align-items-center mb-0`}>
                    <li className="ms-0 me-auto">
                        <i><img src={IconMap} alt="위치" /></i>
                        <span className={mapscss.link}>길찾기</span>
                    </li>
                    <li>
                        <i><a href={mapdata.info[props.clickKey][props.clickNum].mapKakao}><img src={IconKakao} alt="카카오" /></a></i>
                        <span className="visually-hidden">카카오맵</span>
                    </li>
                    <li>
                        <i><a href={mapdata.info[props.clickKey][props.clickNum].mapNaver}><img src={IconNaver} alt="네이버" /></a></i>
                        <span className="visually-hidden">네이버맵</span>
                    </li>
                </ul>
            </Fragment>       
        </div>
    )
}

export default Info