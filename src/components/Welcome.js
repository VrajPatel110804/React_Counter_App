import React, {Component} from "react";

class Welcome extends Component{
    render(){
        return(
            <div>
                <h1>Welcome - Class {this.props.deptName}</h1>
            </div>
        )
    }
}

export default Welcome