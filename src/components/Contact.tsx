import React from 'react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import './contact.scss';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='header text-center'>
        Contact him
      </div>
      <APIProvider apiKey='AIzaSyDJvnOi7sj9UI48tmJ43Sk2LUYSVHWdh1Y'>
        <Map
          className='map'
          defaultZoom={13}
          defaultCenter={{ lat: 53.4963422696005, lng: 10.011873408272601 }}
          mapId={'d8d6c6499c6e6df5'}
          streetViewControl={false}
          fullscreenControl={false}
          mapTypeControl={false}
          zoomControl={false}
        >
          <AdvancedMarker
            key={1}
            position={{ lat: 53.4963422696005, lng: 10.011873408272601 }}
          >
            <Pin />
          </AdvancedMarker>
        </Map>
      </APIProvider>
      <div className='textContent text-center'>
        Ole K&ouml;ster<br />
        Neuenfelder Stra&szlig;e 84A<br />
        21109 Hamburg
      </div>
    </div>
  );
};

export default Contact;