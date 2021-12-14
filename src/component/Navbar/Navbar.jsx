import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Post from "../../container/Post/Post";
import Total from "../../container/Total/Total";
import YoutubeComponent from "../YoutubeComponent/YoutubeComponent";

const Navbar = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link to="/" className="nav-link">Consume API</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/yt-component" className="nav-link">Youtube Component</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/counter" className="nav-link">Counter</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Post />} />
                    <Route path="/yt-component" element={<YoutubeComponent />} />
                    <Route path="/counter" element={<Total />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default Navbar;