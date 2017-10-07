import React from 'react';

export default function GuessList(props){
	const guessItems = props.visualRep.map((guess,index) => (
		<li key={index}>{guess}</li>
	));

	return(
		<ul id="GuessList">
			{guessItems}
		</ul>
	)
}