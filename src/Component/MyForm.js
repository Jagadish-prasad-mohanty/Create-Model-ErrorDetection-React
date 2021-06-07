import React, { useState } from 'react'
import ErrorModel from '../ErrorModel/ErrorModel';
import Button from '../UI/Button';
import Card from './Card';
import classes from './MyForm.module.css';

function MyForm(props) {
    const [name,changeName]=useState("");
    const [age,changeAge]=useState("");
    const [modelToggle,changeModelClose]=useState(false);

    const onChangeHandler=(e,field)=>{
        e.preventDefault();
        if (field==="name"){
            changeName(e.target.value)
        }
        else if(field==="age"){
            changeAge(e.target.value)
        }
    }
    let error=null;
    const onSubmitHandler= (e)=>{
        e.preventDefault();
        if (name.trim()===0||age.trim()===0){
            error=<ErrorModel title="Input Error" message="Name or age should not be blank!!"/>
            return;
        }
        props.getList({mname:name,mage:age});
        changeName("");
        changeAge("");
    }

    const errorModelToggle=()=>{

    }

    return (
        <>
        {<ErrorModel onClick={errorModelToggle} title="Input Error" message="Name or age should not be blank!!"/>}
        <Card>

            <form onSubmit={onSubmitHandler} className={classes.MyForm}>
                <div className={classes.MyFormControl}>

                    <label>Enter Your Name:</label>
                    <input onChange={(e)=>onChangeHandler(e,"name")} value={name}/>
                    <label>Enter Your Age:</label>
                    <input onChange={(e)=>onChangeHandler(e,"age")} value={age}/>
                </div>
                <Button type="submit"> Submit</Button>
            </form>
        </Card>

        
        </>
    )
}

export default MyForm
