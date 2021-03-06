import { createStore } from "redux";
import rootReducer from "./reducers";

/* eslint-disable no-underscore-dangle */
export default createStore(
    rootReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
);
/* eslint-enable */