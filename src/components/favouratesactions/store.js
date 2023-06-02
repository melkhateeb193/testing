import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import favoritesReducer from './favoritesReducer';
import { legacy_createStore as createStore} from 'redux'
const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
