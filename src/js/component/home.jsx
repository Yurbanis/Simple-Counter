import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import '../../styles/index.css';


//create your first component
function Home(props) {
	return (
	  <div className="mySuperStyles">
		<div className="reloj">
		<div className="signo">{props.signo}</div>
		  <div className="cinco">{props.number1}</div>
		  <div className="cuatro">{props.number2}</div>
		  <div className="tres">{props.number3}</div>
		  <div className="dos">{props.number4}</div>
		  <div className="uno">{props.number5}</div>
		</div>
	  </div>
	);
  }

  Home.propTypes = {
	signo: PropTypes.string,
	number1: PropTypes.string,
	number2: PropTypes.string,
	number3: PropTypes.string,
	number4: PropTypes.string,
	number5: PropTypes.string,
  };


export default Home;













