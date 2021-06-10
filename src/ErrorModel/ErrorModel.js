import React from 'react'
import ReactDOM from 'react-dom';
import Card from '../Component/Card'
import Button from '../UI/Button';
import classes from './ErrorModel.module.css';

const Backdrop =props=>{
    const closeModel=()=>{
        props.modelClose();
    }
    return <div onClick={closeModel} className={classes.backdrop}/>
}

const Model = props=>{
    const closeModel=()=>{
        props.modelClose();
    }
    return <Card className={classes.Model}>
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
}

function ErrorModel(props) {
    
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick} modelClose={props.modelClose}/>,document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<Model title={props.title} message={props.message} modelClose={props.modelClose} onClick={props.onClick}/>,document.getElementById('model-root'))}
        
        </>
        
    )
}

export default ErrorModel
