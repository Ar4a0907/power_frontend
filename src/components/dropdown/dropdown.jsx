import React, {useState} from 'react';
import dropdownStyle from './dropdownStyles.module.scss';
import { useHistory } from 'react-router-dom';
import Icon from "../icons/icons";

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
        if(dropdownClass === ' ') {
            setShown(!shown)
        }
    }

    const dropdownClass = Object.entries(classes).map(([key, value]) =>
        dropdownStyle[key] !== undefined ? dropdownStyle[key] : '').join(' ') + ' ' + (className ? className : '')

    return (
        <div className={dropdownClass + ' ' + dropdownStyle.customSelect} onClick={handleClick}>
            <div className={dropdownStyle.label}><span>{label}</span></div>
            {dropdownClass !== ' ' ?
                <Icon type='disabled' className={dropdownStyle.disabledIcon}/> :
                shown ?
                <Icon type='upArrow' className={dropdownStyle.arrow}/> :
                <Icon type='downArrow' className={dropdownStyle.arrow}/>
            }

            <div className={dropdownStyle.firstSelect}><span>{value}</span></div>
            {shown ?
                items.map( (element, idx) =>
                    <div className={dropdownStyle.select}>
                        <span key={idx} value={idx} onClick={() => handleChange(idx)}>{element.label}</span>
                    </div>
                ) : null
            }
        </div>
    )
}

export default Dropdown;