import{ Link } from 'react-router-dom'
import mapscss from '../scss/psh.module.scss'

import IconAdress from '../../img/mapIconAdress.svg'
import IconPhone from '../../img/mpaIconPhone.svg'
import IconTime from '../../img/mapIconTime.svg'
import IconSite from '../../img/mapIconSite.svg'
import IconMap from '../../img/mapIconMap.svg'
import IconKakao from '../../img/mapiconKakao.svg'
import IconNaver from '../../img/mapiconNaver.svg'

import mapdata from '../../json/mapdata.json'

function Info() {
    return (
        <div className={mapscss.mapInfoS}>
            <div className={mapscss.mapInfoWrapS}>
                <img src={mapdata.info[0].food[0].img} alt="경주장소이미지" className="img-fluid" />
                <p><Link to={mapdata.info[0].food[0].href}>경주월드</Link></p>
                <ul className={`${mapscss.mapInfoTextS} ps-0 mb-0`}>
                    <li>
                        <i><img src={IconAdress} alt="위치" /></i>
                        <span>{mapdata.info[0].food[0].adress}</span>
                    </li>
                    <li>
                        <i><img src={IconPhone} alt="전화번호" /></i>
                        <span>{mapdata.info[0].food[0].tel}</span>
                    </li>
                    <li>
                        <i><img src={IconTime} alt="영업시간" /></i>
                        <span>
                            종일권 : {mapdata.info[0].food[0].time1}<br />
                            오후권 : {mapdata.info[0].food[0].time2}
                        </span>
                    </li>
                    <li>
                        <i><img src={IconSite} alt="사이트" /></i>
                        <span><a href={mapdata.info[0].food[0].site} className="link">www.gjw.co.kr</a></span>
                    </li>
                </ul>
            </div>
            <ul className={`${mapscss.mapInfoLocationS} d-flex justify-content-between align-items-center mb-0`}>
                <li className="ms-0 me-auto">
                    <i><img src={IconMap} alt="위치" /></i>
                    <span className="link">길찾기</span>
                </li>
                <li>
                    <i><a href={mapdata.info[0].food[0].mapKakao}><img src={IconKakao} alt="카카오" /></a></i>
                    <span className="visually-hidden">카카오맵</span>
                </li>
                <li>
                    <i><a href={mapdata.info[0].food[0].mapNaver}><img src={IconNaver} alt="네이버" /></a></i>
                    <span className="visually-hidden">네이버맵</span>
                </li>
            </ul>
        </div>
    )
}

export default Info