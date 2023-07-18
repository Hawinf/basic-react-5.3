import React from "react";

const Card = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.price}</p>
        </div>
    )
};

export default Card