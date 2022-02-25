import { createStore, applyMiddleware, } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const store = () => createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper(store);
