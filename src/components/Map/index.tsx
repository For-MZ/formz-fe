'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/*global naver*/
import Script from 'next/script';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    naver: any;
  }
}

export default function Map() {
  const initNaverMap = () => {
    const mapOptions = {
      center: new window.naver.maps.LatLng(37.3595704, 127.105399), // 초기 중심 좌표 설정
      zoom: 10, // 초기 확대 수준 설정
    };
    const map = new window.naver.maps.Map('map', mapOptions);

    const currentLocationButton = new window.naver.maps.ZoomControl();

    // map.controls.push()를 사용하여 컨트롤 추가
    map.addControl(currentLocationButton, window.naver.maps.Position.TOP_RIGHT);

    // 현재 위치 버튼 클릭 시 이벤트 핸들러 설정
    window.naver.maps.Event.addListener(currentLocationButton, 'click', () => {
      // 현재 위치를 얻어오는 함수
      const getCurrentLocation = () => {
        return new Promise((resolve, reject) => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
              resolve(position.coords);
            }, reject);
          } else {
            reject(new Error('Geolocation is not supported by this browser.'));
          }
        });
      };

      // 현재 위치를 얻어와서 지도 이동
      getCurrentLocation()
        .then((coords) => {
          const currentLocation = new window.naver.maps.LatLng(coords.latitude, coords.longitude);
          map.setCenter(currentLocation);
        })
        .catch((error) => {
          console.error('Error getting current location:', error.message);
        });
    });
  };
  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT}`}
        onReady={initNaverMap}
      ></Script>
      <div id="map" style={{ width: '100%', height: '100%' }}></div>
    </>
  );
}
