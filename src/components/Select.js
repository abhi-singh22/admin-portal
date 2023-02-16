import React from "react";

function Select(props) {
    const { options, handleInput, name, id, showErrorMessege } = props;
    return (
        <select name={name} id={id} onChange={(event) => handleInput(event)} onBlur={(event) => showErrorMessege(event)}>
            {options && options.map((option) => (
                <option value={option.value} key={option.value}>{option.label}</option>
            ))
            }
        </select>
    );
}

export default Select;
