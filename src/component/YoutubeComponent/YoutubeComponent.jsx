import React from "react";
import './YoutubeComponent.css'

const YoutubeComponent = (props) => {
    return (
        <div className="card card-youtube  m-2">
            <div className="image-tumb">
                <img src="https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_960_720.jpg" alt="" />
            </div>
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

YoutubeComponent.defaultProps = {
    title: 'Title Here',
    desc: 'Description Here'
}
export default YoutubeComponent;