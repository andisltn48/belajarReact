import React, {Component, Fragment} from "react";
import ItemPost from "../../component/ItemPost/ItemPost";
import axios from "axios";

class Post extends Component{
    state = {
        post: []
    }

    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })
        axios.get('http://localhost:3004/posts')
        .then((res) => {
            console.log(res);
            this.setState({
                post: res.data
            })
        })
    }

    render(){
        return(
            <Fragment>
                <p>Post With API</p>
                {
                    this.state.post.map(post => {
                        return <ItemPost key={post.id} title={post.title} body={post.body}  />
                    })
                }
            </Fragment>
        )
    }
}

export default Post;