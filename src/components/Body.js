import React from "react";
import Card from "./Card";

const Body = (props) => {
    console.log(props, 'this is body page')

    return (
        <div>
            {props.product.map((item) => (
                <Card name={item.name} price={item.price} />  
            ))}
        </div>
    )
}

export default Body;


// The Other way to do mapping
// {props.product.map((item) => {
//     return (
//         <div>
//             <h1>{props.name}</h1>
//             <p>{props.price}</p>
//         </div>
//     )
// })}