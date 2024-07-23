import mapscss from '../scss/psh.module.scss'
import '../scss/psh.map.scss'

import MapImg from '../../img/map.svg'

import mapdata from '../../json/mapdata.json'

function View() {
    return (
        <div className={mapscss.mapViewS}>
            <div className={mapscss.mapCategoryPointS}>
                <p className='food' style={{"top": mapdata.category[0].positionY, "left": mapdata.category[0].positionX}}><span className="visually-hidden">{mapdata.category[0].name}</span></p>
                <p className='cafe' style={{"top": mapdata.category[1].positionY, "left": mapdata.category[1].positionX}}><span className="visually-hidden">{mapdata.category[1].name}</span></p>
                <p className='activity' style={{"top": mapdata.category[2].positionY, "left": mapdata.category[2].positionX}}><span className="visually-hidden">{mapdata.category[2].name}</span></p>
                <p className='landmark' style={{"top": mapdata.category[3].positionY, "left": mapdata.category[3].positionX}}><span className="visually-hidden">{mapdata.category[3].name}</span></p>
                <p className='festival' style={{"top": mapdata.category[4].positionY, "left": mapdata.category[4].positionX}}><span className="visually-hidden">{mapdata.category[4].name}</span></p>
            </div>
            <img src={MapImg} alt="지도" />
        </div>
    )
}

export default View