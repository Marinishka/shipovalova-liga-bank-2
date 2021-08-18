import React, {useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {PrefixTel, PREFIX_APPLICATION_NUMBER, Words} from '../../const';
import {changeEmail, changeName, changeTelephone} from '../../store/action';
import {getPhrase} from '../../utils/common';
import PropTypes from 'prop-types';

const Application = ({
  isFormFieldFail,
  applicationNumber,
  property,
  fee}) => {
  const values = useSelector((state) => state.LOCAL.values);
  const term = useSelector((state) => state.LOCAL.term);
  const name = useSelector((state) => state.LOCAL.name);
  const telephone = useSelector((state) => state.LOCAL.telephone);
  const email = useSelector((state) => state.LOCAL.email);

  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const telInput = useRef(null);

  const dispatch = useDispatch();

  const changeInputName = (evt) => {
    dispatch(changeName(evt.target.value));
  };

  const changeInputTel = (evt) => {
    dispatch(changeTelephone(evt.target.value));
  };

  const changeInputEmail = (evt) => {
    dispatch(changeEmail(evt.target.value));
  };

  const onTelFocus = (evt) => {
    if (!/^\+\d*$/.test(evt.target.value)) {
      evt.target.value = PrefixTel.RUS;
    }
  };

  const getFourDigitApplicationNumber = () => {
    const applicationString = applicationNumber.toString();
    if (applicationString.length < 4) {
      const needAdd = 4 - applicationString.length;
      const prefix = new Array(needAdd).fill(PREFIX_APPLICATION_NUMBER).join(``);
      return prefix + applicationString;
    }
    return applicationString;
  };

  useEffect(() => {
    nameInput.current.classList.remove(`input--invalid`);
    emailInput.current.classList.remove(`input--invalid`);
    telInput.current.classList.remove(`input--invalid`);
    nameInput.current.classList.add(`input--valid`);
    emailInput.current.classList.add(`input--valid`);
    telInput.current.classList.add(`input--valid`);
    if (isFormFieldFail) {
      if (name === ``) {
        nameInput.current.classList.remove(`input--valid`);
        nameInput.current.classList.add(`input--invalid`);
      }
      if (email === ``) {
        emailInput.current.classList.remove(`input--valid`);
        emailInput.current.classList.add(`input--invalid`);
      }
      if (telephone === ``) {
        telInput.current.classList.remove(`input--valid`);
        telInput.current.classList.add(`input--invalid`);
      }
    }
  }, [isFormFieldFail]);

  return <section className={`application ${isFormFieldFail ? `application--fail` : ``}`}>
    <h3 className="application__title">Шаг 3. Оформление заявки</h3>
    <dl className="application__results">
      <div className="application__row">
        <dd className="application__value">№ {getFourDigitApplicationNumber()}</dd>
        <dt className="application__term">Номер заявки</dt>
      </div>
      <div className="application__row">
        <dd className="application__value">{Words[values.VALUE.toUpperCase()].PURPOSE}</dd>
        <dt className="application__term">Цель кредита</dt>
      </div>
      <div className="application__row">
        <dd className="application__value">{getPhrase(property, `RUB`)}</dd>
        <dt className="application__term">Стоимость {Words[values.VALUE.toUpperCase()].PRICE}</dt>
      </div>
      <div className="application__row">
        <dd className="application__value">{getPhrase(fee, `RUB`)}</dd>
        <dt className="application__term">Первоначальный взнос</dt>
      </div>
      <div className="application__row">
        <dd className="application__value">{getPhrase(term, `YEAR`)}</dd>
        <dt className="application__term">Срок кредитования</dt>
      </div>
    </dl>
    <label className="application__label application__label--name" aria-label="Введите ваше имя">
      <input className="application__input application__input--name input--valid"
        ref={nameInput}
        type="text"
        placeholder="ФИО"
        onInput={changeInputName}
        value={name}
        autoFocus></input>
    </label>
    <div className="application__label-group">
      <label className="application__label application__label--tel" aria-label="Введите ваш телефон">
        <input className="application__input application__input--tel input--valid"
          ref={telInput}
          type="tel"
          placeholder="Телефон"
          pattern="^\+?\d{1,2}\(?\d{3}\)?\d{3}-?\d{2}-?\d{2}$"
          onInput={changeInputTel}
          onFocus={onTelFocus}
          value={telephone}
          maxLength="12"></input>
      </label>
      <label className="application__label application__label--email" aria-label="Введите вашу электронную почту">
        <input className="application__input application__input--email input--valid"
          ref={emailInput}
          type="email"
          placeholder="E-mail"
          onInput={changeInputEmail}
          value={email}></input>
      </label>
    </div>
    <button className="application__submit" type="submit">Отправить</button>
  </section>;
};

Application.propTypes = {
  isFormFieldFail: PropTypes.bool.isRequired,
  applicationNumber: PropTypes.number.isRequired,
  property: PropTypes.number.isRequired,
  fee: PropTypes.number.isRequired
};

export default Application;
