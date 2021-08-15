import {loadValuteLastDay, loadSomeLastDay} from '../action';
import {createReducer} from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const initialState = {
  lastDay: null,
  lastDays: []
};

const data = createReducer(initialState, (builder) => {
  builder.addCase(loadValuteLastDay, (state, action) => {
    state.lastDay = action.payload;
    state.lastDays.push(action.payload);
  });
  builder.addCase(loadSomeLastDay, (state, action) => {
    state.lastDays.push(action.payload);
    state.lastDays.sort(function (a, b) {
      return dayjs(b.Date).diff(dayjs(a.Date));
    });
  });
});

export {data};
