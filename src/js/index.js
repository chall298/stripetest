//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

import { render } from "react-dom";
import { StripeProvider } from "react-stripe-elements";

import MyStoreCheckout from "./MyStoreCheckout";
//render your react application

const App = () => {
	return (
		<StripeProvider apiKey="pk_test_12345">
			<MyStoreCheckout />
		</StripeProvider>
	);
};

render(<App />, document.getElementById("root"));
// ReactDOM.render(<Home />, document.querySelector("#app"));
