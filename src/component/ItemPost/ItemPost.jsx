import React, {Fragment} from "react";

const ItemPost = (props) => {
    return(
        <Fragment>
        <div className="card m-3">
            <div className="title"><p className="fw-bold">Title: </p>{props.data.title}</div>
            <div className="body"><p className="fw-bold">Body: </p>{props.data.body}</div>
            <div className="d-flex">
            <button className="btn btn-danger col m-2" onClick={() => props.remove(props.data.id)}>Hapus</button>
            <button className="btn btn-warning col m-2" onClick={() => props.update(props.data)}>Edit</button>
            </div>
        </div>
        </Fragment>
    )
}

export default ItemPost;