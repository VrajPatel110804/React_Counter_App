import React, {Component} from "react";

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message : "Welcome to CHARUSAT!!"
        }
    }
    changeMsg(){
        this.setState({
            message: "Thank You"
        })
    }
    render(){
        return(
            <div>
                <button onClick={() => this.changeMsg()}>Click</button>
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}


export default Message