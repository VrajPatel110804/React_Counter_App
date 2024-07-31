import React,{Component} from "react";
class Counter extends Component{
    constructor(){
        super()
        this.state={
            count : 0
        }
    }

    increment(){
        this.setState({
            count:this.state.count+1
        },()=>console.log("Callback is "+this.state.count))
        console.log(this.state.count)
    }

    render(){
        return (
            <div>
                <h1>count: {this.state.count}</h1>
                <button onClick={()=> this.increment()}>Click</button>
            </div>
        )
    }
}

export default Counter