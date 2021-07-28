import React from 'react';

const Result = () => {
  return <section className="result">
    <h3 className="result__title">Наше предложение</h3>
    <dl className="result__list">
      <div className="result__group">
        <div className="result__cell">
          <dd className="result__value">1 330 000 рублей</dd>
          <dt className="result__term">Сумма ипотеки</dt>
        </div>
        <div className="result__cell">
          <dd className="result__value">9,40%</dd>
          <dt className="result__term">Процентная ставка</dt>
        </div>
      </div>
      <div className="result__group">
        <div className="result__cell">
          <dd className="result__value">27 868 рублей</dd>
          <dt className="result__term">Ежемесячный платеж</dt>
        </div>
        <div className="result__cell">
          <dd className="result__value">61 929 рублей</dd>
          <dt className="result__term">Необходимый доход</dt>
        </div>
      </div>
    </dl>
    <button className="result__btn" type="button">Оформить заявку</button>
  </section>;
};

export default Result;
