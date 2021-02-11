import React from 'react'
import inputSearchStyle from './inputSearchStyle.module.scss'


const inputSearch = ({type,className,...classes}) => {

    const inputSearchClass = Object.entries(classes).map(([key]) => 
    inputSearchStyle[key] !== undefined ? inputSearchStyle[key] : '').join(' ') + ' ' + (className ? className : '');

    return (
        <div className = { `${inputSearchClass} ${inputSearchStyle['container']}` } >
            <input type = "text" placeholder = 'Search for anything' className = {inputSearchStyle['search']} />
            <button onClick={ () => {console.log('text clear')}} />
        </div>
       );
    }
    
    export default inputSearch;
