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
        this.getPostAPI();
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts')
        .then((res) => {
            console.log(res);
            this.setState({
                post: res.data
            })
        })
    }

    handleRemove = (data) => {
        console.log(data);
        axios.delete(`http://localhost:3004/posts/${data}`)
        .then((res) => {
            this.getPostAPI();
        })
    }

    render(){
        return(
            <Fragment>
                <p>Post With API</p>
                {
                    this.state.post.map(post => {
                        return <ItemPost key={post.id} data={post} remove={this.handleRemove}/>
                    })
                }
            </Fragment>
        )
    }
}

export default Post;