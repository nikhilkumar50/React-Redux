import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createStore, combineReducers } from "redux";
import { accountReducer } from "./reducers/Account";
import { bonusReducer } from "./reducers/Bonus";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { Provider } from "react-redux";

const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(logger, thunk)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

