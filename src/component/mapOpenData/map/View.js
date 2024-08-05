import mapscss from '../../scss/psh.module.scss'
import '../../scss/psh.map.scss'

import MapImg from '../../../img/map.svg'
import { useState, useRef, useEffect } from 'react';

const View = (props) => {
    const mapViewRef = useRef(null);
    const { foodData, landmarkData, setSelectedItem, onOpen } = props;

    const handleMarkerClick = (item) => {
        setSelectedItem(item);
    };

    const [mapScreen, setMapScreen] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (mapViewRef.current) {
            const { offsetWidth, offsetHeight } = mapViewRef.current;
            setMapScreen({ width: offsetWidth, height: offsetHeight });
        }
    },[])

    // 위도와 경도를 픽셀 값으로 변환하는 함수
    const convertLatLngToPixel = (lat, lng) => {
        const centerLat = 35.8393;
        const centerLng = 129.2244;
    
        // 간단한 변환 계산 (이것은 실제 변환을 단순화한 예입니다)
        const x = (lng - centerLng) * (mapScreen.width / 2) + (mapScreen.width / 2);
        const y = (centerLat - lat) * (mapScreen.height / 2) + (mapScreen.height / 2);
    
        return { x, y };
    };
    
    return (
        <div className={mapscss.mapViewS} ref={mapViewRef}>
            <div className={`${mapscss.mapViewInner} ${props.cls}`} onMouseDown={props.mouseDown} style={{left: `${props.moveX}px`, top: `${props.moveY}px`, cursor: props.mouseDrag ? 'grabbing' : 'grab'}}>
                <div className={mapscss.mapCategoryPointS}>
                {foodData && foodData.length > 0 ? (
                    foodData.map((item, index) => {
                        const { x, y } = convertLatLngToPixel(item.CON_LATITUDE, item.CON_LONGITUDE); // 위도 경도를 픽셀 좌표로 변환
                        return (
                            <p 
                                key={`food-${index}`}
                                onClick={() => { 
                                    handleMarkerClick({
                                        type: 'food',
                                        ...item
                                    })
                                    onOpen();
                                }} 
                                className="food"
                                style={{ top: `${y}px`, left: `${x}px` }}
                            >
                                <span className="visually-hidden">{item.CON_TITLE}</span>
                            </p>
                            )
                        })
                    )
                    : <p>error</p>
                }
                {landmarkData && landmarkData.length > 0 ? (
                    landmarkData.map((item, index) => {
                        const { x, y } = convertLatLngToPixel(item.CON_LATITUDE, item.CON_LONGITUDE); // 위도 경도를 픽셀 좌표로 변환
                        return (
                            <p 
                                key={`landmark-${index}`}
                                onClick={() => { 
                                    handleMarkerClick({
                                        type: 'landmark',
                                        ...item
                                    })
                                    onOpen();
                                }} 
                                className="landmark"
                                style={{ top: `${y}px`, left: `${x}px` }}
                            >
                                <span className="visually-hidden">{item.SRC_TITLE}</span>
                            </p>
                            )
                        })
                    )
                    : <p>error</p>
                }
                </div>
                <img src={MapImg} alt="지도" />
            </div>
        </div>
    )
}

export default View