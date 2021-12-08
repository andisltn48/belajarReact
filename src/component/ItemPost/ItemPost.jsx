import React, {Fragment} from "react";

const ItemPost = (props) => {
    return(
        <Fragment>
        <div className="card m-3">
            <div className="title"><p className="fw-bold">Title: </p>{props.title}</div>
            <div className="body"><p className="fw-bold">Body: </p>{props.body}</div>
        </div>
        </Fragment>
    )
}

export default ItemPost;