import React, { useState } from 'react';
import tableStyles from './tableStyle.module.scss';
import InputSearch from '../inputSearch/inputSearch';
import Button from '../button/button';
import CheckBox from '../checkBox/checkBox';
import { ReactComponent as Options } from './options.svg';

const Table = ({search,filter,payDues,options}) => {

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
                <span><CheckBox /> </span>
                <span>NAME</span>
                <span>USER STATUS</span>
                <span>PAYMENT STATUS</span>
                <span>AMOUNT</span>
                {options ? <element className={tableStyles.options}>
                    <Options  className={tableStyles.optionsIcon} onClick={handleOptionsClick}></Options>
                    <div className={tableStyles.optionsContent + ' ' + (optionsOpen ? tableStyles.optionsOpened : tableStyles.optionsClosed)}>
                        <div>o Hey</div>
                    </div> </element>: ''}
            </div>
        </div>
    )
}

export default Table;