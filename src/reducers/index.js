import { combineReducers} from "redux";
import auth from "./auth";

const appReducer  = combineReducers({
    auth
});

const index = (state, action) => {
    if(action.type === "EXIT_CLIENT") {
        state = undefined
    }

    return appReducer(state,action);
}

export  default index;
