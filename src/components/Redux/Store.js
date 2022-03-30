import { createStore } from "redux";

import Todos from "./Reducers/Reducer";

const store = createStore(Todos
    ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
