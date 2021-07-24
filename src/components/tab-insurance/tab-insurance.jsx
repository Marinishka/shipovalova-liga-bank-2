import React from 'react';

const TabInsurance = () => {
  return <section className="tab-item tab-item--insurance">
    <h2 className="tab-item__title">Лига Страхование — застрахуем все что захотите</h2>
    <ul className="tab-item__features">
      <li className="tab-item__feature">Автомобильное страхование</li>
      <li className="tab-item__feature">Страхование жизни и здоровья</li>
      <li className="tab-item__feature">Страхование недвижимости</li>
    </ul>
    <a className="tab-item__link" href="/">Узнать подробнее</a>
  </section>;
};

export default TabInsurance;
