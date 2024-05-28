import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [todolist,settodolist]=useState([])

  let saveToDoList=(event)=>{

  

  let toname=event.target.toname.value;
  if (!todolist.includes(toname)){
    let finalDolist=[...todolist,toname]
    settodolist(finalDolist)

  }
  else{
    alert("already exists")
  }
  
  event.preventDefault();
  }

  let list=todolist.map((value,index)=>{


    return(
      <ToDoListItems value={value} key={index} indexNumber={index} todolist={todolist} settodolist={settodolist} />
    )
  })
  return (
    <div className="App">
      <h1>ToDo list</h1>
      <form onSubmit={saveToDoList}>

        <input type="text"  name='toname'/> <button>save</button>
      </form>
      <div className="outerDive">
      <ul>
      {list}
      </ul>
      </div>

      

    </div>
  );
}

export default App;
function ToDoListItems({value,indexNumber, todolist, settodolist}){
  let deleteRow=()=>{
    
    let finalData=todolist.filter((v,i)=>i!=indexNumber)
    settodolist(finalData)


  }
  return(
<li>{value} <span onClick={deleteRow}>&times;</span></li>
  )
}