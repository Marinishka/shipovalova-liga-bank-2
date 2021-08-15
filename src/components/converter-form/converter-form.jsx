
import React, {useEffect, useRef, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchLastDays, fetchValuteLastDay} from '../../store/api-actions';
import {NUMBER_OF_DAYS, Valutes, CORRENCY_CALCULATION_RATIO} from './../../const.js';
import dayjs from 'dayjs';
import {addValueInTable} from '../../store/action';

const ConverterForm = () => {
  const isSameOrBefore = require(`dayjs/plugin/isSameOrBefore`);
  dayjs.extend(isSameOrBefore);

  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(true);

  const [errorEl, setErrorEl] = useState(null);

  const [maxDay, setMaxDay] = useState(dayjs().format(`YYYY-MM-DD`));

  const [valuteIHave, setValuteIHave] = useState(Valutes.RUB);

  const [valueValuteIHave, setValueValuteIHave] = useState(1);

  const [valuteIWant, setValuteIWant] = useState(Valutes.RUB);

  const [valueValuteIWant, setValueValuteIWant] = useState(1);

  const [activeDate, setActiveDate] = useState(dayjs().format(`YYYY-MM-DD`));

  const inputIHave = useRef(valueValuteIHave);

  const inputIWant = useRef(valueValuteIWant);

  const lastDay = useSelector((state) => state.DATA.lastDay);
  const lastDays = useSelector((state) => state.DATA.lastDays);

  const [activeDayValute, setActiveDayValute] = useState(lastDay);

  useEffect(() => {
    dispatch(fetchValuteLastDay());
  }, [dispatch]);

  useEffect(() => {
    let actions = [];
    if (lastDay === null) {
      return;
    } else {
      setMaxDay(dayjs(lastDay.Date).format(`YYYY-MM-DD`));
      for (let i = 1; i < NUMBER_OF_DAYS; i++) {
        actions.push(dispatch(fetchLastDays(dayjs(lastDay.Date).subtract(i, `day`).format(`YYYY/MM/DD`))));
      }
      Promise.all(actions).then(() => {
        setLoading(false);
      });
    }
  }, [lastDay, dispatch]);

  useEffect(() => {
    if (lastDay !== null) {
      if (dayjs(lastDay.Date).isSame(dayjs(), `day`)) {
        setActiveDayValute(lastDay);
      } else {
        let valuteDay = lastDays.filter((day) => {
          return dayjs(day.Date).isSameOrBefore(dayjs(), `day`);
        });
        setActiveDayValute(valuteDay[0]);
      }
    }
  }, [lastDays, lastDay]);

  const getDefaultDate = () => {
    if (lastDays.length === 0) {
      return maxDay;
    } else {
      return dayjs(lastDays.Date).format(`YYYY-MM-DD`);
    }
  };

  const getValuteDay = (date) => {
    let valuteDay = lastDays.filter((day) => {
      return dayjs(day.Date).isSameOrBefore(dayjs(date), `day`);
    });
    if (valuteDay.length === 0) {
      valuteDay = activeDayValute;
    } else {
      valuteDay.sort(function (a, b) {
        return dayjs(b.Date).diff(dayjs(a.Date));
      });
      valuteDay = valuteDay[0];
    }
    return valuteDay;
  };

  const changeValuteDate = (date) => {
    setActiveDayValute(getValuteDay(date));
  };

  const changeInput = (inputValue, inputValute, setOutputValue, outputValute, outputEl, day) => {
    let outputExchange = 1;
    let outputValue = 0;
    if (inputValute === outputValute) {
      setOutputValue(inputValue);
      outputEl.current.value = inputValue;
    } else {
      if (inputValute !== Valutes.RUB) {
        let inputExchange = (day.Valute[inputValute]).Value;
        if (outputValute !== Valutes.RUB) {
          outputExchange = (day.Valute[outputValute]).Value;
        }
        outputValue = Math.ceil((inputExchange / outputExchange * inputValue) * CORRENCY_CALCULATION_RATIO) / CORRENCY_CALCULATION_RATIO;
        setOutputValue(outputValue);
        outputEl.current.value = outputValue;
      } else {
        if (outputValute !== Valutes.RUB) {
          outputExchange = (day.Valute[outputValute]).Value;
        }
        outputValue = Math.ceil((inputValue / outputExchange * inputValue) * CORRENCY_CALCULATION_RATIO) / CORRENCY_CALCULATION_RATIO;
        setOutputValue(outputValue);
        outputEl.current.value = outputValue;
      }
    }
  };

  const getLastDay = () => {
    let lastDayDate = ``;
    if (lastDays.length !== 0) {
      lastDayDate = dayjs(lastDays[lastDays.length - 1].Date).format(`YYYY-MM-DD`);
    }
    return lastDayDate;
  };

  const getOptions = () => {
    let options = [];
    for (let valute in Valutes) {
      if (Valutes.hasOwnProperty(valute)) {
        options.push(<option key={`valite-${Valutes[valute]}-i-have`}>{Valutes[valute]}</option>);
      }
    }
    return options;
  };

  return <form className="converter__form converter-form" disabled={isLoading}>
    <fieldset className="converter-form__group converter-form__group--i-have">
      <label className="converter-form__label">У меня есть</label>
      <div className="converter-form__wrapper">
        <input className={`converter-form__input converter-form__input--i-have ${errorEl === `converter-form__input--i-have` ? `converter-form__input--invalid` : ``}`} type="number" min="1" defaultValue={valueValuteIHave} ref={inputIHave} onChange={(({target}) => {
          if (target.value <= 0) {
            setErrorEl(`converter-form__input--i-have`);
            return;
          }
          setErrorEl(null);
          setValueValuteIHave(target.value);
          changeInput(target.value, valuteIHave, setValueValuteIWant, valuteIWant, inputIWant, activeDayValute);
        })}></input>
        <select className="converter-form__select converter-form__select-i-have" defaultValue={valuteIHave} onChange={(({target}) => {
          setValuteIHave(target.value);
          changeInput(valueValuteIHave, target.value, setValueValuteIWant, valuteIWant, inputIWant, activeDayValute);
        })}>
          {getOptions()}
        </select>
      </div>
    </fieldset>
    <fieldset className="converter-form__group converter-form__group--i-want">
      <label className="converter-form__label">Хочу приобрести</label>
      <div className="converter-form__wrapper">
        <input className={`converter-form__input converter-form__input--i-want ${errorEl === `converter-form__input--i-want` ? `converter-form__input--invalid` : ``}`} type="number" min="1" defaultValue={valueValuteIWant} ref={inputIWant} onChange={({target}) => {
          if (target.value <= 0) {
            setErrorEl(`converter-form__input--i-want`);
            return;
          }
          setErrorEl(null);
          setValueValuteIWant(target.value);
          changeInput(target.value, valuteIWant, setValueValuteIHave, valuteIHave, inputIHave, activeDayValute);
        }}></input>
        <select className="converter-form__select converter-form__select-i-want" defaultValue={valuteIWant} onChange={(({target}) => {
          setValuteIWant(target.value);
          changeInput(valueValuteIWant, target.value, setValueValuteIHave, valuteIHave, inputIHave, activeDayValute);
        })}>
          {getOptions()}
        </select>
      </div>
    </fieldset>
    <input className="converter-form__input converter-form__input--date" type="date" min={getLastDay()} max={maxDay} defaultValue={getDefaultDate()} onChange = {(({target}) => {
      setActiveDate(target.value);
      changeValuteDate(target.value);
      changeInput(valueValuteIHave, valuteIHave, setValueValuteIWant, valuteIWant, inputIWant, getValuteDay(target.value));
    })}></input>
    <button className="converter-form__submit button" disabled={errorEl ? true : false} type="button" onClick={() => {
      dispatch(addValueInTable(activeDate, valueValuteIHave, valuteIHave, valueValuteIWant, valuteIWant));
    }}>Сохранить результат</button>
  </form>;
};

export default ConverterForm;
