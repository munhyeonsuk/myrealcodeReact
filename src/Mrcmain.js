import Mainslider from './component/Mainslider';
import Map from './component/Map'
import EventE from './component/EventE';
import Sns from './component/Sns';
import Recommend from './component/Recommend';
// import Msearch from './component/subpage/Msearch'

function Mrc(){
    return(
        <>
            
            <Mainslider></Mainslider>
            <Map></Map>
            <EventE></EventE>
            <Sns></Sns>
            <Recommend></Recommend>
            {/* <Msearch></Msearch> */}
        </>
    )
}

export default Mrc;