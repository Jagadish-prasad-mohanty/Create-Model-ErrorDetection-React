import React from 'react';
import classes from './List.module.css';
import ListElement from './ListElement';

function List(props) {
    const totalList=props.list.map(elem=><ListElement key={Math.random()} name={elem.mname} age={elem.mage}/>)
    return (
        <div className={classes.List}>
            {totalList}
        </div>
    )
}

export default List
