import React, { useState } from 'react';
import dropdownStyle from './dropdownStyles.module.scss';
import { useHistory } from 'react-router-dom';
import Icon from '../icons/icons';

const Dropdown = ({label, items, className, ...classes}) => {

    const history = useHistory();

    const [value, setValue] = useState('Select this');

    const [shown, setShown] = useState(false);

    const handleChange = idx => {
        setValue(items[idx].label)
        if (items[idx].link) {
            history.push(`${items[idx].link}`);
        } else {
            items[idx].onClick();
        };
    };

    const handleClick = () => {
        if(dropdownClass === ' ') {
            setShown(!shown);
        };
    };

    const dropdownClass = Object.entries(classes).map(([key, value]) =>
        dropdownStyle[key] !== undefined ? dropdownStyle[key] : '').join(' ') + ' ' + (className ? className : '');

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
            <div className={shown ? dropdownStyle.selectContainer : dropdownStyle.selectNotOpen}>
                {shown ?
                    items.map( (element, idx) =>
                        <div className={dropdownStyle.select} key={idx} value={idx} onClick={() => handleChange(idx)}>
                            <span>{element.label}</span>
                        </div>
                    ) : null
                }
            </div>
        </div>
    );
};

export default Dropdown;