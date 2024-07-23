import CaFood from '../../img/mapCategoryFood.svg'
import CaCafe from '../../img/mapCategoryCafe.svg'
import CaActivity from '../../img/mapCategoryActivity.svg'
import Calandmark from '../../img/mapCategorylandmark.svg'
import CaFestival from '../../img/mapCategoryFestival.svg'

import mapdata from '../../json/mapdata.json'

function Category() {
    return (
        <>
        <li className="food">
            <i><img src={CaFood} alt={mapdata.category[0].name} /></i>
            <span>{mapdata.category[0].name}</span>
        </li>
        <li className="cafe">
            <i><img src={CaCafe} alt={mapdata.category[1].name} /></i>
            <span>{mapdata.category[1].name}</span>
        </li>
        <li className="activity">
            <i><img src={CaActivity} alt={mapdata.category[2].name} /></i>
            <span>{mapdata.category[2].name}</span>
        </li>
        <li className="landmark">
            <i><img src={Calandmark} alt={mapdata.category[3].name} /></i>
            <span>{mapdata.category[3].name}</span>
        </li>
        <li className="festival">
            <i><img src={CaFestival} alt={mapdata.category[4].name} /></i>
            <span>{mapdata.category[4].name}</span>
        </li>
        </>
    )
}

export default Category