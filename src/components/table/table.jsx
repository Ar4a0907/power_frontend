import React, { useState } from 'react';
import tableStyles from './tableStyle.module.scss';
import InputSearch from '../inputSearch/inputSearch';
import Button from '../button/button';
import CheckBox from '../checkBox/checkBox';
import { ReactComponent as Options } from './options.svg';
import Icon from '../icons/icons';
import Badge from '../Badge/badge';

const Table = ({search, filter, payDues, options, data, fields}) => {

    const [filterOpen, setFilterOpen] = useState(false);
    const [optionsOpen, setOptionsOpen] = useState(false);

    const handleFilterClick = () => {
      setFilterOpen(!filterOpen);
    };
    const handleOptionsClick = () => {
        setOptionsOpen(!optionsOpen);
    };

    return (
        <div className={tableStyles.tableContainer}>
            <div className={tableStyles.tableHeader}>
                {filter ? <Button className={tableStyles.filter + ' ' + (filterOpen ? tableStyles.filterButtonClicked : null)} onClick={handleFilterClick}>
                    <div>Filter</div>
                </Button> : ''}
                <div className={tableStyles.filterContent + ' ' + (filterOpen ? tableStyles.filterOpen : tableStyles.filterClose)}>
                    <div>We will add filter later :)</div>
                </div>
                {search ? < InputSearch small className={tableStyles.search} placeholder={search}/> : ''}
                {payDues ? <Button className={tableStyles.payDues}><div>pay dues</div></Button> : ''}
            </div>
            <div className={tableStyles.tableTopic}>
                <div><CheckBox /> </div>
                {fields.map((element, idx) =>
                    <div key={idx}>{element.label}</div>
                )}
                {options ? <element className={tableStyles.options}>
                    <Options  className={tableStyles.optionsIcon} onClick={handleOptionsClick}></Options>
                    <div className={tableStyles.optionsContent + ' ' + (optionsOpen ? tableStyles.optionsOpened : tableStyles.optionsClosed)}>
                        {options.map((e, idx) => {
                          return  <div key={idx} onClick={e.onClick}> {e.label} </div>
                        })}
                    </div> </element>: ''}
            </div>
            <div className={tableStyles.rows}>
                {data.map((number, idx) =>
                    <div className={tableStyles.row} key={idx}>
                        <div>
                            <CheckBox className={tableStyles.rowCheckBox}/>

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
                        <element className={tableStyles.options}>
                            <Options  className={tableStyles.optionsIcon} onClick={handleOptionsClick}></Options>
                            <div className={tableStyles.optionsContent + ' ' + (optionsOpen ? tableStyles.optionsOpened : tableStyles.optionsClosed)}>
                                {options.map((e, idx) => {
                                    return  <div key={idx} onClick={e.onClick}> {e.label} </div>
                                })}
                            </div>
                        </element>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Table;