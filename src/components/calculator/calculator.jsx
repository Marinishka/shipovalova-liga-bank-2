import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {KeyCodes, Purposes, Values} from '../../const';
import {changeApplicationNumber, changePurpose, changeValues, getInitialState, openApplication} from './../../store/action';
import Application from '../application/application';
import Parameters from '../parameters/parameters';
import Result from '../result/result';

const Calculator = ({setIsPopupOpen}) => {
  const values = useSelector((state) => state.LOCAL.values);
  const isOpenAnApplication = useSelector((state) => state.LOCAL.isOpenAnApplication);
  const name = useSelector((state) => state.LOCAL.name);
  const telephone = useSelector((state) => state.LOCAL.telephone);
  const email = useSelector((state) => state.LOCAL.email);
  const applicationNumber = useSelector((state) => state.LOCAL.applicationNumber);
  const purpose = useSelector((state) => state.LOCAL.purpose);

  const [isFormFieldFail, setIsFormFieldFail] = useState(false);

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
      dispatch(changePurpose(evt.target.value));
      purposeOptions.current.classList.toggle(`calculator__options--visible`);
      for (let item in Values) {
        if (Values[item].VALUE === evt.target.value) {
          dispatch(changeValues(Values[item]));
        }
      }
    }
  };

  const onPurposeChangeKeydown = (evt) => {
    if (evt.keyCode === KeyCodes.ENTER) {
      dispatch(changePurpose(evt.target.dataset.option));
      for (let item in Values) {
        if (Values[item].VALUE === evt.target.dataset.option) {
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
        dispatch(changeApplicationNumber(applicationNumber + 1));
        dispatch(openApplication(false));
        dispatch(getInitialState());
        setIsPopupOpen(true);
      } else {
        setIsFormFieldFail(true);
      }
    });
  };

  return <section className="calculator" id="calculator">
    <h2 className="calculator__title">Кредитный калькулятор</h2>
    <form className="calculator__form" method="POST" onSubmit={onSubmit}>
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
          {values !== null ? <Parameters/> : ``}
        </div>
        {values !== null ? <Result/> : ``}
      </div>
      {isOpenAnApplication ? <Application isFormFieldFail={isFormFieldFail}/> : ``}
    </form>
  </section>;
};

Calculator.propTypes = {
  setIsPopupOpen: PropTypes.func.isRequired
};

export default Calculator;
