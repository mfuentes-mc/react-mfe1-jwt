import React from "react";
import ReactDOM from "react-dom";
import {ListScreen} from './components/ListScreen';
import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: react-mfe1-jwt</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <ListScreen/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
