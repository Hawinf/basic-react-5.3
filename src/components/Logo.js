import React from "react";

const Logo = (props) => {
    console.log(props, 'This is Logo')

    return(
        <div>
            <h1><i>{props.compName}</i></h1>
        </div>
    )
}

export default Logo