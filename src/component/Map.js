import MapCategory from './map/Category'
import MapView from './map/View'
import MapInfo from './map/Info'

import mapscss from './scss/psh.module.scss'
import './scss/psh.map.scss'

import IconZoomin from '../img/mapIconZoomin.svg'
import IconZoomout from '../img/mapIconZoomout.svg'
import { useEffect, useState } from 'react'


const Map = () => {
  // 지도 좌표 클릭 시 해당 정보 출력 이벤트
  const [clickNum, setClickNum] = useState(0);
  const [clickKey, setClickKey] = useState("food");

  // 지도 Move
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({x:0, y:0});
  const [offset, setOffset] = useState({x:0, y:0});
  const [zoom, setZoom] = useState(1); // Zoom 상태 추가
  const zoomStep = 0.2;

  // mouse move 이벤트
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  }

  const handleMouseMove = (e) => {
    if(isDragging) {
      const newX = e.clientX - offset.x;
      const newY = e.clientY - offset.y;

      const mapScreen = document.querySelector(".mapScreen");
      const rect = mapScreen.getBoundingClientRect();

      // 드래그 한계점 설정 (예: 화면의 경계)
      const minX = 0;
      const minY = 0;

      const elementWidth = mapScreen.offsetWidth; // 드래그 가능한 요소의 너비
      const elementHeight = mapScreen.offsetHeight; // 드래그 가능한 요소의 높이
      
      const maxX = rect.width - elementWidth / zoom;
      const maxY = rect.height - elementHeight / zoom;

      console.log(maxX, maxY, rect.width, elementWidth / zoom)

      setPosition({
        x: Math.max(minX, Math.min(newX, maxX)),
        y: Math.max(minY, Math.min(newY, maxY)),
      });
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false);
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  },[isDragging, offset])

  // 확대 & 축소 버튼 이벤트
  useEffect(() => {

    const zoomInEvent = (e) => {

        const mapScreen = document.querySelector(".mapScreen");
        const rect = mapScreen.getBoundingClientRect();

        // 클릭한 위치 기준으로 확대
        const clickX = e.clientX - rect.left; // 클릭한 X 좌표
        const clickY = e.clientY - rect.top + 320; // 클릭한 Y 좌표
        
      setZoom((prevZoom) => {
        if (prevZoom < 1.6) {
            const newZoom = prevZoom + zoomStep;
            // transform-origin을 클릭한 위치로 설정
            mapScreen.style.transformOrigin = `${clickX}px ${clickY}px`;
            document.querySelector(".mapScreen").style.transform = `scale(${newZoom})`;
            return newZoom;
        }
        return prevZoom;
      });
    };

    const zoomOutEvent = () => {
      setZoom((prevZoom) => {
        if (prevZoom > 1) {
          const newZoom = prevZoom - zoomStep;
          document.querySelector(".mapScreen").style.transform = `scale(${newZoom})`;
          return newZoom;
        }
        return prevZoom;
      });
    };

    const zoomInButton = document.querySelector(".zoomIn");
    const zoomOutButton = document.querySelector(".zoomOut");

    zoomInButton.addEventListener("click", zoomInEvent);
    zoomOutButton.addEventListener("click", zoomOutEvent);

    return () => {
      zoomInButton.removeEventListener("click", zoomInEvent);
      zoomOutButton.removeEventListener("click", zoomOutEvent);
    };
  }, [position]);

  return (
    <section className={mapscss.map}>
      <div className="container-1400">
        <div className={`${mapscss.mapWrapS} row mx-0`}>
          <div className={`${mapscss.mapLeftS} col-md-6`}>
            <h2 className={mapscss.mapTitleS}>
              경주의 숨겨진<br />
              “보석을 찾아 떠나는 여정”
              {/* <strong>{clickKey} {clickNum}</strong> */}
            </h2>
            <MapCategory className="pc"></MapCategory>
            <MapInfo clickKey={clickKey} clickNum={clickNum}></MapInfo>
          </div>
          <div className={`${mapscss.mapRightS} col-md-6`}>
            <div className={mapscss.mapTextS}>
              <button className='zoomIn'>
                <i><img src={IconZoomin} alt="확대" /></i>
                <span className="visually-hidden">확대</span>
              </button>
              <button className='zoomOut'>
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
            <MapView cls={"mapScreen"} triggerKey={setClickKey} triggerNum={setClickNum} mouseDown={handleMouseDown} moveX={position.x} moveY={position.y} mouseDrag={isDragging} ></MapView>
          </div>
          <MapCategory className="mo"></MapCategory>
        </div>
      </div>
    </section>
  )
}

export default Map