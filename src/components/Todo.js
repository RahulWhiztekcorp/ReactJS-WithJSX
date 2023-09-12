import React, { useState } from 'react'

const Todo = () => {
    let [input,setInput]=useState();
    let [todolist,setTodo]=useState([
        {
            id:1,
            task:'Learn React'
        },{
            id:2,
            task:'Learn Angular'
        }
    ])
    let nextId=3;
    function addNewTodo(){
        if(input===""){
            alert("Add some task")
        }else{
            let newTodo =[...todolist,{
                                        id:nextId++,
                                        task:input
                                    }
                                ]
            setTodo(newTodo);
            setInput("");
        }
    }
    function deleteToDO(id){
        // alert(id);
        let updatedTodo = todolist.filter((todo)=>{
                              return todo.id!=id      
                         })
            //console.log(updatedTodo);
            setTodo(updatedTodo)
    }
  return (
    <div>
        <h1>Todo App using React</h1>
        <div className='d-flex my-2 imput-group'>
            <input type='text' className='form-control' onChange={(e)=>{
                let task = e.target.value
                setInput(task)
            }}/>
            <button onClick={()=>{
                addNewTodo()
            }} className='btn btn-primary px-4 mx-2'>Add</button>
        </div>
        <ul className='list-group'>
            {
                todolist.map((res)=>{
                    return(
                    <li className=' d-flex justify-content-between list-group-item'>
                        <center><p>{res.task}</p></center>
                        <button className='btn btn-white text-danger px-2' onClick={()=>{deleteToDO(res.id)}}><b>X</b></button>
                     </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Todo;