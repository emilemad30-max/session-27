import { Component } from "react";
import "./Class.css"
class Class extends Component{
    constructor(){
        super()
        this.state={
            count:0,
            dec:0
        }
    }
    Increment=()=>{
        this.setState({count:this.state.count+1})
    }
     Decrement=()=>{
        this.setState({dec:this.state.dec-1})
    }
     Reset=()=>{
        this.setState({count:0,dec:0})
    }
    render(){
        return(
            <>
            <div className="parent">
                <div className="ch1">
                    <button onClick={this.Increment} className="bg-success rounded-3 color">Increment</button>
                    <p className="">{this.state.count}</p>
                </div>
                <div className="ch2">
                    <button onClick={this.Decrement} className="bg-secondary rounded-3">Decrement</button>
                    <p className="">{this.state.dec}</p>
                    
                </div>
                <button onClick={this.Reset} className="bg-danger  rounded-3">Reset</button>
            </div> 
            </>
        )
    }
}   
export default Class