'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
/*global naver*/

import Script from 'next/script';
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    naver: any;
  }
}

export default function Map() {
  const { naver } = window;
  const [map, setMap] = useState<naver.maps.Map | null>(null);

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
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT}`}
      ></Script>
      <div id="map" style={{ width: '100%', height: '100%' }}>
        {map && (
          <button
            onClick={goToCurrentLocation}
            style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1 }}
          >
            <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h48v48h-48z" fill="none" />
              <path d="M24 16c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm17.88 6c-.92-8.34-7.54-14.96-15.88-15.88v-4.12h-4v4.12c-8.34.92-14.96 7.54-15.88 15.88h-4.12v4h4.12c.92 8.34 7.54 14.96 15.88 15.88v4.12h4v-4.12c8.34-.92 14.96-7.54 15.88-15.88h4.12v-4h-4.12zm-17.88 16c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.27 14-14 14z" />
            </svg>
          </button>
        )}
      </div>
    </>
  );
}
