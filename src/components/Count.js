import React,{useState} from 'react'

const Count = () => {
    let [counter,setCounter]=useState(0);
    let stock = 10;
    if(counter>=stock){
        alert("Out Of Stack")
    }
    return( 
        <div className='d-flex justify-content-betwen'>
            <button className='btn btn-danger px-3' onClick={()=>{if(counter>0){setCounter(counter-1)}else{setCounter(0)}}}>-</button>
            <p className='mx-3'><b>{counter}</b></p>
            <button className='btn btn-primary px-3' onClick={()=>{if(counter<stock){setCounter(1+counter)}}}>+</button>
        </div>
    )
}

export default Count;