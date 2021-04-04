import React, { useState } from 'react';
import paginatorStyle from './PaginatorStyle.module.scss';

export const Paginator = ({total,selected,onChange}) => {

    const itemsPerPage = 20;
    const lastPage = Math.ceil(total/itemsPerPage);
    const lastItemsRange = total%itemsPerPage;

    let [activePage,setActivePage] = useState(selected);

    const pageChange = (type) => {
        if (type) {
            setActivePage(--activePage);
            onChange(activePage);
        } else {
            setActivePage(++activePage);
            onChange(activePage);
        }
    };

    const prev = <button className={paginatorStyle.prevPageButton} onClick={() => {activePage > 1 ? pageChange(true) : console.log('minimal value cant decrement')}} />;
    const next = <button className={paginatorStyle.nextPageButton} onClick={() => {activePage < lastPage ? pageChange(false) : console.log('maximal value cant increment')}} />;
    let rowsStart = (activePage - 1) * itemsPerPage + 1;
    let rowsEnd = activePage === lastPage ? rowsStart - 1 + lastItemsRange : activePage * itemsPerPage;

    return (
        <span className={paginatorStyle.paginatorContainer}>
           <span className={paginatorStyle.pageStatus}> {rowsStart}-{rowsEnd} of {total} </span>{prev} {next}
        </span>
    );
}