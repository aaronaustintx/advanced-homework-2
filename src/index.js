// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css";
// import state from "./state";

// function render() {
//   ReactDOM.render(
//     <App products= {state.products}/>,
//     document.getElementById("root")
//   );
// }
// render();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state from './state';

ReactDOM.render(
  <App products= {state.products}/>,
  document.getElementById('root')
);


