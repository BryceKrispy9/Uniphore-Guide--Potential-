import React from "react";
import { Link } from "react-router-dom";

export default function () {
	return (
		<div className="no-match">
			<h2>We couldn't find that page</h2>
			<div className="no-match-link">
				<Link to="/">Return Home</Link>
			</div>
		</div>
	);
}
