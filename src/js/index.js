//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let segundos = 0;
let minutos = 0;
let horas = 0;

setInterval(function () {
  segundos++;

  if (segundos === 60) {
    segundos = 0;
    minutos++;
  } else if (minutos === 60) {
    minutos = 0;
    horas++;
  }

  ReactDOM.render(
    <Home
      signo=<i className="fa-light fa fa-clock"></i>
      number1="0"
      number2="0"
      number3={horas}
      number4={minutos}
      number5={segundos}
    />,
    document.querySelector("#app")
  );
}, 1000);
