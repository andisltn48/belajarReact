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
            <Fragment>
                <Navbar />
            </Fragment>
        )
    }
}


export default Home;