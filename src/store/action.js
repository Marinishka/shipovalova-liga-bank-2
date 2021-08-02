import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_PURPOSE: `local/porpose`,
  CHANGE_VALUES: `local/values`,
  CHANGE_PROPERTY: `local/roperty`,
  CHANGE_FEE: `local/fee`,
  CHANGE_MATERNAL_CAPITAL: `local/maternalCapital`,
  CHANGE_PERCENT: `local/percent`,
  CHANGE_TERM: `local/term`,
  CHANGE_AMOUNT_OF_CREDIT: `local/amountOfCredit`,
  CHANGE_CASCO: `local/casco`,
  CHANGE_LIFE_INSURANCE: `local/lifeInsurance`,
  CHANGE_SATISFYING_PARAMETERS: `local/satisfyingParameters`,
  OPEN_APPLICATION: `local/application`,
  CHANGE_NAME: `local/name`,
  CHANGE_EMAIL: `local/email`,
  CHANGE_TEL: `local/tel`,
  CHANGE_APPLICATION_NUMBER: `local/applicationNumber`,
  ENTER_LOGIN: `local/login`,
  ENTER_PASSWORD: `local/password`
};

export const changePurpose = createAction(ActionType.CHANGE_PURPOSE, (data) => {
  return {
    payload: data
  };
});

export const changeValues = createAction(ActionType.CHANGE_VALUES, (data) => {
  return {
    payload: data
  };
});

export const changeProperty = createAction(ActionType.CHANGE_PROPERTY, (data) => {
  return {
    payload: data
  };
});

export const changeFee = createAction(ActionType.CHANGE_FEE, (data) => {
  return {
    payload: data
  };
});

export const changeMaternalCapital = createAction(ActionType.CHANGE_MATERNAL_CAPITAL, (data) => {
  return {
    payload: data
  };
});

export const changeCasco = createAction(ActionType.CHANGE_CASCO, (data) => {
  return {
    payload: data
  };
});

export const changeLifeInsurance = createAction(ActionType.CHANGE_LIFE_INSURANCE, (data) => {
  return {
    payload: data
  };
});

export const changePercent = createAction(ActionType.CHANGE_PERCENT, (data) => {
  return {
    payload: data
  };
});

export const changeTerm = createAction(ActionType.CHANGE_TERM, (data) => {
  return {
    payload: data
  };
});

export const changeAmountOfCredit = createAction(ActionType.CHANGE_AMOUNT_OF_CREDIT, (data) => {
  return {
    payload: data
  };
});

export const changeSatisfyingParameters = createAction(ActionType.CHANGE_SATISFYING_PARAMETERS, (data) => {
  return {
    payload: data
  };
});

export const openApplication = createAction(ActionType.OPEN_APPLICATION, (data) => {
  return {
    payload: data
  };
});

export const changeName = createAction(ActionType.CHANGE_NAME, (data) => {
  return {
    payload: data
  };
});

export const changeEmail = createAction(ActionType.CHANGE_EMAIL, (data) => {
  return {
    payload: data
  };
});

export const changeTelephone = createAction(ActionType.CHANGE_TEL, (data) => {
  return {
    payload: data
  };
});

export const changeApplicationNumber = createAction(ActionType.CHANGE_APPLICATION_NUMBER, (data) => {
  return {
    payload: data
  };
});

export const enterLogin = createAction(ActionType.ENTER_LOGIN, (data) => {
  return {
    payload: data
  };
});

export const enterPassword = createAction(ActionType.ENTER_PASSWORD, (data) => {
  return {
    payload: data
  };
});
