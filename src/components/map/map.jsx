import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import {Coordinates, MAP_ICON_SIZE} from '../../const';

const MapElement = () => {
  return <div className="map" id="map">
    <h2 className="map__title">Отделения Лига Банка</h2>
    <YMaps>
      <Map className="map__content" defaultState={{bounds: [[61.697257, 33.600274], [51.675938, 88.082831]]}} width="320px" height="371px">
        <Placemark geometry={Coordinates.MOSCOW} options={{iconLayout: `default#image`, iconImageHref: `img/mark.png`, iconImageSize: MAP_ICON_SIZE}}></Placemark>
        <Placemark geometry={Coordinates.SARATOV} options={{iconLayout: `default#image`, iconImageHref: `img/mark.png`, iconImageSize: MAP_ICON_SIZE}}></Placemark>
        <Placemark geometry={Coordinates.KAZAN} options={{iconLayout: `default#image`, iconImageHref: `img/mark.png`, iconImageSize: MAP_ICON_SIZE}}></Placemark>
        <Placemark geometry={Coordinates.TYUMEN} options={{iconLayout: `default#image`, iconImageHref: `img/mark.png`, iconImageSize: MAP_ICON_SIZE}}></Placemark>
        <Placemark geometry={Coordinates.OMSK} options={{iconLayout: `default#image`, iconImageHref: `img/mark.png`, iconImageSize: MAP_ICON_SIZE}}></Placemark>
      </Map>
    </YMaps>
  </div>;
};

export default MapElement;
