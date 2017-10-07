import React from 'react';

import './UserInstructions.css';

export default function UserInstructions(props){
	return(
		<legend>{props.displayText}</legend>
	)
}