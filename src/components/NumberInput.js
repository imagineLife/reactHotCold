import React from 'react';

import './NumberInput.css';

export default function NumberInput(props) {
    return (
        <div className="form-group">
            <input type="number" id="guessInput" placeholder={props.placeholder}/>
        </div>
    );
}