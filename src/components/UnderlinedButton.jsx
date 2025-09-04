import React from "react";

/**
 * UnderlinedButton - button with underline for selected tab, optional start/end elements
 */
const UnderlinedButton = ({ children, startElement, endElement, selected, style, ...props }) => (
	<button
		{...props}
		style={{
			background: "transparent",
			border: "none",
			color: selected ? "#8a5be6" : "#222",
			padding: "0.7rem 1.2rem",
			borderRadius: 8,
			fontWeight: selected ? 700 : 500,
			fontSize: "1rem",
			display: "flex",
			alignItems: "center",
			gap: 8,
			cursor: "pointer",
			borderBottom: selected ? "2.5px solid #8a5be6" : "2.5px solid transparent",
			transition: "border-color 0.2s",
			...style
		}}
	>
		{startElement && <span style={{ display: "inline-flex", marginRight: 6 }}>{startElement}</span>}
		{children}
		{endElement && <span style={{ display: "inline-flex", marginLeft: 6 }}>{endElement}</span>}
	</button>
);

export default UnderlinedButton;
