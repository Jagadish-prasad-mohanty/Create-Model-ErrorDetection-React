import React from 'react';
import classes from './List.module.css';
import ListElement from './ListElement';

function List(props) {
    const getIdHandler=id=>{
        props.getId(id)
    }
    
    const totalList=props.list.length?props.list.map(elem=><ListElement getId={getIdHandler} key={elem.id}  id={elem.id} name={elem.mname} age={elem.mage}/>):null;
    return (
        <div className={classes.List}>
            {totalList}
        </div>
    )
}

export default List
