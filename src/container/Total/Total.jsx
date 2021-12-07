import React, { Component, Fragment } from "react";
import Counter from "../Counter/Counter";

class Total extends Component {
    state = {
        count:0
    }

    handleCounterChange = (newValue) => {
        this.setState({
            count: newValue
        })
    }

    render(){
        return(
            <Fragment>
                <div>
                    <div>
                        <p>Current press: {this.state.count}</p>
                    </div>
                    <Counter onCounterChange={(value) => this.handleCounterChange(value)}/>
                </div>
            </Fragment>
        )
    }
}

export default Total;