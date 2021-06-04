import React from 'react'
import Card from './Card';
import classes from './ListElement.module.css'

function ListElement(props) {
    return (
        <Card>
            <div className={classes.ListElement}>
                <h5>Name is {props.name} and Age is {props.age}</h5>
            </div>
        </Card>
    )
}

export default ListElement
