import React, { useState } from 'react'
import ErrorModel from '../ErrorModel/ErrorModel';
import Button from '../UI/Button';
import Card from './Card';
import classes from './MyForm.module.css';

function MyForm(props) {
    const [name,changeName]=useState("");
    const [age,changeAge]=useState("");
    const [modelToggle,changeModelToggle]=useState(false);
    const [error,setError]=useState({});

    const onChangeHandler=(e,field)=>{
        e.preventDefault();
        if (field==="name"){
            changeName(e.target.value)
        }
        else if(field==="age"){
            changeAge(e.target.value)
        }
    }
    const onSubmitHandler= (e)=>{
        e.preventDefault();
        if (name.trim().length===0 || age.trim().length===0){
            setError({
                title:"Invalid Input",
                message:"Name and Age should't be blank"
            })
            changeModelToggle(prevState=>{
                return !prevState
            })
            return
        }
        if (+age<1){
            setError({
                title:"Invalid Age",
                message:"Age can't be <1"
            })
            changeModelToggle(prevState=>{
                return !prevState
            })
            return
        }
        props.getList({mname:name,mage:age});
        changeName("");
        changeAge("");
    }

    const closeModelHandler=()=>{
        changeModelToggle(prevState=>{
            return !prevState
        })
    }

    return (
        <>
        {modelToggle?<ErrorModel modelClose={closeModelHandler} title={error.title} message={error.message}/>:null}
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
