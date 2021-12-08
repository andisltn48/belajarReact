import React, {Fragment} from "react";

const ItemPost = (props) => {
    return(
        <Fragment>
        <div className="card m-3">
            <div className="title"><p className="fw-bold">Title: </p>{props.data.title}</div>
            <div className="body"><p className="fw-bold">Body: </p>{props.data.body}</div>
            <button className="btn btn-danger" onClick={() => props.remove(props.data.id)}>Hapus</button>
        </div>
        </Fragment>
    )
}

export default ItemPost;