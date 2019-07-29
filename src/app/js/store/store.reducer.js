import { combineReducers } from 'redux';
import todos from './todos/todos.reducer';

const appReducer = combineReducers({
	todos,
});

export default appReducer;