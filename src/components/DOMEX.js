import React, { useState } from 'react'

const DOMEX = () => {
    const [count,setCount]=useState(0);
    function incrementCount(){
        setCount(count+1);
    }
    function decrementCount(){
        setCount(count-1);
    }
    let items =[1,2,3,4,5,6,7,8,9,10]
  return (
    <div>
        <h1>Count : {count}</h1>
        <button className='btn btn-primary mx-1' onClick={incrementCount}>Increment</button>
        <button className='btn btn-danger mx-1' onClick={decrementCount}>Decrement</button>
        <ul>
            {
                items.map((item)=>
                    <li>item {item}</li>
                )
            }
        </ul>
    </div>
  )
}

export default DOMEX;