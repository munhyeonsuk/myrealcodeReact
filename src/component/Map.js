import MapCategory from './map/Category'
import MapView from './map/View'
import MapInfo from './map/Info'

import mapscss from './scss/psh.module.scss'
import './scss/psh.map.scss'

import IconZoomin from '../img/mapIconZoomin.svg'
import IconZoomout from '../img/mapIconZoomout.svg'


function Map() {
    return (
    <section className={mapscss.map}>
      <div className="container-1400">
        <div className={`${mapscss.mapWrapS} row mx-0`}>
          <div className={`${mapscss.mapLeftS} col-md-6`}>
            <h2 className={mapscss.mapTitleS}>
              경주의 숨겨진<br />
              “보석을 찾아 떠나는 여정”
            </h2>
            <MapCategory className="pc"></MapCategory>
            <MapInfo></MapInfo>
          </div>
          <div className={`${mapscss.mapRightS} col-md-6`}>
            <div className={mapscss.mapTextS}>
              <button>
                <i><img src={IconZoomin} alt="확대" /></i>
                <span className="visually-hidden">확대</span>
              </button>
              <button>
                <i><img src={IconZoomout} alt="축소" /></i>
                <span className="visually-hidden">축소</span>
              </button>
              <p>
                지도로 <strong>한눈에 살펴보는</strong><br />
                경주의 문화장소<br />
                <strong>원하는 장소를 선택</strong>하고<br />
                지도를 확대 하고 축소 하며<br />
                <strong>장소별 이야기와 정보</strong>를 알 수 있어요!
              </p>
            </div>
            <MapView></MapView>
          </div>
          <MapCategory className="mo"></MapCategory>
        </div>
      </div>
    </section>
    )
}

export default Map