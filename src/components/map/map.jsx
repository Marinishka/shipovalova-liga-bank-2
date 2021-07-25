import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';

const MapElement = () => {
  return <div className="map">
    <h2 className="map__title">Отделения Лига Банка</h2>
    <YMaps>
      <Map className="map__content" defaultState={{bounds: [[56.464839, 35.481482], [51.146698, 81.765883]]}} width="320px" height="371px">
        <Placemark geometry={[55.558741, 37.378847]} options={{iconLayout: `default#image`, iconImageHref: `img/mark.png`, iconImageSize: [32, 40]}}></Placemark>
        <Placemark geometry={[51.5406, 46.0086]} options={{iconLayout: `default#image`, iconImageHref: `img/mark.png`, iconImageSize: [32, 40]}}></Placemark>
        <Placemark geometry={[55.7887, 49.1221]} options={{iconLayout: `default#image`, iconImageHref: `img/mark.png`, iconImageSize: [32, 40]}}></Placemark>
        <Placemark geometry={[57.15, 65.54]} options={{iconLayout: `default#image`, iconImageHref: `img/mark.png`, iconImageSize: [32, 40]}}></Placemark>
        <Placemark geometry={[54.9924, 73.3686]} options={{iconLayout: `default#image`, iconImageHref: `img/mark.png`, iconImageSize: [32, 40]}}></Placemark>
      </Map>
    </YMaps>
  </div>;
};

export default MapElement;
