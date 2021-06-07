import React from 'react'
import Card from './Card';
import classes from './ListElement.module.css'

function ListElement(props) {
    const throwId= (e)=>{
        e.preventDefault();
        props.getId(props.id);
    }
    
    return (
        <Card>
            <div onClick={throwId}  className={classes.ListElement}>
                <h5>Name is {props.name} and Age is {props.age}</h5>
            </div>
        </Card>
    )
}

export default ListElement
