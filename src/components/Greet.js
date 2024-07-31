// import React from 'react';

// function Greet(){
//     return <h1>Welcome to CHARUSAT</h1>
// }

// const Greet = () => <h1>Welcome to CHARUSAT</h1>

import React from "react";

const Greet = (props) =>{
    console.log(props)
    return(
        <div>
            <h1>Welcome - function - {props.deptName}</h1>
            {props.children}
        </div>
    )
        
}


export default Greet