import React, { Component } from "react";
import YoutubeComponent from "../../component/YoutubeComponent/YoutubeComponent";

class Home extends Component {
    render() {
        return (
            <div className="d-flex">
                <YoutubeComponent title="Vid 1" desc="ini vid 1"/>
                <YoutubeComponent title="Vid 2" desc="ini vid 2"/>
                <YoutubeComponent />
                <YoutubeComponent />
                <YoutubeComponent/>
            </div>
        )
    }
}


export default Home;