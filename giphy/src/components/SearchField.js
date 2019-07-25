import React from 'react';
import GifCard from './GifCard';

class SearchField extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            term: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }

    async handleChange (event) {
        this.setState({[event.target.name]: event.target.value})
      }

    render(){        

    return (
        <div>
             <br></br>
            <h3>Gif to search: </h3>
            <input type="text" name="term" onChange={this.handleChange}/>
            <button onClick={() => this.props.search(this.state.term)}>Search</button>
            <button onClick={this.props.random}>Random</button>
            <button onClick={this.props.trend}>Trending</button>
        </div>
    );
    }
} 
export default SearchField;
