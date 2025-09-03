// Removed duplicate GhostButton declaration
import React from "react";

/**
 * GhostButton - transparent button with optional start/end elements
 */
const GhostButton = ({ children, startElement, endElement, style, ...props }) => (
	<button
		{...props}
		style={{
			background: "transparent",
			border: "none",
			color: "#8a5be6",
			padding: "0.7rem 1.2rem",
			borderRadius: 8,
			fontWeight: 500,
			fontSize: "1rem",
			display: "flex",
			alignItems: "center",
			gap: 8,
			cursor: "pointer",
			...style
		}}
	>
		{startElement && <span style={{ display: "inline-flex", marginRight: 6 }}>{startElement}</span>}
		{children}
		{endElement && <span style={{ display: "inline-flex", marginLeft: 6 }}>{endElement}</span>}
	</button>
);

export default GhostButton;
