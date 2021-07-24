import React from 'react';

const TabContribution = () => {
  return <section className="tab-item tab-item--contribution">
    <h2 className="tab-item__title">Вклады Лига Банка – это выгодная инвестиция в свое будущее</h2>
    <ul className="tab-item__features">
      <li className="tab-item__feature">Проценты по вкладам до 7%</li>
      <li className="tab-item__feature">Разнообразные условия</li>
      <li className="tab-item__feature">Возможность ежемесячной капитализации или вывод процентов на банковскую карту</li>
    </ul>
    <a className="tab-item__link" href="/">Узнать подробнее</a>
  </section>;
};

export default TabContribution;
