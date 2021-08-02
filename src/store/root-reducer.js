import {combineReducers} from 'redux';
import {localState} from './local/local';

export const NameSpace = {
  LOCAL: `LOCAL`
};

export default combineReducers({
  [NameSpace.LOCAL]: localState
});
