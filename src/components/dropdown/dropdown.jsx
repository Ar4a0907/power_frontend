import React, {useState} from 'react';
import dropdownStyle from './dropdownStyles.module.scss';
import { useHistory } from 'react-router-dom';

const Dropdown = ({label, items, className, ...classes}) => {

    const history = useHistory();

    const defaultChoose = 'Select this'

    const [value, setValue] = useState(defaultChoose)

    const [shown, setShown] = useState(false)

    const handleChange = idx => {
        setValue(items[idx].label)
        if (items[idx].link) {
            history.push(`${items[idx].link}`)
        }
        if (items[idx].onClick) {
            items[idx].onClick()
        }
    }

    const handleClick = () => {
        setShown(!shown)
    }

    const dropdownClass = Object.entries(classes).map(([key, value]) =>
        dropdownStyle[key] !== undefined ? dropdownStyle[key] : '').join(' ') + ' ' + (className ? className : '')

    return (
        <div className={dropdownClass + ' ' + dropdownStyle.customSelect} onClick={handleClick}>
            <div className={dropdownStyle.label}><span>{label}</span></div>
            <div><span>{value}</span></div>
            {shown ?
                items.map( (element, idx) =>
                    <div>
                        <span key={idx} value={idx} onClick={() => handleChange(idx)}>{element.label}</span>
                    </div>
                ) : null
            }
        </div>
    )
}

export default Dropdown;