import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {MATERNAL_CAPITAL} from '../../const';
import {changeAmountOfCredit, changeSatisfyingParameters, openApplication} from '../../store/action';
import ResultFail from '../result-fail/result-fail';
import ResultSuccess from '../result-success/result-success';

const Result = () => {
  const property = useSelector((state) => state.LOCAL.property);
  const values = useSelector((state) => state.LOCAL.values);
  const fee = useSelector((state) => state.LOCAL.fee);
  const isMaternalCapital = useSelector((state) => state.LOCAL.isMaternalCapital);
  const isCasco = useSelector((state) => state.LOCAL.isCasco);
  const isLifeInsurance = useSelector((state) => state.LOCAL.isLifeInsurance);
  const term = useSelector((state) => state.LOCAL.term);
  const amountOfCredit = useSelector((state) => state.LOCAL.amountOfCredit);

  const [interestRate, setInterestRate] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [necessaryIncome, setNecessaryIncome] = useState(0);

  const dispatch = useDispatch();

  const getTermInMounth = () => {
    return Number(term) * 12;
  };

  const getInterestRate = () => {
    if (values.VALUE === `mortgage`) {
      if (Number((fee / (property * 0.01))) < values.INTEREST_RATE.FEE) {
        setInterestRate(values.INTEREST_RATE.LOWER_FEE);
        return;
      }
      setInterestRate(values.INTEREST_RATE.HIGHER_FEE);
    } else {
      if (isCasco && isLifeInsurance) {
        setInterestRate(values.INTEREST_RATE.CASCO_AND_LIFE_INSURANCE);
      } else if (isCasco || isLifeInsurance) {
        setInterestRate(values.INTEREST_RATE.CASCO_OR_LIFE_INSURANCE);
      } else if (property < values.INTEREST_RATE.FEE) {
        setInterestRate(values.INTEREST_RATE.LOWER_FEE);
      } else {
        setInterestRate(values.INTEREST_RATE.HIGHER_FEE);
      }
    }
  };

  const getNecessaryIncome = (monthlyPay) => {
    setNecessaryIncome(Math.ceil(monthlyPay / 0.45));
  };

  const getMonthlyPayment = () => {
    let maternalCapital = 0;
    if (values.VALUE === `mortgage`) {
      if (isMaternalCapital) {
        maternalCapital = MATERNAL_CAPITAL;
      }
    }
    dispatch(changeAmountOfCredit(property - fee - maternalCapital));
    const monthlyInterestRate = interestRate * 0.01 / 12;
    const result = Math.ceil((property - fee - maternalCapital) * (monthlyInterestRate + monthlyInterestRate / (Math.pow((1 + monthlyInterestRate), getTermInMounth()) - 1)));
    getNecessaryIncome(result);
    return result;
  };

  const getIsParametersSatisfying = () => {
    // eslint-disable-next-line
    debugger;
    const result = amountOfCredit > values.MIN_CREDIT;
    dispatch(changeSatisfyingParameters(result));
    if (!result) {
      dispatch(openApplication(false));
    }
    return result;
  };

  useEffect(() => {
    getInterestRate();
    setMonthlyPayment(getMonthlyPayment());
  }, [fee, term, isCasco, isLifeInsurance, values, isMaternalCapital]);

  return <section className="result">
    {getIsParametersSatisfying() ?
      <ResultSuccess monthlyPayment={monthlyPayment} necessaryIncome={necessaryIncome} interestRate={interestRate}/> :
      <ResultFail/>}
  </section>;
};

export default Result;
