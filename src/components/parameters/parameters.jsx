import React, {useRef, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {KeyCodes} from '../../const';
import {changeCasco, changeFee, changeLifeInsurance, changeMaternalCapital, changePercent, changeProperty, changeTerm} from '../../store/action';
import {getNumberWithSpaces} from '../../utils/common';

const Parameters = () => {
  const values = useSelector((state) => state.LOCAL.values);
  const property = useSelector((state) => state.LOCAL.property);
  const fee = useSelector((state) => state.LOCAL.fee);
  const isMaternalCapital = useSelector((state) => state.LOCAL.isMaternalCapital);
  const isCasco = useSelector((state) => state.LOCAL.isCasco);
  const isLifeInsurance = useSelector((state) => state.LOCAL.isLifeInsurance);
  const percent = useSelector((state) => state.LOCAL.percent);
  const term = useSelector((state) => state.LOCAL.term);

  const propertyInput = useRef(null);
  const feeInput = useRef(null);
  const percentInput = useRef(null);
  const termInput = useRef(null);
  const termRange = useRef(null);
  const dispatch = useDispatch();

  const {PRICE} = values;

  const onIncreaseClick = (evt) => {
    evt.preventDefault();
    const newValue = Number(property) + Number(PRICE.STEP);
    if (newValue < PRICE.MAX) {
      changeInputProperty(newValue);
      return;
    }
    inputPropertyNotValid();
  };

  const onDecreaseClick = (evt) => {
    evt.preventDefault();
    const newValue = Number(property) - Number(PRICE.STEP);
    if (newValue > PRICE.MIN) {
      changeInputProperty(newValue);
      return;
    }
    inputPropertyNotValid();
  };

  const onPropertyChange = (evt) => {
    const newValue = Number(evt.target.value);
    if (newValue >= PRICE.MAX && newValue <= PRICE.MAX) {
      changeInputProperty(newValue);
      return;
    }
    propertyInput.current.value = PRICE.MIN;
    inputPropertyNotValid();
  };

  const changeInputProperty = (value) => {
    propertyInput.current.classList.remove(`input--invalid`);
    propertyInput.current.classList.add(`input--valid`);
    dispatch(changeProperty(value));
    propertyInput.current.value = value;
    feeInput.current.value = value * percent * 0.01;
    dispatch(changeFee(value * percent * 0.01));
  };

  const inputPropertyNotValid = () => {
    propertyInput.current.classList.remove(`input--valid`);
    propertyInput.current.classList.add(`input--invalid`);
  };

  const onPercentChange = (evt) => {
    dispatch(changePercent(evt.target.value));
    dispatch(changeFee(property * evt.target.value * 0.01));
    feeInput.current.value = property * evt.target.value * 0.01;
  };

  const onFeeChange = (evt) => {
    if (Number(evt.target.value) >= Number(PRICE.MIN)) {
      dispatch(changeFee(evt.target.value));
      return;
    }
    dispatch(changeFee(PRICE.MIN * values.MIN_PERCENT * 0.01));
    feeInput.current.value = PRICE.MIN * values.MIN_PERCENT * 0.01;
  };

  const onTermChange = (evt) => {
    dispatch(changeTerm(evt.target.value));
    termRange.current.value = evt.target.value;
  };

  const onTermRangeChange = (evt) => {
    dispatch(changeTerm(evt.target.value));
    termInput.current.value = evt.target.value;
  };

  const onMaternalCapitalChange = () => {
    dispatch(changeMaternalCapital(!isMaternalCapital));
  };

  const onMaternalCapitalKeydown = (evt) => {
    if (evt.keyCode === KeyCodes.ENTER) {
      dispatch(changeMaternalCapital(!isMaternalCapital));
    }
  };

  const isCascoChange = () => {
    dispatch(changeCasco(!isCasco));
  };

  const onCascoKeydown = (evt) => {
    if (evt.keyCode === KeyCodes.ENTER) {
      dispatch(changeCasco(!isCasco));
    }
  };

  const onLifeInsuranceChange = () => {
    dispatch(changeLifeInsurance(!isLifeInsurance));
  };

  const onLifeInsuranceKeydown = (evt) => {
    if (evt.keyCode === KeyCodes.ENTER) {
      dispatch(changeLifeInsurance(!isLifeInsurance));
    }
  };

  useEffect(() => {
    dispatch(changeProperty(Number(PRICE.MIN)));
    dispatch(changePercent(values.MIN_PERCENT));
    dispatch(changeFee(PRICE.MIN * values.MIN_PERCENT * 0.01));
    propertyInput.current.value = PRICE.MIN;
    feeInput.current.value = PRICE.MIN * values.MIN_PERCENT * 0.01;
    feeInput.current.min = PRICE.MIN * values.MIN_PERCENT * 0.01;
    feeInput.current.max = PRICE.MAX;
  }, [values.TITLE]);

  return <>
    <div className="calculator__group calculator__group--step-2">
      <h3 className="calculator__label-group calculator__label-group--step-2">Шаг 2. Введите параметры кредита</h3>
      <label className="calculator__label-input" htmlFor="property value">{values.TITLE}</label>
      <div className="calculator__input-group">
        <button className="calculator__btn calculator__btn--decrease" type="button" aria-label="Уменьшить" onClick={onDecreaseClick}></button>
        <button className="calculator__btn calculator__btn--increase" type="button" aria-label="Увеличить" onClick={onIncreaseClick}></button>
        <input className="calculator__input calculator__input--property input--valid"
          ref={propertyInput} type="number"
          min={PRICE.MIN}
          max={PRICE.MAX}
          step="100000"
          id="property value"
          name="property"
          defaultValue={property}
          onChange={onPropertyChange}></input>
      </div>
      <p className="calculator__prompt">От {getNumberWithSpaces(PRICE.MIN)} до {getNumberWithSpaces(PRICE.MAX)} рублей</p>
    </div>
    <div className="calculator__group">
      <label className="calculator__label-input" htmlFor="an initial fee">Первоначальный взнос</label>
      <input className="calculator__input calculator__input--fee input--valid"
        ref={feeInput}
        type="number"
        step="100000"
        id="an initial fee"
        name="fee"
        defaultValue={fee}
        onBlur={onFeeChange}></input>
      <input className="calculator__range calculator__range--fee"
        ref={percentInput} type="range"
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
        type="number"
        min="5"
        max="30"
        id="loan terms"
        name="terms"
        defaultValue={term}
        onChange={onTermChange}></input>
      <input className="calculator__range calculator__range--term"
        ref={termRange}
        type="range"
        min="5"
        max="30"
        defaultValue={term}
        onInput={onTermRangeChange}></input>
      <div className="calculator__term">
        <div className="calculator__term-value calculator__term-value--min">5 лет</div>
        <div className="calculator__term-value calculator__term-value--max">30 лет</div>
      </div>
    </div>
    {values.VALUE === `mortgage` ?
      <label className="calculator__label">
        <input className="calculator__checkbox visually-hidden" type="checkbox" onChange={onMaternalCapitalChange}></input>
        <div className={`calculator__checkbox-label ${isMaternalCapital ? `calculator__checkbox-label--active` : ``}`}
          tabIndex="0"
          onKeyDown={onMaternalCapitalKeydown}>Использовать материнский капитал</div>
      </label> :
      <>
        <label className="calculator__label">
          <input className="calculator__checkbox visually-hidden" type="checkbox" checked={isCasco} onChange={isCascoChange}></input>
          <div className={`calculator__checkbox-label ${isCasco ? `calculator__checkbox-label--active` : ``}`}
            tabIndex="0"
            onKeyDown={onCascoKeydown}>Оформить КАСКО</div>
        </label>
        <label className="calculator__label">
          <input className="calculator__checkbox visually-hidden" type="checkbox" checked={isLifeInsurance} onChange={onLifeInsuranceChange}></input>
          <div className={`calculator__checkbox-label ${isLifeInsurance ? `calculator__checkbox-label--active` : ``}`}
            tabIndex="0"
            onKeyDown={onLifeInsuranceKeydown}>Оформить Страхование жизни в нашем банке</div>
        </label>
      </>}
  </>;
};

export default Parameters;
