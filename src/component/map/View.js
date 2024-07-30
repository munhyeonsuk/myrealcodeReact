import mapscss from '../scss/psh.module.scss'
import '../scss/psh.map.scss'

import MapImg from '../../img/map.svg'

import mapdata from '../../json/mapdata.json'
import { Fragment } from 'react'

function View(props) {
    return (
        <div className={mapscss.mapViewS}>
            <div className={`${mapscss.mapViewInner} ${props.cls}`}>
                <div className={mapscss.mapCategoryPointS}>
                {
                    Object.entries(mapdata.info).map(([key, value]) => {
                    return (
                        <Fragment key={key}>
                        {
                            value.map((item, index) => (
                            <p 
                                key={index} 
                                data-category={key} 
                                onClick={() => { props.triggerKey(key); props.triggerNum(index) }} 
                                className={key} 
                                style={{ top: item.positionY, left: item.positionX }}
                            >
                                <span className="visually-hidden">{item.name}</span>
                            </p>
                            ))
                        }
                        </Fragment>
                    )
                    })
                }
                </div>
                <img src={MapImg} alt="지도" />
            </div>
        </div>
    )
}

export default View