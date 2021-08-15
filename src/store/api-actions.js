import {loadValuteLastDay, loadSomeLastDay} from './action';

export const fetchValuteLastDay = () => (dispatch, _getState, api) => (
  api.get(`/daily_json.js`)
    .then(({data}) => {
      dispatch(loadValuteLastDay(data));
    })
);

export const fetchLastDays = (urlDateYYYYMMDD) => (dispatch, _getState, api) => (
  api.get(`/archive/${urlDateYYYYMMDD}/daily_json.js`)
    .then(({data}) => {
      dispatch(loadSomeLastDay(data));
    })
);
