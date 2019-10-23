import loginReducer from "./login";
import {combineReducers} from "redux";
import todoReducer from "./todo";
import counterReducer from "./counter";


const rootReducer = combineReducers({
  isLogin: loginReducer,
  todoResource: todoReducer,
  counterResource: counterReducer
});

export default rootReducer;
