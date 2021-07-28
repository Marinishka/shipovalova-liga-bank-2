import React from 'react';

const Application = () => {
  return <section className="application">
    <h3 className="application__title">Шаг 3. Оформление заявки</h3>
    <dl className="application__results">
      <div className="application__row">
        <dd className="application__value">№ 0010</dd>
        <dt className="application__term">Номер заявки</dt>
      </div>
      <div className="application__row">
        <dd className="application__value">Ипотека</dd>
        <dt className="application__term">Цель кредита</dt>
      </div>
      <div className="application__row">
        <dd className="application__value">2000000</dd>
        <dt className="application__term">Стоимость недвижимости</dt>
      </div>
      <div className="application__row">
        <dd className="application__value">2000000</dd>
        <dt className="application__term">Первоначальный взнос</dt>
      </div>
      <div className="application__row">
        <dd className="application__value">5 лет</dd>
        <dt className="application__term">Срок кредитования</dt>
      </div>
    </dl>
    <label className="application__label application__label--name" aria-label="Введите ваше имя">
      <input className="application__input application__input--name" type="text" placeholder="ФИО"></input>
    </label>
    <div className="application__label-group">
      <label className="application__label application__label--tel" aria-label="Введите ваш телефон">
        <input className="application__input application__input--tel" type="number" placeholder="Телефон"></input>
      </label>
      <label className="application__label application__label--email" aria-label="Введите вашу электронную почту">
        <input className="application__input application__input--email" type="email" placeholder="E-mail"></input>
      </label>
    </div>
    <button className="application__submit" type="submit">Отправить</button>
  </section>;
};

export default Application;
