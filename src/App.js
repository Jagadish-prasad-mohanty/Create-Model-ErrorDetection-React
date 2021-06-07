import { useState } from 'react';
import classes from './App.module.css';
import List from './Component/List';
import MyForm from './Component/MyForm';

let count=0;

function App() {
  const [list,changeList]=useState([]);
  const getListHandler=(li)=>{
    changeList(prevState=>{
      return [...prevState,{
        ...li,
        id:count++
      }]
    })
    console.log(li); 
  }
  const deleteId=(id)=>{
      changeList(prevState=>{
          return prevState.filter(item=>item.id!==id);
      })

  }
  return (
    <div className={classes.App}>
      <MyForm getList={getListHandler}/>
      <List list={list} getId={deleteId}/>
      
    </div>
  );
}

export default App;
