import React, { useState } from 'react';
import tableStyles from './tableStyle.module.scss';
import InputSearch from '../inputSearch/inputSearch';
import Button from '../button/button';
import CheckBox from '../checkBox/checkBox';
import { ReactComponent as Options } from './options.svg';
import Badge from '../Badge/badge';
import RadioButton from '../radioButton/radioButton';
import Icon from '../icons/icons';

const Table = ({ search, filter, payDues, options, placeholder, data, fields }) => {

    const [filterOpen, setFilterOpen] = useState(false);
    const [optionsOpen, setOptionsOpen] = useState(null);
    const [collapseOpen, setCollaspeOpen] = useState(null);

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

    const handleCollapseClick = (index) => {
        if (index === collapseOpen) {
            setCollaspeOpen(null);
        } else {
            setCollaspeOpen(index);
        }
    };

    const expandRow = (obj) => {
        let result = [];
        let check = fields.map(e => e.name);
        for (var i in obj) {
            if (check.some((element) => { return element === i })) { } else { result.push(<td>{obj[i]}</td>) }
        }
        return splitExpandData(result);
    };

    const splitExpandData = (arr) => {
        let splitedExpand = [];
        for (let index = 0; index < arr.length; index += 3) {
            splitedExpand.push(<table>
                <tr>
                    {arr[index] ? arr[index] : ''}
                    {arr[index + 1] ? arr[index + 1] : ''}
                    {arr[index + 2] ? arr[index + 2] : ''}
                </tr>
            </table>)
        }
        return splitedExpand;
    };

    let rows = [];

    for (let dataIndex = 0; dataIndex < data.length; dataIndex++) {
        let fieldrRow = [];
        fieldrRow.push(<div className={tableStyles.tableFirstBlock} >
            <div><CheckBox />
                <div onClick={() => handleCollapseClick(dataIndex)}>
                    <Icon className={tableStyles.arrowIcon + ' ' + (collapseOpen === dataIndex ? tableStyles.arrowOpened : tableStyles.arrowClosed)} type='upArrow' />
                </div>
            </div>
        </div>);

        for (let fieldsIndex = 0; fieldsIndex < fields.length; fieldsIndex++) {
            let currentField = data[dataIndex][fields[fieldsIndex].name];
            fieldrRow.push(<div className={tableStyles.tableFirstBlock} key={fieldsIndex} >
                {fields[fieldsIndex].type === 'badge' ?
                    <Badge label={currentField}
                        {...(currentField === 'Paid' ? { success: true } : undefined)}
                        {...(currentField === 'Overdue' ? { error: true } : undefined)}
                        {...(currentField === 'Unpaid' ? { warning: true } : undefined)}
                        {...(currentField === 'Inactive' ? { disabled: true } : undefined)} />
                    : currentField}
            </div>);
        }

        fieldrRow.push(options ? <div className={tableStyles.options}>
            <Options className={tableStyles.optionsIcon} onClick={() => handleOptionsClick(dataIndex)}></Options>
            <span className={tableStyles.optionsContent + ' ' + (optionsOpen === dataIndex ? tableStyles.optionsOpened : tableStyles.optionsClosed)}>
                {options.map((e, idx) => {
                    return <div key={idx} onClick={e.onClick}> {e.label} </div>
                })}
            </span> </div> : '')

        rows.push(<div className={tableStyles.row} key={dataIndex}>{fieldrRow}</div>);
        rows.push(<div className={tableStyles.tableCollapse + ' ' + (collapseOpen === dataIndex ? tableStyles.collapseOpened : tableStyles.collapseClosed)}>
            {expandRow(data[dataIndex])}
        </div>)
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
                    <div>
                        <span>Users:</span>
                        <RadioButton checked={0} items={['All', 'Active', 'Inactive']} />
                    </div>
                </div>
                {search ? < InputSearch small className={tableStyles.search} placeholder={placeholder ? placeholder : 'Search for anything'} /> : ''}
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
                {rows}
            </div>
        </div>
    )
}

export default Table;
