import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {KeyCodes} from '../../const';
import {changeCasco, changeLifeInsurance, changeMaternalCapital} from '../../store/action';

const Checkboxes = ({value}) => {

  const isMaternalCapital = useSelector((state) => state.LOCAL.isMaternalCapital);
  const isCasco = useSelector((state) => state.LOCAL.isCasco);
  const isLifeInsurance = useSelector((state) => state.LOCAL.isLifeInsurance);

  const dispatch = useDispatch();

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

  return value === `mortgage` ?
    <label className="calculator__label">
      <input className="calculator__checkbox visually-hidden"
        type="checkbox"
        checked={isMaternalCapital}
        onChange={onMaternalCapitalChange}></input>
      <div className={`calculator__checkbox-label ${isMaternalCapital ? `calculator__checkbox-label--active` : ``}`}
        tabIndex="0"
        onKeyDown={onMaternalCapitalKeydown}>Использовать материнский капитал</div>
    </label> :
    <>
      <label className="calculator__label">
        <input className="calculator__checkbox visually-hidden"
          type="checkbox"
          checked={isCasco}
          onChange={isCascoChange}></input>
        <div className={`calculator__checkbox-label ${isCasco ? `calculator__checkbox-label--active` : ``}`}
          tabIndex="0"
          onKeyDown={onCascoKeydown}>Оформить КАСКО</div>
      </label>
      <label className="calculator__label">
        <input className="calculator__checkbox visually-hidden"
          type="checkbox"
          checked={isLifeInsurance}
          onChange={onLifeInsuranceChange}></input>
        <div className={`calculator__checkbox-label ${isLifeInsurance ? `calculator__checkbox-label--active` : ``}`}
          tabIndex="0"
          onKeyDown={onLifeInsuranceKeydown}>Оформить Страхование жизни в нашем банке</div>
      </label>
    </>;
};

Checkboxes.propTypes = {
  value: PropTypes.string.isRequired
};

export default Checkboxes;
