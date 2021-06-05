import { useState } from 'react';
import classes from './App.module.css';
import List from './Component/List';
import MyForm from './Component/MyForm';


function App() {
  const [list,changeList]=useState([])

  const getListHandler=(li)=>{
    changeList(prevState=>{
      return prevState.concat(li)
    })
    console.log(li); 
  }
  return (
    <div className={classes.App}>
      <MyForm getList={getListHandler}/>
      <List list={list}/>
    </div>
  );
}

export default App;
