import {addValueInTable, changeCasco, changeEmail, changeLifeInsurance, changeMaternalCapital, changeName, changePercent, changeTelephone, changeTerm, changeValues, enterLogin, enterPassword, getInitialState, openApplication, resetTable} from '../action';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  values: null,
  isMaternalCapital: false,
  isCasco: false,
  isLifeInsurance: false,
  percent: 0,
  term: 5,
  isOpenAnApplication: false,
  name: ``,
  email: ``,
  telephone: ``,
  login: ``,
  password: ``,
  table: []
};

const localState = createReducer(initialState, (builder) => {
  builder.addCase(changeValues, (state, action) => {
    state.values = action.payload;
  });
  builder.addCase(changeMaternalCapital, (state, action) => {
    state.isMaternalCapital = action.payload;
  });
  builder.addCase(changeCasco, (state, action) => {
    state.isCasco = action.payload;
  });
  builder.addCase(changeLifeInsurance, (state, action) => {
    state.isLifeInsurance = action.payload;
  });
  builder.addCase(changePercent, (state, action) => {
    state.percent = action.payload;
  });
  builder.addCase(changeTerm, (state, action) => {
    state.term = action.payload;
  });
  builder.addCase(openApplication, (state, action) => {
    state.isOpenAnApplication = action.payload;
  });
  builder.addCase(changeName, (state, action) => {
    state.name = action.payload;
  });
  builder.addCase(changeEmail, (state, action) => {
    state.email = action.payload;
  });
  builder.addCase(changeTelephone, (state, action) => {
    state.telephone = action.payload;
  });
  builder.addCase(enterLogin, (state, action) => {
    state.login = action.payload;
  });
  builder.addCase(enterPassword, (state, action) => {
    state.password = action.payload;
  });
  builder.addCase(getInitialState, (state, action) => {
    return Object.assign(
        state,
        action.payload
    );
  });
  builder.addCase(addValueInTable, (state, action) => {
    if (state.table.length < 10) {
      state.table.unshift(action.payload);
    } else {
      state.table.pop();
      state.table.unshift(action.payload);
    }
  });
  builder.addCase(resetTable, (state, action) => {
    state.table = action.payload;
  });
});

export {localState};
