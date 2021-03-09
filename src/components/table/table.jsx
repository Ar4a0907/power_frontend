import React, { useState } from 'react';
import tableStyles from './tableStyle.module.scss';
import InputSearch from '../inputSearch/inputSearch';
import Button from '../button/button';

const Table = (props) => {

    const [filterOpen, setFilterOpen] = useState(false);

    const handleFilterClick = () => {
      setFilterOpen(!filterOpen);
    };

    return (
        <div className={tableStyles.tableContainer}>
            <div className={tableStyles.tableHeader}>
                <Button className={tableStyles.filter + ' ' + (filterOpen ? tableStyles.filterButtonClicked : null)} onClick={handleFilterClick}>
                    <div>Filter</div>
                </Button>
                <div className={tableStyles.filterContent + ' ' + (filterOpen ? tableStyles.filterOpen : tableStyles.filterClose)}>
                    <div>We will add filter later :)</div>
                </div>
                <InputSearch small className={tableStyles.search}/>
                <Button className={tableStyles.payDues}><div>pay dues</div></Button>
            </div>
        </div>
    )
}

export default Table;