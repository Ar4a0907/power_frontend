import React, { useState } from 'react';
import tableStyles from './tableStyle.module.scss';
import InputSearch from '../inputSearch/inputSearch';
import Button from '../button/button';
import CheckBox from '../checkBox/checkBox';
import { ReactComponent as Options } from './options.svg';
import Badge from '../Badge/badge';
import RadioButton from '../radioButton/radioButton';
import Collapse from '../collapse/collapse';

const Table = ({ search, filter, payDues, options, data, fields}) => {

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

    let rows = [];

    for (let dataIndex = 0; dataIndex < data.length; dataIndex++) {
        let row = [];
        row.push(<div><CheckBox /></div>)
        row.push(<Collapse label='' content={<div>lorem ipsum kitchen go to far away</div>}/>);
        for (let fieldsIndex = 0; fieldsIndex < fields.length; fieldsIndex++) {
            let currentField = data[dataIndex][fields[fieldsIndex].name]
            row.push(<div key={fieldsIndex} >
                {fields[fieldsIndex].type === 'badge' ?
                    <Badge label={currentField}
                        {...(currentField === 'Paid' ? { success: true } : undefined)}
                        {...(currentField === 'Overdue' ? { error: true } : undefined)}
                        {...(currentField === 'Unpaid' ? { warning: true } : undefined)}
                        {...(currentField === 'Inactive' ? { disabled: true } : undefined)} />
                    : currentField}
            </div>);
        }
        row.push(options ? <div className={tableStyles.options}>
            <Options className={tableStyles.optionsIcon} onClick={() => handleOptionsClick(dataIndex)}></Options>
            <span className={tableStyles.optionsContent + ' ' + (optionsOpen === dataIndex ? tableStyles.optionsOpened : tableStyles.optionsClosed)}>
                {options.map((e, idx) => {
                    return <div key={idx} onClick={e.onClick}> {e.label} </div>
                })}
            </span> </div> : '')
        rows.push(row);
    }


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
                {search ? < InputSearch small className={tableStyles.search} placeholder={search} /> : ''}
                {payDues ? <Button className={tableStyles.payDues}><div>pay dues</div></Button> : ''}
            </div>
            <div className={tableStyles.tableTopic}>
                <div><CheckBox /> </div>
                {fields.map((element, idx) =>
                    <div key={idx}>{element.label}</div>
                )}
                {options ? <div className={tableStyles.options}>
                    <Options className={tableStyles.optionsIcon} onClick={() => handleOptionsClick(-1)}></Options>
                    <span className={tableStyles.optionsContent + ' ' + (optionsOpen === -1 ? tableStyles.optionsOpened : tableStyles.optionsClosed)}>
                        {options.map((e, idx) => {
                            return <div key={idx} onClick={e.onClick}> {e.label} </div>
                        })}
                    </span> </div> : ''}
            </div>
            <div className={tableStyles.rows}>
                {rows.map((e, idx) => { return <div className={tableStyles.row} key={idx}>{e}</div> })}
            </div>
        </div>
    )
}

export default Table;
