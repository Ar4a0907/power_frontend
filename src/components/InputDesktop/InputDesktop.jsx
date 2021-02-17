import React, { useState } from 'react';
import InputStyles from './InputDesktopStyle.module.scss';

const InputDekstop = ({className,placeholder,label,onChange, ...classes}) => {

    const inputClass = Object.entries(classes).map(([key]) =>
    InputStyles[key] !== undefined ? InputStyles[key] : '').join(' ') + ' ' + (className ? className : '');

    const [text,setText] = useState('');
    const [divDisplay,setDivDisplay] = useState(false)
    const [showFocusElement,setShowFocusElement] = useState(false);

    const handleChange = (event) => {
        setText(event.target.value)
        onChange(event.target.value)
    };

    const toggleLabel = () => {
        setShowFocusElement(!showFocusElement);
    };

    const changeStyleState = (event) => {
        if(event.target.value === '') {
            setDivDisplay(!divDisplay)
            toggleLabel();
        }
    }

    const clearButton = (event) => {
        setText('')
        setDivDisplay(!divDisplay)
        toggleLabel();
        event.target.blur()
        
    }

    return (
        <div className = { `${InputStyles['container']} ${classes.successful && InputStyles['successful']} ${divDisplay ? InputStyles['show'] : InputStyles['hide']}` } >
            <label className = { `${InputStyles['label']} ${classes.successful && InputStyles['successful']}` }  > { label } </label>
            <input className = { `${inputClass} ${InputStyles['input']}` }
                placeholder = {placeholder}
                value = {text}
                onChange = {handleChange}
                onFocus = {changeStyleState} 
                onBlur = {changeStyleState} />
            <button onClick={clearButton} className = {`${InputStyles['clearButton']} ${classes.successful && InputStyles['successful']}` } />
        </div>
    );
}

export default InputDekstop;