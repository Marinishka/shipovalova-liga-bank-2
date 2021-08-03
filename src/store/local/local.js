import {changeAmountOfCredit, changeApplicationNumber, changeCasco, changeEmail, changeFee, changeLifeInsurance, changeMaternalCapital, changeName, changePercent, changeProperty, changePurpose, changeSatisfyingParameters, changeTelephone, changeTerm, changeValues, enterLogin, enterPassword, getInitialState, openApplication} from '../action';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  purpose: `initial`,
  values: null,
  property: 0,
  fee: 0,
  isMaternalCapital: false,
  isCasco: false,
  isLifeInsurance: false,
  percent: 0,
  term: 5,
  amountOfCredit: 0,
  isParametersSatisfying: false,
  isOpenAnApplication: false,
  name: ``,
  email: ``,
  telephone: ``,
  applicationNumber: 1,
  login: ``,
  password: ``
};

const localState = createReducer(initialState, (builder) => {
  builder.addCase(changePurpose, (state, action) => {
    state.purpose = action.payload;
  });
  builder.addCase(changeValues, (state, action) => {
    state.values = action.payload;
  });
  builder.addCase(changeProperty, (state, action) => {
    state.property = action.payload;
  });
  builder.addCase(changeFee, (state, action) => {
    state.fee = action.payload;
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
  builder.addCase(changeAmountOfCredit, (state, action) => {
    state.amountOfCredit = action.payload;
  });
  builder.addCase(changeSatisfyingParameters, (state, action) => {
    state.isParametersSatisfying = action.payload;
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
  builder.addCase(changeApplicationNumber, (state, action) => {
    state.applicationNumber = action.payload;
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
});

export {localState};
