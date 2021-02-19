import React, { useState } from 'react';
import InputStyles from './InputDesktopStyle.module.scss';

const InputDekstop = ({className,placeholder,label,onChange,successful, ...classes}) => {

    const inputClass = Object.entries(classes).map(([key]) =>
    InputStyles[key] !== undefined ? InputStyles[key] : '').join(' ') + ' ' + (className ? className : '');

    const [text,setText] = useState('');
    const [divDisplay,setDivDisplay] = useState(false)

    const handleChange = (event) => {
        setText(event.target.value)
        if(onChange !== undefined) {
            onChange(event.target.value)
        }
    };


    const changeStyleState = (event) => {
        if(event.target.value === '') {
            setDivDisplay(!divDisplay)
        }
    }

    const clearButton = (event) => {
        setText('')
        setDivDisplay(!divDisplay)
        event.target.blur()
        if(onChange !== undefined) {
            onChange('')
        }
        
        
    }

    return (
        <div className={`${InputStyles['container']} ${successful && InputStyles['successful']} ${divDisplay ? InputStyles['show'] : InputStyles['hide']}`} >
            <label className={`${InputStyles['label']} ${successful && InputStyles['successful']}`}  >{ label } </label>
            <input className={ `${inputClass} ${InputStyles['input']}` }
                placeholder={placeholder}
                value={text}
                onChange={handleChange}
                onFocus={changeStyleState} 
                onBlur={changeStyleState} />
            <button onClick={clearButton} className={`${InputStyles['clearButton']} ${successful && InputStyles['successful']}`} />
        </div>
    );
}

export default InputDekstop;