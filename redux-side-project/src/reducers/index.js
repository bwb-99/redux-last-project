import {combineReducers} from "redux";

//combineReducers : reduce여러개를 모아서 한번에 저장
import mainReducer from "./mainReducer";
import foodReducer from "./foodReducer";
// mians.main_data , mians.main_detail => 변수저장
export default combineReducers({
    mains: mainReducer
})
