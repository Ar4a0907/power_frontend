import React, {useState} from 'react';
import dropdownStyle from './dropdownStyles.module.scss';


const Dropdown = ({label, items, className, ...classes}) => {

    const defaultChoose = 'Select this'

    const [value, setValue] = useState(defaultChoose)

    const handleChange = (evt) => {
        setValue(evt.target.value)
    }

    const dropdownClass = Object.entries(classes).map(([key, value]) =>
        dropdownStyle[key] !== undefined ? dropdownStyle[key] : '').join(' ') + ' ' + (className ? className : '')

    return (
        <div>
            <label>{label}</label>
            <select defaultValue={defaultChoose} onChange={handleChange}>
                <option hidden>{value}</option>
                {
                    items.map( (element, idx) =>
                        <option value={element.label} key={idx}>{element.label}</option>
                    )}
            </select>
        </div>
    )
}

export default Dropdown;