import React, {useRef, useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import Checkboxes from './../checkboxes/checkboxes';
import {changeFee, changePercent, changeProperty, changeTerm, openApplication} from '../../store/action';
import {getNumberWithSpaces, getPhrase, getStrToNum} from '../../utils/common';
import {ERROR_MSG, TermYears} from '../../const';

const Parameters = ({isPropertyValid, setisPropertyValid}) => {
  const values = useSelector((state) => state.LOCAL.values);
  const property = useSelector((state) => state.LOCAL.property);
  const fee = useSelector((state) => state.LOCAL.fee);
  const percent = useSelector((state) => state.LOCAL.percent);
  const term = useSelector((state) => state.LOCAL.term);

  const propertyInput = useRef(null);
  const feeInput = useRef(null);
  const percentInput = useRef(null);
  const termInput = useRef(null);
  const termRange = useRef(null);

  const dispatch = useDispatch();

  const {PRICE} = values;

  const [feeMin, setFeeMin] = useState(0);
  const [feeMax, setFeeMax] = useState(0);

  const onIncreaseClick = (evt) => {
    evt.preventDefault();
    if (!isPropertyValid) {
      changeInputProperty(values.PRICE.MIN);
      return;
    }
    const newValue = Number(property) + Number(PRICE.STEP);
    if (newValue <= PRICE.MAX) {
      changeInputProperty(newValue);
      return;
    }
    inputPropertyNotValid();
  };

  const onDecreaseClick = (evt) => {
    evt.preventDefault();
    const newValue = Number(property) - Number(PRICE.STEP);
    if (newValue >= PRICE.MIN) {
      changeInputProperty(newValue);
      return;
    }
  };

  const onPropertyChange = (evt) => {
    if (evt.target.value.match(/\d+/)) {
      const newValue = getStrToNum(evt.target.value);
      if (newValue >= PRICE.MIN && newValue <= PRICE.MAX) {
        changeInputProperty(newValue);
        return;
      }
      propertyInput.current.value = getPhrase(PRICE.MIN, `RUB`);
      dispatch(changeProperty(PRICE.MIN));
      const newFee = Math.ceil(PRICE.MIN * percent * 0.01);
      feeInput.current.value = getPhrase(newFee, `RUB`);
      dispatch(changeFee(newFee));
      setFeeMin(newFee);
      setFeeMax(PRICE.MIN);
      inputPropertyNotValid();
    }
  };

  const changeInputProperty = (value) => {
    setisPropertyValid(true);
    propertyInput.current.classList.remove(`input--invalid`);
    propertyInput.current.classList.add(`input--valid`);
    dispatch(changeProperty(value));
    propertyInput.current.value = getPhrase(value, `RUB`);
    const newFee = Math.ceil(value * values.MIN_PERCENT * 0.01);
    percentInput.current.value = values.MIN_PERCENT;
    dispatch(changePercent(values.MIN_PERCENT));
    feeInput.current.value = getPhrase(newFee, `RUB`);
    dispatch(changeFee(newFee));
    setFeeMin(newFee);
    setFeeMax(value);
  };

  const inputPropertyNotValid = () => {
    propertyInput.current.classList.remove(`input--valid`);
    propertyInput.current.classList.add(`input--invalid`);
    propertyInput.current.value = ERROR_MSG;
    setisPropertyValid(false);
    dispatch(openApplication(false));
  };

  const onPercentChange = (evt) => {
    dispatch(changePercent(evt.target.value));
    const newFee = Math.ceil(property * evt.target.value * 0.01);
    dispatch(changeFee(newFee));
    feeInput.current.value = getPhrase(newFee, `RUB`);
  };

  const onFeeChange = (evt) => {
    const feeInputValue = getStrToNum(evt.target.value);
    if (feeInputValue >= fee && feeInputValue <= Number(property)) {
      dispatch(changeFee(feeInputValue));
      feeInput.current.value = getPhrase(feeInputValue, `RUB`);
      const newPercent = Math.ceil(feeInputValue / property * 100);
      dispatch(changePercent(newPercent));
      percentInput.current.value = newPercent;
      return;
    }
    const newFee = Math.ceil(property * values.MIN_PERCENT * 0.01);
    dispatch(changeFee(newFee));
    feeInput.current.value = getPhrase(newFee, `RUB`);
    percentInput.current.value = values.MIN_PERCENT;
    dispatch(changePercent(values.MIN_PERCENT));
  };

  const onTermChange = (evt) => {
    const newTerm = getStrToNum(evt.target.value);
    if (newTerm >= TermYears.MAX) {
      termInput.current.value = getPhrase(TermYears.MAX, `YEAR`);
      termRange.current.value = TermYears.MAX;
    } else if (newTerm <= TermYears.MIN) {
      termInput.current.value = getPhrase(TermYears.MIN, `YEAR`);
      termRange.current.value = TermYears.MIN;
    } else {
      dispatch(changeTerm(newTerm));
      termInput.current.value = getPhrase(newTerm, `YEAR`);
      termRange.current.value = newTerm;
    }
  };

  const onTermRangeChange = (evt) => {
    dispatch(changeTerm(evt.target.value));
    termInput.current.value = getPhrase(evt.target.value, `YEAR`);
  };

  useEffect(() => {
    propertyInput.current.type = `text`;
    feeInput.current.type = `text`;
    termInput.current.type = `text`;
    dispatch(changeProperty(Number(PRICE.MIN)));
    dispatch(changePercent(values.MIN_PERCENT));
    const newFee = Math.ceil(PRICE.MIN * values.MIN_PERCENT * 0.01);
    dispatch(changeFee(newFee));
    percentInput.current.value = values.MIN_PERCENT;
    propertyInput.current.value = getPhrase(PRICE.MIN, `RUB`);
    feeInput.current.value = getPhrase(newFee, `RUB`);
    termInput.current.value = getPhrase(term, `YEAR`);
    setFeeMin(newFee);
    setFeeMax(PRICE.MIN);
  }, [values]);

  return <>
    <div className="calculator__group calculator__group--step-2">
      <h3 className="calculator__label-group calculator__label-group--step-2">Шаг 2. Введите параметры кредита</h3>
      <label className="calculator__label-input" htmlFor="property value">{values.TITLE}</label>
      <div className="calculator__input-group">
        <button className="calculator__btn calculator__btn--decrease" type="button" aria-label="Уменьшить" onClick={onDecreaseClick}></button>
        <button className="calculator__btn calculator__btn--increase" type="button" aria-label="Увеличить" onClick={onIncreaseClick}></button>
        <input className="calculator__input calculator__input--property input--valid"
          ref={propertyInput}
          type="number"
          min={PRICE.MIN}
          max={PRICE.MAX}
          step="100000"
          id="property value"
          name="property"
          defaultValue={property}
          onBlur={onPropertyChange}
        >
        </input>
      </div>
      <p className="calculator__prompt">От {getNumberWithSpaces(PRICE.MIN)} до {getNumberWithSpaces(PRICE.MAX)} рублей</p>
    </div>
    <div className="calculator__group">
      <label className="calculator__label-input" htmlFor="an initial fee">Первоначальный взнос</label>
      <input className="calculator__input calculator__input--fee input--valid"
        ref={feeInput}
        min={feeMin}
        max={feeMax}
        type="number"
        step="100000"
        id="an initial fee"
        name="fee"
        defaultValue={fee}
        onBlur={onFeeChange}></input>
      <input className="calculator__range calculator__range--fee"
        ref={percentInput}
        type="range"
        min={values.MIN_PERCENT}
        max="100"
        step="5"
        defaultValue={percent}
        onInput={onPercentChange}></input>
      <div className="calculator__range-value calculator__range-value--fee">{percent} %</div>
    </div>
    <div className="calculator__group">
      <label className="calculator__label-input" htmlFor="loan terms">Срок кредитования</label>
      <input className="calculator__input calculator__input--term input--valid"
        ref={termInput}
        min={feeMin}
        max={feeMax}
        type="number"
        id="loan terms"
        name="terms"
        defaultValue={term}
        onBlur={onTermChange}></input>
      <input className="calculator__range calculator__range--term"
        ref={termRange}
        type="range"
        min={TermYears.MIN}
        max={TermYears.MAX}
        defaultValue={term}
        onInput={onTermRangeChange}></input>
      <div className="calculator__term">
        <div className="calculator__term-value calculator__term-value--min">{TermYears.MIN} лет</div>
        <div className="calculator__term-value calculator__term-value--max">{TermYears.MAX} лет</div>
      </div>
    </div>
    {<Checkboxes value={values.VALUE}/>}
  </>;
};

Parameters.propTypes = {
  setisPropertyValid: PropTypes.func.isRequired,
  isPropertyValid: PropTypes.bool.isRequired
};

export default Parameters;
