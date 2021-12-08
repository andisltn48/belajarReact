import React, {Component} from "react";

class LifeCycleComp extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 1,
            maxcount: 5
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log( nextState);
        if (nextState.count > this.state.maxcount) {
            return false;
        }
        return true;
    }

    onChangeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return(
            <div>
                <p>Maks count : {this.state.maxcount}</p>
                <button className="btn btn-primary" onClick={this.onChangeCount} >Component Button : {this.state.count}</button>
            </div>
        )
    }
}

export default LifeCycleComp;