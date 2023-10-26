import {createStore} from "redux";
import { todoReducer } from "./reducers/todoReducers";

export const todoStore = createStore(todoReducer);

//Note - createStore() method is corssed out as it has been deprecated by the redux team
//Redux team now suggets to use redux toolkit instead of raw redux
//Redux toolkit also uses raw redux internally/.

//Note - It is suggested to create only one store file, but it is not mandatory.
//Multiple stores in different files can also be created if required.
