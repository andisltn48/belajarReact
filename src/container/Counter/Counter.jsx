import React, { Component, Fragment } from "react";

class Counter extends Component {
    state = {
        count:0
    }

    handleCounterChange = (value) => {
        this.props.onCounterChange(value)
    }

    handlePlus = () => {
        this.setState({
            count: this.state.count + 1
        }, () => {
            this.handleCounterChange(this.state.count)
        })
    } 

    handleMinus = () => {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            }, () => {
                this.handleCounterChange(this.state.count)
            })
        }
    } 

    render(){
        return(
            <Fragment>
                <div>
                    <div className="row">
                        <button onClick={this.handlePlus} >+</button>
                        <button onClick={this.handleMinus} >-</button>
                    </div>
                    <div>
                        <p>Jumlah press: {this.state.count}</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Counter;