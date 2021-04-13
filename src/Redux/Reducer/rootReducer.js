import { combineReducers } from "redux";
import { BurgerReducer } from "./burgerReducer";

const rootReducer = combineReducers({
    //Default
    burgers: BurgerReducer
})

export default rootReducer