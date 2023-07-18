import React from "react";

const Header = (props) => {
// const Header = ({data}) => (Fetching direct to value not object)
    console.log(props)

    return (
        <div>
            <h1>This is Header</h1>
            <p>login by {props.data}</p>
            <p>{props.login ? 'login' : 'please log in'}</p>
        </div>
    )
}

export default Header