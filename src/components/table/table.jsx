import React, { useState } from 'react';
import tableStyles from './tableStyle.module.scss';
import InputSearch from '../inputSearch/inputSearch';
import Button from '../button/button';
import CheckBox from '../checkBox/checkBox';
import { ReactComponent as Options } from './options.svg';
import Badge from '../Badge/badge';
import RadioButton from '../radioButton/radioButton';
import Icon from '../icons/icons';

const Table = ({ search, filter, payDues, options, placeholder, data, fields,expand }) => {

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
        for (let index = 0; index < obj.length; index++) {
            result.push(obj[index]);
        }
        return splitExpandData(result);
    };

    const splitExpandData = (arr) => {
        let splitedExpand = [];
            splitedExpand.push(<table>
                <tr className={tableStyles.colapseTopic}>
                    <td className={tableStyles.expandLabel + ' ' + tableStyles.itemA}>{expand[0].label}</td>
                    <td className={tableStyles.expandLabel + ' ' + tableStyles.itemB}>{expand[1].label}</td>
                    <td className={tableStyles.expandLabel + ' ' + tableStyles.itemC}>{expand[2].label}</td>
                </tr>
                </table>
            );

        for (let index = 0; index < arr.length; index++) {
            splitedExpand.push(<table>
                <tr>
                    <td className={tableStyles.itemA}>{arr[index][expand[0].name]}</td>
                    <td className={tableStyles.itemB}>{arr[index][expand[1].name]}</td>
                    <td className={tableStyles.itemC}>{arr[index][expand[2].name]}</td>
                </tr>
            </table>);
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
            let currentField = data[dataIndex].dataFields[fields[fieldsIndex].name];
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
            </span> </div> : '');

        rows.push(<div key={dataIndex} className={tableStyles.row + ' ' + (collapseOpen === dataIndex ? tableStyles.expandedRow : '') } >{fieldrRow}</div>);
        rows.push(<div className={tableStyles.tableCollapse + ' ' + (collapseOpen === dataIndex ? tableStyles.collapseOpened : tableStyles.collapseClosed)}>
            {expandRow(data[dataIndex].expand)}

        </div>);
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
