import React, { useState } from 'react';
import tableStyles from './tableStyle.module.scss';
import InputSearch from '../inputSearch/inputSearch';
import Button from '../button/button';
import CheckBox from '../checkBox/checkBox';
import { ReactComponent as Options } from './options.svg';
// import Icon from '../icons/icons';
import Badge from '../Badge/badge';
import RadioButton from '../radioButton/radioButton';

const Table = ({search, filter, payDues, options, data, fields}) => {

    const [filterOpen, setFilterOpen] = useState(false);
    const [optionsOpen, setOptionsOpen] = useState(null);

    const handleFilterClick = () => {
      setFilterOpen(!filterOpen);
    };
    const handleOptionsClick = (index) => {
        if (index === optionsOpen) {
            setOptionsOpen(null);
        } else {
            setOptionsOpen(index);
        }

    };

    return (
        <div className={tableStyles.tableContainer}>
            <div className={tableStyles.tableHeader}>
                {filter ? <Button className={tableStyles.filter + ' ' + (filterOpen ? tableStyles.filterButtonClicked : null)} onClick={handleFilterClick}>
                    <div>Filter</div>
                </Button> : ''}
                <div className={tableStyles.filterContent + ' ' + (filterOpen ? tableStyles.filterOpen : tableStyles.filterClose)}>
                    <div className={tableStyles.filterSortBy}>
                        <span>Sort By:</span>
                        <RadioButton checked={0} items={['Default', 'First Name', 'Last Name', 'Due Date', 'Last Login']} onChange={(value) => console.log(value)} />
                    </div>
                    <div className={tableStyles.filterUsers}>
                        <span>Users:</span>
                        <RadioButton checked={0} items={['All', 'Active', 'Inactive']} />
                    </div>
                </div>
                {search ? < InputSearch small className={tableStyles.search} placeholder={search}/> : ''}
                {payDues ? <Button className={tableStyles.payDues}><div>pay dues</div></Button> : ''}
            </div>
            <div className={tableStyles.tableTopic}>
                <div><CheckBox /> </div>
                {fields.map((element, idx) =>
                    <div key={idx}>{element.label}</div>
                )}
                {options ? <div className={tableStyles.options}>
                    <Options  className={tableStyles.optionsIcon} onClick={() => handleOptionsClick(-1)}></Options>
                    <span className={tableStyles.optionsContent + ' ' + (optionsOpen === -1 ? tableStyles.optionsOpened : tableStyles.optionsClosed)}>
                        {options.map((e, idx) => {
                          return  <div key={idx} onClick={e.onClick}> {e.label} </div>
                        })}
                    </span> </div>: ''}
            </div>
            <div className={tableStyles.rows}>
                {data.map((number, idx) =>
                    <div className={tableStyles.row} key={idx}>
                        <div>
                            <CheckBox/>

                        </div>
                        {Object.values(number).map((element, idx) =>
                            <div key={idx}>{fields[idx].type === 'badge' ?
                                <Badge
                                    {...(element === 'Paid' ? {success: true} : undefined)}
                                    {...(element === 'Overdue' ? {error: true} : undefined)}
                                    {...(element === 'Unpaid' ? {warning: true} : undefined)}
                                    {...(element === 'Inactive' ? {disabled: true} : undefined)}
                                    label={element}
                                />
                                : element}</div>
                        )}
                        {options ? <div className={tableStyles.options}>
                            <Options  className={tableStyles.optionsIcon} onClick={() => handleOptionsClick(idx)}></Options>
                            <span className={tableStyles.optionsContent + ' ' + (optionsOpen === idx ? tableStyles.optionsOpened : tableStyles.optionsClosed)}>
                        {options.map((e, idx) => {
                            return  <div key={idx} onClick={e.onClick}> {e.label} </div>
                        })}
                    </span> </div>: ''}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Table;