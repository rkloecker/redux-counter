import React, { Component } from "react";
import Counter from "./components/Counter";
import Counterfunc from "./components/Counterfunc";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <Counter /> */}
        <Counterfunc />
      </Provider>
    );
  }
}

export default App;
