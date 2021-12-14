import React, { Component, Fragment } from "react";
import YoutubeComponent from "../../component/YoutubeComponent/YoutubeComponent";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import Total from "../Total/Total";
import Counter from "../Counter/Counter";
import Navbar from "../../component/Navbar/Navbar";

class Home extends Component {
    render() {
        return (
            // <div >
            //     {/* <p>YT Component</p>
            //     <hr />
            //     <div className="d-flex">
            //         <YoutubeComponent title="Vid 1" desc="ini vid 1"/>
            //         <YoutubeComponent title="Vid 2" desc="ini vid 2"/>
            //         <YoutubeComponent />
            //         <YoutubeComponent />
            //         <YoutubeComponent/>
            //     </div>
            //     <div>
            //         <Total/>
            //     </div> */}
            //     {/* <div>
            //         <LifeCycleComp />
            //     </div> */}
            //     <Post />
            // </div>
            <Fragment>
                <Navbar />
            </Fragment>
        )
    }
}


export default Home;