import React, { useState } from 'react'
import Card from './Card';
import classes from './MyForm.module.css';

function MyForm(props) {
    const [name,changeName]=useState("");
    const [age,changeAge]=useState("");
    const [list,changeList]=useState([]);

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
        changeList(prevState=>{
            return prevState.concat({mname:name,mage:age})
        })
        console.log("[MyForm.js]...",list);
        props.getList(list)
        changeName("");
        changeAge("");
    }
    return (
        <Card>

            <form onSubmit={onSubmitHandler} className={classes.MyForm}>
                <div className={classes.MyFormControl}>

                    <label>Enter Your Name:</label>
                    <input onChange={(e)=>onChangeHandler(e,"name")} value={name}/>
                    <label>Enter Your Age:</label>
                    <input onChange={(e)=>onChangeHandler(e,"age")} value={age}/>
                </div>
                <button type="submit"> Submit</button>
            </form>
        </Card>
    )
}

export default MyForm
