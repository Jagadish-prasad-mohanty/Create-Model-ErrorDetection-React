import React from 'react'
import Card from '../Component/Card'
import Button from '../UI/Button';
import classes from './ErrorModel.module.css';

function ErrorModel(props) {
    const closeModel=()=>{
        props.modelClose();
    }
    return (
        <div >
        <div onClick={closeModel} className={classes.backdrop}/>
        <Card className={classes.Model}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.footer}>
                    <Button onClick={closeModel}>Okey</Button>
                </footer>
            </Card>
        </div>
        
    )
}

export default ErrorModel
