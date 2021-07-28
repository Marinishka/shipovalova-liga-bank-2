import React from 'react';
import Application from '../application/application';
import Result from '../result/result';

const Calculator = () => {
  return <section className="calculator" id="calculator">
    <h2 className="calculator__title">Кредитный калькулятор</h2>
    <form className="calculator__form">
      <div className="calculator__group">
        <div className="calculator__cell">
          <h3 className="calculator__label-group calculator__label-group--step-1">Шаг 1. Цель кредита</h3>
          <div className="calculator__select">
            <div className="calculator__legend">Выберите цель кредита</div>
            <div className="calculator__options">
              <label className="calculator__option" htmlFor="mortgage">Ипотечное кредитование
                <input className="calculator__radio visually-hidden" type="radio" value="mortgage" id="mortgage"></input>
              </label>
              <label className="calculator__option" htmlFor="automotive">Автомобильное кредитование
                <input className="calculator__radio visually-hidden" type="radio" value="automotive" id="automotive"></input>
              </label>
            </div>
          </div>
          <h3 className="calculator__label-group calculator__label-group--step-2">Шаг 2. Введите параметры кредита</h3>
          <div className="calculator__group">
            <label className="calculator__label-input" htmlFor="property value">Стоимость недвижимости</label>
            <button className="calculator__btn calculator__btn--decrease" aria-label="Уменьшить"></button>
            <button className="calculator__btn calculator__btn--increase" aria-label="Увеличить"></button>
            <input className="calculator__input calculator__input--property" type="number" min="1200000" max="25000000" step="100000" id="property value" name="property"></input>
            <p className="calculator__prompt">От 1 200 000 до 25 000 000 рублей</p>
          </div>
          <div className="calculator__group">
            <label className="calculator__label-input" htmlFor="an initial fee">Первоначальный взнос</label>
            <input className="calculator__input calculator__input--fee" type="number" min="1200000" max="25000000" step="100000" id="an initial fee" name="fee"></input>
            <input className="calculator__range calculator__range--fee" type="range" min="10" max="100" defaultValue="10"></input>
            <div className="calculator__range-value calculator__range-value--fee">10 %</div>
          </div>
          <div className="calculator__group">
            <label className="calculator__label-input" htmlFor="loan terms">Срок кредитования</label>
            <input className="calculator__input calculator__input--term" type="number" min="5" max="30" id="loan terms" name="terms"></input>
            <input className="calculator__range calculator__range--term" type="range" min="5" max="30" defaultValue="5"></input>
            <div className="calculator__term">
              <div className="calculator__term-value calculator__term-value--min">5 лет</div>
              <div className="calculator__term-value calculator__term-value--max">30 лет</div>
            </div>
          </div>
          <label className="calculator__label">
            <input className="calculator__checkbox visually-hidden" type="checkbox"></input>
            <span className="calculator__label--checkbox calculator__label--active">Использовать материнский капитал</span>
          </label>
        </div>
        <Result/>
      </div>
      <Application/>
    </form>
  </section>;
};

export default Calculator;
