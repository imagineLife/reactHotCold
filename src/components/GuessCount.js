import React from 'react';

export default function GuessCount(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            <output id={props.id} aria-live="polite">{props.inputVal.length}</output>
        </div>
    );
}