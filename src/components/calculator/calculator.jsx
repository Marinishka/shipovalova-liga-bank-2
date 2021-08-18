import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {KeyCodes, Purposes, Values} from '../../const';
import {changeValues, getInitialState, openApplication} from './../../store/action';
import Application from '../application/application';
import Parameters from '../parameters/parameters';
import Result from '../result/result';

const Calculator = ({setIsPopupOpen}) => {
  const values = useSelector((state) => state.LOCAL.values);
  const isOpenAnApplication = useSelector((state) => state.LOCAL.isOpenAnApplication);
  const name = useSelector((state) => state.LOCAL.name);
  const telephone = useSelector((state) => state.LOCAL.telephone);
  const email = useSelector((state) => state.LOCAL.email);

  const [isFormFieldFail, setIsFormFieldFail] = useState(false);
  const [isPropertyValid, setisPropertyValid] = useState(true);
  const [purpose, setPurpose] = useState(`initial`);
  const [applicationNumber, setApplicationNumber] = useState(1);
  const [property, setProperty] = useState(0);
  const [fee, setFee] = useState(0);

  const purposeOptions = useRef(null);

  const dispatch = useDispatch();

  const onPurposeClick = () => {
    purposeOptions.current.classList.toggle(`calculator__options--visible`);
  };

  const onPurposeKeydown = (evt) => {
    if (evt.keyCode === KeyCodes.ENTER) {
      purposeOptions.current.classList.toggle(`calculator__options--visible`);
    }
  };

  const onPurposeChange = (evt) => {
    if (evt.target.tagName === `INPUT`) {
      setPurpose(evt.target.value);
      purposeOptions.current.classList.toggle(`calculator__options--visible`);
      for (let item in Values) {
        if (Values[item].VALUE === evt.target.value) {
          setProperty(Values[item].PRICE.MIN);
          setFee(Math.ceil(Values[item].PRICE.MIN * Values[item].MIN_PERCENT * 0.01));
          dispatch(changeValues(Values[item]));
        }
      }
    }
  };

  const onPurposeChangeKeydown = (evt) => {
    if (evt.keyCode === KeyCodes.ENTER) {
      setPurpose(evt.target.dataset.option);
      for (let item in Values) {
        if (Values[item].VALUE === evt.target.dataset.option) {
          setProperty(Values[item].PRICE.MIN);
          setFee(Math.ceil(Values[item].PRICE.MIN * Values[item].MIN_PERCENT * 0.01));
          dispatch(changeValues(Values[item]));
        }
      }
    }
  };

  const isFieldsFilled = () => {
    return name && telephone && email;
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    setIsFormFieldFail(false);
    setTimeout(() => {
      if (isFieldsFilled()) {
        setApplicationNumber(applicationNumber + 1);
        dispatch(openApplication(false));
        setPurpose(`initial`);
        setFee(0);
        setProperty(0);
        dispatch(getInitialState());
        setIsPopupOpen(true);
      } else {
        setIsFormFieldFail(true);
      }
    });
  };

  return <section className="calculator" id="calculator">
    <h2 className="calculator__title">Кредитный калькулятор</h2>
    <form className="calculator__form" method="POST" onSubmit={onSubmit} noValidate>
      <div className="calculator__group calculator__group--step-1">
        <div className="calculator__cell">
          <h3 className="calculator__label-group calculator__label-group--step-1">Шаг 1. Цель кредита</h3>
          <div className="calculator__select">
            <div className="calculator__legend" onClick={onPurposeClick} onKeyDown={onPurposeKeydown} tabIndex="0">{Purposes[purpose]}</div>
            <div className="calculator__options" ref={purposeOptions} onClick={onPurposeChange} onKeyDown={onPurposeChangeKeydown}>
              <label className="calculator__option" htmlFor="mortgage" data-option="mortgage" tabIndex="0">Ипотечное кредитование</label>
              <input className="calculator__radio visually-hidden" type="radio" value="mortgage" id="mortgage"></input>
              <label className="calculator__option" htmlFor="automotive" data-option="automotive" tabIndex="0">Автомобильное кредитование</label>
              <input className="calculator__radio visually-hidden" type="radio" value="automotive" id="automotive"></input>
            </div>
          </div>
          {values !== null ? <Parameters
            isPropertyValid={isPropertyValid}
            setisPropertyValid={setisPropertyValid}
            property={property}
            setProperty={setProperty}
            fee={fee}
            setFee={setFee}/> : ``}
        </div>
        {values !== null && isPropertyValid ? <Result
          fee={fee}
          setFee={setFee}
          property={property}/> : ``}
      </div>
      {isOpenAnApplication ? <Application
        isFormFieldFail={isFormFieldFail}
        applicationNumber={applicationNumber}
        property={property}
        fee={fee}/> : ``}
    </form>
  </section>;
};

Calculator.propTypes = {
  setIsPopupOpen: PropTypes.func.isRequired
};

export default Calculator;
