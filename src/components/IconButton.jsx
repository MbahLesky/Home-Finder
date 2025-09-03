import React from "react";

/**
 * IconButton - a button for icons, takes icon as children, supports all button props
 */
const IconButton = ({ children, style, ...props }) => (
	<button
		type="button"
		{...props}
		style={{
			background: 'none',
			border: '1.5px solid #5a4fcf',
			borderRadius: '50%',
			padding: 6,
			cursor: 'pointer',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			...style
		}}
	>
		{children}
	</button>
);

export default IconButton;
