import { filterReducer } from './filters/filter-reducers';
import { positionReducer } from './positions/position-reducer';

const { combineReducers } = require('redux');

export const rootReducer = combineReducers({
	positions: positionReducer,
	filters: filterReducer,
});
