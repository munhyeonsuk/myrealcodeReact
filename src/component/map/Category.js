import { Fragment } from 'react';
import mapdata from '../../json/mapdata.json'
import mapscss from '../scss/psh.module.scss'

const Category = ({ className }) => {
    return (
        <ul className={`${ className } ${mapscss.mapCategoryS} d-flex justify-content-between align-items-center ps-0`}>
            {
                mapdata.category.map((v, i) => {
                    const key = Object.keys(v)[0];
                    return(
                        <li key={i}>
                            {
                                v[key].map((vv, ii) => {
                                    return(                                        
                                        <Fragment key={ii}>
                                            <i className={key}><img src={vv.img} alt={vv.name} /></i>
                                            <span>{vv.name}</span>
                                        </Fragment>
                                    )
                                })
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Category