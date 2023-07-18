import React, { useState } from "react";
import Logo from "./Logo";

const Header = (props) => {
// const Header = ({data}) => (Fetching direct to value not object)
    console.log(props)
    const [location, setLocation] = useState('Jakarta')

    return (
        <div>
            <Logo compName={props.compName} location={location} />
            <h1>This is Header</h1>
            <p>{props.login ? 'login' : 'please log in'} login by {props.data}</p>
        </div>
    )
}

export default Header