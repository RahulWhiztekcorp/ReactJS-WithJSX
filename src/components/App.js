// import './App.css'
// import '../index.css'
// //import User from './User'
 import React, { useState } from 'react'
 //import Product from './Product';
 import Todo from './Todo';

// export default function App(props) {
//     let [counter,updateCounter] =  useState(0);
//     //console.log(props);
//     //    let s1={
//     //         background: 'green',
//     //         color:'white'
//     //     }
//     //     let users=[{
//     //         id:1,
//     //         name:'john' ,
//     //         age:'18' ,
//     //         address:'HYD'
//     //     },{
//     //         id:2,
//     //         name:'Rahul' ,
//     //         age:'22' ,
//     //         address:'HYD'
//     //     },{
//     //         id:3,
//     //         name:'Venkatesh' ,
//     //         age:'24' ,
//     //         address:'SRCL'
//     //     }];
//     // const count = document.getElementById("count");
//     // totalUpdate();
//     // function totalUpdate(){
//     //     fetch("https://api.countapi.xyz/hit/swapnilsparsh/?amount=1")
//     //     .then((res)=>res.json())
//     //     .then((res)=>{
//     //         count.innerHTML=res.value;
//     //         alert(res.value);
//     //     })
//     // }
//     // function diplayMessage(num) {
//     //     alert("Your Entered No is : " + num);
//     // }
//     // function diplayMessage2In(num, e) {
//         // alert("Your Entered No is : "+num);
//         // console.log(e);
//         // console.dir(e.target);
//     //     console.dir(e.target.value);
//     // }
//     return (
//         <>
//             {/* <h1 style={s1}>This is heading</h1>
//         <h1 className='heading'>This is heading</h1>
//         <p>This is paragraph</p>
//         {
//             users.map(
//                 (u)=>{
//                  return <User key={u.id} users={u}/>
//                 })
//         }
//         <p style={{display:'flex',gap:20}}>{props.children}</p> */}
//             {/* 

//         <div>
//             Showing extra div inside this below 2 div's
//             <div>this is div1</div>
//             <div>this is div2</div>
//         </div> 
//         */}
//             {/* <React.Fragment >
//             Now we can see the only 2 div's in inspect
//             <div>this is div1</div>
//             <div>this is div2</div>
//             <div style={{'display':'flex',gap:20}}>
//                 <FlexItems/>
//             </div>
//         </React.Fragment>
//         <h1 id="count">0</h1> */}
//             {/* <div style={{ display: 'flex', gap: 10 }}>
//                 <button onClick={alert("Atomatic excecuted alert")}>Atomatic Click</button>
//                 <button onClick={() => { alert("Hello World!"); }}>Click</button>
//                 <button onClick={() => { diplayMessage(999) }}>Click</button>
//                 <button onClick={(e) => { diplayMessage2In(999, e) }}>Click</button>
//                 <input type='text' onChange={(e) => { diplayMessage2In(10, e) }} />
//             </div> */}
//             <h1>Counter Value : {counter}</h1>
//             <button onClick={()=>{
//                 updateCounter(++counter)
//             }}>Change</button>
//         </>
//     )

//     //state -> class component
//     //useState -> funtional component
//     // import named funtions like {} brses 
//     // import {useState} from 'react
//     // 

// }
// // function FlexItems(){
// //     return(
// //         <>
// //             <div style={{background:'grey',color:'white',padding:10,border:'3px dashed skyblue'}}>This is div1</div>
// //             <div style={{background:'grey',color:'white',padding:10,border:'3px dashed skyblue'}}>This is div2</div>
// //             <div style={{background:'grey',color:'white',padding:10,border:'3px dashed skyblue'}}>This is div3</div>
// //         </>
// //     );
// // }
// //export default App;


// // function myFunction() {
// //     var x = document.getElementById("myInput");
// //     if (x.type === "password") {
// //       x.type = "text";
// //     } else {
// //       x.type = "password";
// //     }
// //   }
// //   Password: <input type="password" id="myInput" />
// //   <input type="checkbox" onClick={myFunction} id='mycheck'/>
// //   <label htmlFor='mycheck'>Show Password</label>

// // export let person ={
// //     name:'Rahul',
// //     age:22,
// //     location:'TS'
// // }
// // export let x =100;
// // import {person} from './components/App'
// //export default person;
// // import person from './components/App'






// // {
// //     users.map((u)=>{
// //         return <User users={u}/>
// //     })
// // }

// import React from 'react'

// class App extends React.Component {
//     state = {
//         counter : 0
//     }
//     render() {
//         return (
//             <>
//                 <h1>Counter Value : {this.state.counter}</h1>
//                 <button onClick={()=>{
//                     this.setState({
//                         counter:++this.state.counter
//                     })
//                 }}>Change</button>
//             </>)
//     }
// }
// export default App;

// import React from 'react'
// import './App.css'


// class App extends React.Component {
//     constructor() {
//         super();
//         this.updateState = this.updateState.bind(this)
//     }
//     state = {
//         product: 'Realme 8 Pro',
//         price: 20000
//     }
//     updateState() {
//         let p = document.getElementById('price').value
//         let pn = document.getElementById('productname').value
//         debugger
//         if (p === "" && pn === "") {
//             alert('Please Fill Product Details')
//         } else if (p === "") {
//             alert('Please Fill Product Price')
//         } else if (pn === "") {
//             alert('Please Fill Product Name')
//         } else {
//             this.setState({
//                 price: p,
//                 product: pn
//             })
//             document.getElementById('productname').value = ""
//             document.getElementById('price').value = ""
//         }
//     }
//     render() {
//         return (
//             <>
                // <div className='container bg-light p-3'>
                //     <div>
                //         <h1>Product : <b >{this.state.product}</b></h1>
                //         <h1>Price : <b>{this.state.price}</b></h1>
                //     </div>
                //     <div className='w-25'>
                //         <div className='center'>
                //             <label>Product Name : </label>
                //             <input type='text' className='form-control ' id='productname' />
                //             <label>Product Price : </label>
                //             <input type='number' className='form-control ' id='price' />
                //         </div>
                //         <div className='mt-2'>
                //             <button className='btn btn-primary' onClick={this.updateState}>Update</button>
                //             <button className='btn btn-danger mx-1' onClick={() => {
                //                 document.getElementById('productname').value = ""
                //                 document.getElementById('price').value = ""
                //             }}>Reset</button>
                //         </div>
                //     </div>
                // </div>
//             </>
//         )
//     }
// }
// export default App;

// import React,{useState} from 'react'

// function App() {
//     //let [price,updatePrice] = useState(18000);
//     //let [productname,updateName] = useState("Real me 8 Pro");
    
//     let [product,setProduct] = useState({
//         productName:"Realme 10 Pro",
//         price:10000
//     })
//     return (
//         <>
//             <div className='container bg-light p-3'>
//                 <div>
//                     <h1>Product : <b >{product.productName}</b></h1>
//                     <h1>Price : <b>{product.price}</b></h1>
//                     <h1>Product : {JSON.stringify(product)}</h1>
//                 </div>
//                 <div className='w-25'>
//                     <div className='center'>
//                         <label>Product Name : </label>
//                         <input type='text' className='form-control ' id='productname' />
//                         <label>Product Price : </label>
//                         <input type='number' className='form-control ' id='price' />
//                     </div>
//                     <div className='mt-2'>
//                         <button className='btn btn-primary' onClick={()=>{
//                             let pname = document.getElementById('productname').value;
//                             let price = document.getElementById('price').value;
//                             if(pname===""&&price===""){
//                                 alert('Please Fill Product Details')
//                             }else if(price===""){
//                                 alert('Please Fill Product Price')
//                             }else if(pname===""){
//                                 alert('Please Fill Product Name')
//                             } else {
//                                 setProduct({
//                                     productName: pname,
//                                     price: price
//                                 })
//                             }
//                         }}>Update</button>
//                         <button className='btn btn-danger mx-1' onClick={() => {
//                             document.getElementById('productname').value = ""
//                             document.getElementById('price').value = ""
//                         }}>Reset</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default App;


function App(){
//  let [counter,updateCounter] =  useState(0);
  // let prod ={
  //   id:1,
  //   name:"Redmi Note 8",
  //   aprice:12000,
  //   pprice:10000
  // }
  return(
	<>
	  {/* <h1>Counter Value : {counter}</h1>
            <button onClick={()=>{
                updateCounter(++counter)
            }}>Change</button> */}
    {/* <Product id={prod.id} name={prod.name} aprice={prod.aprice} pprice={prod.pprice} /> */}
    {/* <Product  {...prod} /> */}
    <Todo/>
	</>)
}
export default App;
