import React, {Component, Fragment} from "react";
import ItemPost from "../../component/ItemPost/ItemPost";
import axios from "axios";

class Post extends Component{
    state = {
        post: [],
        formPost: {
            id:1,
            title:'',
            body:'',
            userId:1
        } 
    }

    componentDidMount(){
        this.getPostAPI();
    }

    handleFormChange = (event) => {
        let time = new Date().getTime();
        let formPostNew = {...this.state.formPost};
        formPostNew[event.target.name] = event.target.value;
        formPostNew['id'] = time;
        this.setState({
            formPost: formPostNew
        });
    }

    handleSubmit = () => {
        let time = new Date().getTime();
        let formPostNew = {...this.state.formPost};
        formPostNew['id'] = time;
        this.setState({
            formPost: formPostNew
        });

        axios.post('http://localhost:3004/posts', this.state.formPost)
        .then((res) => {
            console.log(res);
            this.getPostAPI();
            document.getElementById("title").value='';
            document.getElementById("body").value='';
        });
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
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
                <p>Consume API</p>
                <form >
                    <div className="form-group">
                        <label htmlFor="">Title</label>
                        <input className="form-control" type="text" name="title" id="title" onChange={this.handleFormChange}/>
                    </div>
                    <div className="form-group">
                        <label  htmlFor="">Body</label>
                        <textarea className="form-control" name="body" id="body" cols="30" rows="10" onChange={this.handleFormChange}></textarea>  
                    </div>
                    <button className="btn btn-primary" type="button" onClick={this.handleSubmit}>Simpan</button>
                </form>
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