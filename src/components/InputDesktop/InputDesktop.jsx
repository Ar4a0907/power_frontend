import React, { useState } from 'react';
import InputStyles from './InputDesktopStyle.module.scss';

const InputDekstop = ({className,placeholder,label, ...classes}) => {

    const inputClass = Object.entries(classes).map(([key]) =>
    InputStyles[key] !== undefined ? InputStyles[key] : '').join(' ') + ' ' + (className ? className : '');

    const [text,setText] = useState('');
    const [elementsVisibility,setElementsVisibility] = useState(true);
    const [divDisplay,setDivDisplay] = useState(true);
    const [divPosition,setDivPosition] = useState(true);

    const handleChange = (event) => {
      setText(event.target.value)
    };

    const [showFocusElement,setShowFocusElement] = useState(false);

    const toggleLabel = () => {
            setShowFocusElement(!showFocusElement);
    };

    const focusStyle = {
        display: showFocusElement ? 'block' : 'none',
        visibility: elementsVisibility ? 'visible' : 'hidden'
    };

    const divStyle = {
        display: divDisplay ? 'flex' : 'block',
        position: divPosition ? 'relative' : 'relative'
    }

    const changeStyleState = (event) =>
    {
        if(event.target.value !== '')
        {
            setElementsVisibility(!elementsVisibility)  
        }else{
            setDivDisplay(!divDisplay)
            setDivPosition(!divPosition)
            toggleLabel();
        }
    }

    const clearButton = () => {
        setText('')
        setElementsVisibility(!elementsVisibility)  
        setDivDisplay(!divDisplay)
        setDivPosition(!divPosition)
        toggleLabel();
    }

    return (
        <div className = {InputStyles['container']} style = {divStyle} >
            { label && <label className = {InputStyles['label']} style={focusStyle} > { label } </label>}
            <input className = {`${inputClass} ${InputStyles['input']}`} placeholder = {placeholder} value = {text} onChange = {handleChange} onFocus = {changeStyleState} onBlur = {changeStyleState}/>
            <button onClick={clearButton} className = {InputStyles['clearButton']}  style = {focusStyle}/>
        </div>
    );
}

export default InputDekstop;