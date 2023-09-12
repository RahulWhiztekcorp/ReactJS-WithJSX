// import React from 'react'

// function Product(p){
//   return (
//         <div>
//             <h2>Id : {p.id}</h2>
//             <h2>Name : {p.name}</h2>
//             <h2>Actual Price : {p.aprice}</h2>
//             <h2>Offer Price : {p.pprice}</h2>
//         </div>
//     )
// }

// export default Product

import React from 'react'

function Product({id,name}){
  return (
        <div style={{background:"pink",padding:20}}>
            <h2>Id : {id}</h2>
            <h2>Name : {name}</h2>
            {/* <h2>Actual Price : {p.aprice}</h2>
            <h2>Offer Price : {p.pprice}</h2> */}
        </div>
    )
}

export default Product