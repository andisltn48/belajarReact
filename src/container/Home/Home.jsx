import React, { Component } from "react";
import YoutubeComponent from "../../component/YoutubeComponent/YoutubeComponent";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import Total from "../Total/Total";

class Home extends Component {
    render() {
        return (
            <div >
                {/* <p>YT Component</p>
                <hr />
                <div className="d-flex">
                    <YoutubeComponent title="Vid 1" desc="ini vid 1"/>
                    <YoutubeComponent title="Vid 2" desc="ini vid 2"/>
                    <YoutubeComponent />
                    <YoutubeComponent />
                    <YoutubeComponent/>
                </div>
                <div>
                    <Total/>
                </div> */}
                <div>
                    <LifeCycleComp />
                </div>
            </div>
        )
    }
}


export default Home;