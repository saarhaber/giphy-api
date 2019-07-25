import React from 'react';
import axios from 'axios';

function SearchField(){
    return(
        <div>
            <br></br>
            <h3>Gif to search: </h3>
            <input type="text" name="term" onChange={this.handleChange}/>
            <button onClick={this.search}>Search</button>
        </div>
    )
}

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            term: "",
            data: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    async handleChange (event) {
        this.setState({[event.target.name]: event.target.value})
      }
    
    search = async () => {
        this.setState({name: this.state.value})
        const term = this.state.term
        const { data } = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=y3zEaYP52BqWYQfTg35w1xbmVIhvpqOX`)
        this.setState({data: data})
        };

    render(){

    return (
        <div></div>
    );

    }


} 


export default SearchField;
