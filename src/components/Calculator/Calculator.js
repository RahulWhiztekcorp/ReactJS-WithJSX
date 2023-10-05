import React, { useState } from 'react'
import Keypad from './Keypad';
import './Calculator.css'

const Calculator = () => {
  let [input,setInput] =useState("");
  function handleClick(value){
    setInput(input+value)
  }
  function calculate(){
    setInput(eval(input));
  }
  function handleClear(){
    setInput("");
  } 
  return (
    <div className='container'>
        <h1>Calculator App using react</h1>
        <div className='caculator'>
            <input type='text' placeholder="Search..." value={input} className='output'  defaultValue="Search..."/>
            <Keypad handleClick={handleClick} handleClear={handleClear} calculate={calculate}></Keypad>
        </div>
    </div>
  )
}

export default Calculator;