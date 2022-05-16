import {createStore} from 'redux';
import { reducer } from './Redux/Cart/reducer';
export const store=createStore(reducer);
