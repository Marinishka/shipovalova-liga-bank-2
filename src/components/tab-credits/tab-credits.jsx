import React from 'react';

const TabCredits = () => {
  return <section className="tab-item tab-item--credits">
    <h2 className="tab-item__title">Лига Банк выдает кредиты под любые цели</h2>
    <ul className="tab-item__features">
      <li className="tab-item__feature">Ипотечный кредит</li>
      <li className="tab-item__feature">Автокредит</li>
      <li className="tab-item__feature">Потребительский кредит</li>
    </ul>
    <p className="tab-item__text">Рассчитайте ежемесячный платеж и ставку по кредиту воспользовавшись нашим <a className="tab-item__link-in-text" href="/">кредитным калькулятором</a></p>
  </section>;
};

export default TabCredits;
