import {createAction} from '@reduxjs/toolkit';
import {InitialState, INITIAL_TABLE} from '../const';

export const ActionType = {
  CHANGE_VALUES: `local/values`,
  CHANGE_MATERNAL_CAPITAL: `local/maternalCapital`,
  CHANGE_PERCENT: `local/percent`,
  CHANGE_TERM: `local/term`,
  CHANGE_CASCO: `local/casco`,
  CHANGE_LIFE_INSURANCE: `local/lifeInsurance`,
  OPEN_APPLICATION: `local/application`,
  CHANGE_NAME: `local/name`,
  CHANGE_EMAIL: `local/email`,
  CHANGE_TEL: `local/tel`,
  ENTER_LOGIN: `local/login`,
  ENTER_PASSWORD: `local/password`,
  GET_INITIAL_STATE: `local/state`,
  LOAD_VALUTE_LAST_DAY: `data/lastDay`,
  LOAD_SOME_LAST_DAY: `data/lastDays`,
  ADD_VALUE_IN_TABLE: `local/addValueInTable`,
  DELETE_LAST_VALUE: `loca/deleteLastValue`,
  RESET_TABLE: `local/resetTable`
};

export const changeValues = createAction(ActionType.CHANGE_VALUES, (data) => {
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

export const getInitialState = (createAction(ActionType.GET_INITIAL_STATE, () => {
  return {
    payload: InitialState
  };
}));

export const loadValuteLastDay = createAction(ActionType.LOAD_VALUTE_LAST_DAY, (data) => {
  return {
    payload: data
  };
});

export const loadSomeLastDay = createAction(ActionType.LOAD_SOME_LAST_DAY, (data) => {
  return {
    payload: data
  };
});

export const addValueInTable = createAction(ActionType.ADD_VALUE_IN_TABLE, (date, valueInput, valuteInput, valueOutput, valuteOutput) => {
  return {
    payload: {
      date,
      valueInput,
      valuteInput,
      valueOutput,
      valuteOutput
    }
  };
});

export const resetTable = createAction(ActionType.RESET_TABLE, (table = INITIAL_TABLE) => {
  return {
    payload: table
  };
});
