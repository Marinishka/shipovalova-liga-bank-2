import React from 'react';
import {useSelector} from 'react-redux';
import {Words} from '../../const';
import {getNumberWithSpaces} from '../../utils/common';

const ResultFail = () => {
  const values = useSelector((state) => state.LOCAL.values);

  return <>
    <h2 className="result__title">Наш банк не выдаёт {Words[values.VALUE.toUpperCase()].DOES_NOT_ISSUE} меньше {getNumberWithSpaces(values.MIN_CREDIT)} рублей.</h2>
    <p className="result__term">Попробуйте использовать другие параметры для расчёта.</p>
  </>;
};

export default ResultFail;
