import React from 'react'

// Class Component
class User extends React.Component{
    render(){
        console.log(this.props.users);
        return(
           <>
             <div style={{background:'pink',paddingLeft:20 , margin:10 , width:300,border:'2px solid grey'}}>
                <h1>Name : {this.props.users.name}</h1>
                <h1>Age : {this.props.users.age}</h1>
                <h1>Address : {this.props.users.address}</h1>
             </div>
           </>
        )
    }
}

export default User;
// functinal component

// function User(p){
//     console.log(p);
//     return(
//         <div>
//             <h1>Name : {p.user.name}</h1>
//             <h1>Age : {p.user.age}</h1>
//             <h1>Address : {p.address}</h1>
//         </div>
//     );
// }
// export default User;
