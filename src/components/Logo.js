import React from "react";

const Logo = (props) => {
    console.log(props, 'This is Logo page')

    return(
        <div>
            <h1><i>{props.compName}</i></h1>
            <p>{props.location}</p>
        </div>
    )
}

export default Logo