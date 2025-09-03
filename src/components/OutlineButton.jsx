import React from "react";

/**
 * OutlineButton - button with border, optional start/end elements
 */
const OutlineButton = ({ children, startElement, endElement, style, ...props }) => (
	<button
		{...props}
		style={{
			background: "transparent",
			border: "2px solid #8a5be6",
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

export default OutlineButton;
