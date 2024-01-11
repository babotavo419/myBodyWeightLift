import { createStore, combineReducers } from 'redux';
import calorieReducer from './reducers/calorieReducer';

const rootReducer = combineReducers({
  calories: calorieReducer,
  // You can add more reducers here as your app grows
});

const store = createStore(rootReducer);

export default store;
