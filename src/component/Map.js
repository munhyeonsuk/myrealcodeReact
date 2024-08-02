import MapCategory from './map/Category'
import MapView from './map/View'
import MapInfo from './map/Info'

import mapscss from './scss/psh.module.scss'
import './scss/psh.map.scss'

import IconZoomin from '../img/mapIconZoomin.svg'
import IconZoomout from '../img/mapIconZoomout.svg'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios';


const Map = () => {
  // 지도 좌표 클릭 시 해당 정보 출력 이벤트

  // 지도 Move
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({x:0, y:0});
  const [offset, setOffset] = useState({x:0, y:0});
  const [zoom, setZoom] = useState(1); // Zoom 상태 추가
  const zoomStep = 0.2;

  // openAPI
  const [foodData, setFoodData] = useState([]);
  const [landmarkData, setLandmarkData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // 카테고리별 데이터 출력
  // food
  useEffect(() => {
    // API 요청 함수
    const fetchFoodData = async () => {
      try {
        const response = await axios.get('https://apis.data.go.kr/5050000/eatHtpService/getEatHtp', {
          params: {
            serviceKey: '46fhFO4qCoXxNZiDerOlp8GFGMwfZzb7MsfVRfUtj18m9WPsqdOqI7SeAbuThqNdW1UGNh6a/85X0xX4d/2Zug==',
            pageNo: 1,
            numOfRows: 20
          }
        });

        const mydata = response.data.response.body.items.item;
        setFoodData(mydata); // 상태 업데이트
        if (mydata && mydata.length > 0) {
          setSelectedItem(mydata[0]); // 첫 번째 food 항목을 기본 선택
        }
      } catch (err) {
        console.error('Error:', err);
        setError('데이터를 가져오는 중 오류가 발생했습니다.'); // 오류 상태 업데이트
      } finally {
        setLoading(false); // 로딩 완료
      }
    };
  
  
    // landmark
    const fetchLandmarkData = async () => {
      try {
        const response = await axios.get('https://apis.data.go.kr/5050000/dstrctsTrrsrtService/getDstrctsTrrsrt', {
          params: {
            serviceKey: '46fhFO4qCoXxNZiDerOlp8GFGMwfZzb7MsfVRfUtj18m9WPsqdOqI7SeAbuThqNdW1UGNh6a/85X0xX4d/2Zug==',
            pageNo: 1,
            numOfRows: 20
          }
        });

        const mydata = response.data.response.body.items.item;
        setLandmarkData(mydata); // 상태 업데이트
      } catch (err) {
        console.error('Error:', err);
        setError('데이터를 가져오는 중 오류가 발생했습니다.'); // 오류 상태 업데이트
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    fetchFoodData();
    fetchLandmarkData();
  }, []); // 컴포넌트가 처음 렌더링될 때만 실행  

  return (
    <section className={mapscss.map}>
      <div className="container-1400">
        <div className={`${mapscss.mapWrapS}`}>
          <div className={`${mapscss.mapTitleS}`}>
            <h2 className={mapscss.mapTitleTextS}>
              경주의 숨겨진<br />
              “보석을 찾아 떠나는 여정”
            </h2>
            <MapCategory className="pc"></MapCategory>            
          </div>
          <div className={`${mapscss.mapContentsS} row mx-0`}>
            <MapInfo className="col-xl-4" foodData={foodData} landmarkData={landmarkData} selectedItem={selectedItem}></MapInfo>
            <div className={`${mapscss.mapDetailS} col-xl-8`}>
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
              <MapView cls={"mapScreen"} foodData={foodData} landmarkData={landmarkData} setSelectedItem={setSelectedItem} mouseDown={handleMouseDown} moveX={position.x} moveY={position.y} mouseDrag={isDragging}></MapView>
            </div>            
          </div>
          <MapCategory className="mo"></MapCategory>
        </div>
      </div>
    </section>
  )
}

export default Map