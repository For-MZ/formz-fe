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
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center: new window.naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
    };
    new window.naver.maps.Map(mapContainer, mapOption);
  };

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT}`}
        onReady={initNaverMap}
      ></Script>
      <div id="map" style={{ width: '100dvh', height: '100dvh' }}></div>
    </>
  );
}
