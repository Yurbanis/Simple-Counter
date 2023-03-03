//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

setInterval(function () {
  let segundos = Math.floor(Math.random() * 10);
  let minutos = Math.floor(Math.random() * 10);

  ReactDOM.render(
    <Home 
          signo =<i class="fa-light fa fa-clock"></i>
           number1="0"
          number2="0" 
          number3="0"
          number4={minutos}
          number5={segundos} />, document.querySelector("#app"));
}, 1000);

