import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// use valid javascript expression inside react element because react element valid javascript code. it has the similarity fo the
const ele = <h2>amar sonar bangla {summation} {new Date.date()} {</h2>;

// return JSX from javascript expression since JSX also valid javascript object
function getGreeting(user){
  if(user){
    return <p>hello world!</p>
  }else return <p>you failled</p>
}

// interpolation in react element
const ele = <h2>amar sonar bangla { getGreeting('masud')} </h2>;

// JSX element and pass parameter to the JSX: 
const index = 0;
const element = (
  <h2 className="heading" tabIndex={index}>hello masud rana
  <p>i am inside h2 tag</p>
  </h2>
  <p className="description">hello shamoli rahman soton</p>
)

// behind the scene in REACT: 
element = {
  type: 'h2',
  props: {
    className: 'heading',
    tabIndex: 0,
    children: 'hello masud rana',
  }
}

// JSX code and below equivalent REACT DOM Tree
const index = 0;
const element = (
  <h2 className="heading" tabIndex={index}>hello masud rana
  <p>i am inside h2 tag</p>
  <small>this is small</small>
  </h2>
)

// behind the scene in REACT: 
element = {
  type: 'h2',
  props: {
    className: 'heading',
    tabIndex: 0,
    children: [ //since children more than one element, so we need array of children objects
     {
      type: 'p',
      props: null,
     },
    {
      type: 'small',
      props: null,
    }
    ],
  }
}

