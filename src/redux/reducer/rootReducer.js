import { combineReducers } from "redux";

import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  reducer: {
    counter: counterReducer,
    counter2: counterReducer,
  }
});

export default rootReducer;