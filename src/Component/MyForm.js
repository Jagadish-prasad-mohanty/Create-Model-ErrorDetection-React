import React, { useState,useRef } from 'react';
import ErrorModel from '../ErrorModel/ErrorModel';
import Button from '../UI/Button';
import Card from './Card';
import classes from './MyForm.module.css';

function MyForm(props) {
    const nameRef=useRef();
    const ageRef=useRef();

    // const [name,changeName]=useState("");
    // const [age,changeAge]=useState("");
    const [modelToggle,changeModelToggle]=useState(false);
    const [error,setError]=useState({});

    // const onChangeHandler=(e,field)=>{
    //     e.preventDefault();
    //     if (field==="name"){
    //         changeName(e.target.value)
    //     }
    //     else if(field==="age"){
    //         changeAge(e.target.value)
    //     }
    // }
    const onSubmitHandler= (e)=>{
        e.preventDefault();
        nameRef.current.focus();
        console.log(nameRef.current.value);
        const nameEntered=nameRef.current.value;
        const ageEntered=ageRef.current.value;
        if (nameEntered.trim().length===0 || ageEntered.trim().length===0){
            setError({
                title:"Invalid Input",
                message:"Name and Age should't be blank"
            })
            changeModelToggle(prevState=>{
                return !prevState
            })
            return
        }
        if (+ageEntered<1){
            setError({
                title:"Invalid Age",
                message:"Age can't be <1"
            })
            changeModelToggle(prevState=>{
                return !prevState;
            })
            return;
        }
        props.getList({mname:nameEntered,mage:ageEntered});
        nameRef.current.value="";
        ageRef.current.value="";
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
                    <input 
                    // onChange={(e)=>onChangeHandler(e,"name")} 
                    // value={name}
                    ref={nameRef}
                    />
                    <label>Enter Your Age:</label>
                    <input 
                    // onChange={(e)=>onChangeHandler(e,"age")} 
                    // value={age}
                    ref={ageRef}
                    />
                </div>
                <Button type="submit"> Submit</Button>
            </form>
        </Card>

        
        </>
    )
}

export default MyForm
