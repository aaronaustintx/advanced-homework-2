import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

let currentCategory = "tires";

function changeCategory(category){
  currentCategory = category;
  ReactDOM.render(
    <App change={changeCategory} currentCategory={currentCategory} products= {state.products}/>,
    document.getElementById("root")
  );
  console.log(currentCategory)
  render();
}


function render() {
  ReactDOM.render(
    <App change={changeCategory} currentCategory={currentCategory} products= {state.products}/>,
    document.getElementById("root")
  );
}
render();

// function changeCategory(){
//   state.currentCategory +=1;
//   console.log(state.currentCategory)
// }


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
// import state from './state';

// ReactDOM.render(
//   <App products= {state.products}/>,
//   document.getElementById('root')
// );


