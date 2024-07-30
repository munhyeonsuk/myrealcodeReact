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
                        mapdata.category.map((v, i)=>{
                            const key = Object.keys(v)[0];
                            return(
                                <p key={i} className={key} style={{"top": v[key][0].positionY, "left": v[key][0].positionX}}>
                                    {
                                        v[key].map((vv, ii)=>{
                                            return(
                                                <Fragment>
                                                    <span className="visually-hidden">{vv.name}</span>
                                                </Fragment>
                                            )
                                        })
                                    }
                                </p>
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