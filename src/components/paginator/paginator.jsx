import React, { useState } from 'react'

const Paginator = ({total,selected,onChange}) => {

    const itemsPerPage = 20;
    const lastPage = Math.ceil(total/itemsPerPage);
    const lastItemsRange = total%itemsPerPage;

    let [activePage,setActivePage] = useState(selected);

    const pageChange = (type) => {
        if(type) {
            setActivePage(--activePage);
            onChange(activePage);
        }else {
            setActivePage(++activePage);
            onChange(activePage);
        }
    }

    const minus = <element onClick={ () => {activePage > 1 ? pageChange(true) : console.log('minimal value')}}  >minus</element>;
    const plus = <element onClick={ () => {activePage < lastPage ? pageChange(false) : console.log('maximal value')}}>plus</element>;
    let rowsStart = (activePage-1)*itemsPerPage+1;
    let rowsEnd = activePage === lastPage ? rowsStart-1+lastItemsRange : activePage*itemsPerPage;

    return (
        <span>
           <span> {rowsStart} - {rowsEnd} of {total} </span> {minus} {plus}
        </span>
    );
}

export default Paginator;