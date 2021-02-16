import React, { useState } from 'react';
import radioStyle from './radioButtonStyle.module.scss';

const RadioButton = ({ items, checked }) => {
    const [selected, setSelected] = useState(1);
    const groupSize = items.length

    const handleSelected = (evt) => {
        setSelected(evt.target.value)
    }

    return (
        <React.Fragment>
            {items.map(value => (
                    <div>
                        <input
                            type="radio"
                            name={items[0]}
                            value={value}
                            checked={(selected === value)}
                            onChange={handleSelected}
                        />
                        <label>{value}</label>
                    </div>
            ))}
        </React.Fragment>
    )
}

export default RadioButton