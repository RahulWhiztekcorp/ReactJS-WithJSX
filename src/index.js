import React from "react";
import ReactDOM from "react-dom/client";
import App from './components/App'
//import Count from './components/Count'
import 'bootstrap/dist/css/bootstrap.css';
import '../src/index.css'

// below import at the declaration of the person;
// import {person} from './components/App'
//import {Create} from './components/Create'
// below import at end of default export of the person;
//import person from './components/App'

let root = ReactDOM.createRoot(document.getElementById('root'));
// function Header(){
//   let menus =['Home','About','Contact Us'];
//   return(
//   <header>
//     <ul>
//       <li>{menus[0]}</li>
//       <li>{menus[1]}</li>
//       <li>{menus[2]}</li>
//     </ul>
//   </header>
//   )
// }
// class Header extends React.Component{
//   render(){
//     let menus =['Home','About','Contact Us'];
//     console.log(person);
//     return(
//     <header>
//       <ul>
//         <li>{menus[0]}</li>
//         <li>{menus[1]}</li>
//         <li>{menus[2]}</li>
//       </ul>
//     </header>
//     )}
// }
root.render(
//  <Create/>
//<App/>
 <>
 <App> 
    This is App Component
    <button>Like</button>
    <button>Share</button>
    <button>Subscribe</button>
 </App>
 {/* <Count/> */}
 </>
);

//export default Header;