import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {getNumberWithSpaces} from '../../utils/common';
import {openApplication} from '../../store/action';
import {Words} from '../../const';

const ResultSuccess = ({monthlyPayment, necessaryIncome, interestRate}) => {
  const amountOfCredit = useSelector((state) => state.LOCAL.amountOfCredit);
  const values = useSelector((state) => state.LOCAL.values);
  const dispatch = useDispatch();

  const onOpenApplicationClick = () => {
    dispatch(openApplication(true));
  };

  return <>
    <h3 className="result__title">Наше предложение</h3>
    <dl className="result__list">
      <div className="result__group">
        <div className="result__cell">
          <dd className="result__value">{getNumberWithSpaces(amountOfCredit)} рублей</dd>
          <dt className="result__term">Сумма {Words[values.VALUE.toUpperCase()].SUM}</dt>
        </div>
        <div className="result__cell">
          <dd className="result__value">{`${interestRate}`}%</dd>
          <dt className="result__term">Процентная ставка</dt>
        </div>
      </div>
      <div className="result__group">
        <div className="result__cell">
          <dd className="result__value">{getNumberWithSpaces(monthlyPayment)} рублей</dd>
          <dt className="result__term">Ежемесячный платеж</dt>
        </div>
        <div className="result__cell">
          <dd className="result__value">{getNumberWithSpaces(necessaryIncome)} рублей</dd>
          <dt className="result__term">Необходимый доход</dt>
        </div>
      </div>
    </dl>
    <button className="result__btn" type="button" onClick={onOpenApplicationClick}>Оформить заявку</button>
  </>;
};

ResultSuccess.propTypes = {
  monthlyPayment: PropTypes.number.isRequired,
  necessaryIncome: PropTypes.number.isRequired,
  interestRate: PropTypes.number.isRequired
};

export default ResultSuccess;
