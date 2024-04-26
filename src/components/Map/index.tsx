'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/*global naver*/

import Script from 'next/script';
import { useEffect, useState } from 'react';
import Header from '../Header';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    naver: any;
  }
}

export default function Map() {
  const [check, setCheck] = useState(false);
  const { naver } = window;
  const [map, setMap] = useState<naver.maps.Map | null>(null);
  const [currentMarker, setCurrentMarker] = useState<naver.maps.Marker | null>(null);

  useEffect(() => {
    const initNaverMap = () => {
      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 8,
        zoomControl: true,
        zoomControlOptions: {
          style: naver.maps.ZoomControlStyle.SMALL,
          position: naver.maps.Position.TOP_RIGHT,
        },
      };
      const newMap = new naver.maps.Map(mapContainer, mapOption);
      setMap(newMap);
    };

    if (naver && naver.maps) {
      initNaverMap();
    }
  }, [naver]);

  const goToCurrentLocation = () => {
    if (navigator.geolocation && map) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const currentLocation = new naver.maps.LatLng(latitude, longitude);
        map.setCenter(currentLocation);
        map.setZoom(15);
        // 기존에 생성된 마커가 있다면 제거
        if (currentMarker) {
          currentMarker.setMap(null);
        }

        // 새로운 마커 생성
        const marker = new naver.maps.Marker({
          position: currentLocation,
          map: map,
        });

        setCurrentMarker(marker);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const checkButton = () => {
    setCheck(!check);
  };

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT}`}
      ></Script>
      {check && (
        <>
          <Header />
        </>
      )}
      <div id="map" style={{ width: '100%', height: '100%' }}>
        {map && (
          <>
            <button
              onClick={goToCurrentLocation}
              style={{ position: 'absolute', top: '80px', right: '10px', zIndex: 1 }}
            >
              <svg height="30" viewBox="0 0 48 48" width="30" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h48v48h-48z" fill="none" />
                <path d="M24 16c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm17.88 6c-.92-8.34-7.54-14.96-15.88-15.88v-4.12h-4v4.12c-8.34.92-14.96 7.54-15.88 15.88h-4.12v4h4.12c.92 8.34 7.54 14.96 15.88 15.88v4.12h4v-4.12c8.34-.92 14.96-7.54 15.88-15.88h4.12v-4h-4.12zm-17.88 16c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.27 14-14 14z" />
              </svg>
            </button>
            <button
              onClick={checkButton}
              style={{ position: 'absolute', top: '120px', right: '10px', zIndex: 1 }}
            >
              <svg
                fill="none"
                height="15"
                viewBox="0 0 15 15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          </>
        )}
      </div>
    </>
  );
}
