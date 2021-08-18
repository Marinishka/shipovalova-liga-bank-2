import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {MATERNAL_CAPITAL} from '../../const';
import {openApplication} from '../../store/action';
import ResultFail from '../result-fail/result-fail';
import ResultSuccess from '../result-success/result-success';

const Result = ({fee, property}) => {
  const values = useSelector((state) => state.LOCAL.values);
  const isMaternalCapital = useSelector((state) => state.LOCAL.isMaternalCapital);
  const isCasco = useSelector((state) => state.LOCAL.isCasco);
  const isLifeInsurance = useSelector((state) => state.LOCAL.isLifeInsurance);
  const term = useSelector((state) => state.LOCAL.term);

  const [interestRate, setInterestRate] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [necessaryIncome, setNecessaryIncome] = useState(0);
  const [amountOfCredit, setAmountOfCredit] = useState(0);
  const [isParametersSatisfying, setParametersSatisfying] = useState(true);

  const dispatch = useDispatch();

  const getTermInMounth = () => {
    return Number(term) * 12;
  };

  const getInterestRate = () => {
    let newInterestRate;
    if (values.VALUE === `mortgage`) {
      if (Number((fee / (property * 0.01))) < values.INTEREST_RATE.FEE) {
        setInterestRate(values.INTEREST_RATE.LOWER_FEE);
        newInterestRate = values.INTEREST_RATE.LOWER_FEE;
      } else {
        setInterestRate(values.INTEREST_RATE.HIGHER_FEE);
        newInterestRate = values.INTEREST_RATE.HIGHER_FEE;
      }
    } else {
      if (isCasco && isLifeInsurance) {
        setInterestRate(values.INTEREST_RATE.CASCO_AND_LIFE_INSURANCE);
        newInterestRate = values.INTEREST_RATE.CASCO_AND_LIFE_INSURANCE;
      } else if (isCasco || isLifeInsurance) {
        setInterestRate(values.INTEREST_RATE.CASCO_OR_LIFE_INSURANCE);
        newInterestRate = values.INTEREST_RATE.CASCO_OR_LIFE_INSURANCE;
      } else if (property < values.INTEREST_RATE.FEE) {
        setInterestRate(values.INTEREST_RATE.LOWER_FEE);
        newInterestRate = values.INTEREST_RATE.LOWER_FEE;
      } else {
        setInterestRate(values.INTEREST_RATE.HIGHER_FEE);
        newInterestRate = values.INTEREST_RATE.HIGHER_FEE;
      }
    }
    return newInterestRate;
  };

  const getNecessaryIncome = (monthlyPay) => {
    setNecessaryIncome(Math.ceil(monthlyPay / 0.45));
  };

  const getMaternalCapital = (value) => {
    let maternalCapital = 0;
    if (value === `mortgage`) {
      if (isMaternalCapital) {
        maternalCapital = MATERNAL_CAPITAL;
      }
    }
    return maternalCapital;
  };

  const getAmountOfCredit = () => {
    return Math.ceil(property - fee - getMaternalCapital(values.VALUE));
  };

  const getMonthlyPayment = (amountOfCreditValue) => {
    const monthlyInterestRate = getInterestRate() * 0.01 / 12;
    return Math.ceil(amountOfCreditValue * (monthlyInterestRate + monthlyInterestRate / (Math.pow((1 + monthlyInterestRate), getTermInMounth()) - 1)));
  };

  useEffect(() => {
    const amountOfCreditValue = getAmountOfCredit();
    setAmountOfCredit(amountOfCreditValue);
    const monthlyPaymentValue = getMonthlyPayment(amountOfCreditValue);
    setMonthlyPayment(monthlyPaymentValue);
    getNecessaryIncome(monthlyPaymentValue);
    const result = amountOfCreditValue > values.MIN_CREDIT;
    setParametersSatisfying(result);
    if (!result) {
      dispatch(openApplication(false));
    }
  }, [term, isCasco, isLifeInsurance, values, isMaternalCapital, fee]);

  return <section className="result">
    {isParametersSatisfying ?
      <ResultSuccess monthlyPayment={monthlyPayment}
        necessaryIncome={necessaryIncome}
        interestRate={interestRate}
        amountOfCredit={amountOfCredit}/> :
      <ResultFail/>}
  </section>;
};

Result.propTypes = {
  fee: PropTypes.number.isRequired,
  property: PropTypes.number.isRequired
};

export default Result;
