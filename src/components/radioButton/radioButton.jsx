import React, { useState, useEffect } from 'react';
import radioStyle from './radioButtonStyle.module.scss';

const RadioButton = ({ items, checked, onChange }) => {
    const [selected, setSelected] = useState(1);


    const handleSelected = (evt) => {
        setSelected(evt.target.value)
        if (onChange) {
            onChange(evt.target.value)
        }
    }

    const makeName = (length) => {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    useEffect(() => {
        if (checked !== undefined) {
            setSelected(items[checked])
        }
    }, [checked, items])

    return (
        <React.Fragment>
            {items.map(value => (
                <div>
                    <label className={radioStyle.container} key={value.id}>
                        {value}
                        <input
                            type="radio"
                            name={makeName(items.length)}
                            value={value}
                            checked={selected === value}
                            onChange={handleSelected || onChange}
                        />
                        <span className={radioStyle.checkmark}/>
                    </label>
                </div>
            ))}
        </React.Fragment>
    )
}

export default RadioButton