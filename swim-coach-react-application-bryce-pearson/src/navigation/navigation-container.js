import React from "react";
// import axios from "axios";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationComponent = (props) => {
	const dynamicLink = (route, linkText) => {
		return (
			<div className="nav-link-wrapper">
				<NavLink to="/fourms/admin" activeClassName="nav-link-active">
					Add & Edit Guides
				</NavLink>
			</div>
		);
	};

	const refreshPage = () => {
		window.location.reload(false);
	};

	return (
		<div className="nav-wrapper">
			<div className="left-side">
				<div className="nav-link-wrapper">
					<NavLink exact to="/" activeClassName="nav-link-active">
						Home
					</NavLink>
				</div>

				{/* <div className="nav-link-wrapper">
					<NavLink to="/fourms" activeClassName="nav-link-active">
						View Guides
					</NavLink>
				</div> */}

				{props.loggedInStatus === "LOGGED_IN"
					? dynamicLink("/fourms", "Posts")
					: null}
			</div>

			<div className="nav-link-wrapper">
				<NavLink to="/fourms" activeClassName="nav-link-active">
					U-Product Suite
				</NavLink>
			</div>

			<div className="nav-link-wrapper">
				<NavLink to="/fourms" activeClassName="nav-link-active">
					Q For Sales
				</NavLink>
			</div>

			<div className="nav-link-wrapper">
				<NavLink to="/fourms" activeClassName="nav-link-active">
					Interact Product Suite
				</NavLink>
			</div>

			<div className="right-side">
				{props.loggedInStatus === "LOGGED_IN" ? (
					<a onClick={refreshPage}>
						<FontAwesomeIcon icon="sign-out-alt" />
					</a>
				) : null}
			</div>
		</div>
	);
};

export default NavigationComponent;
