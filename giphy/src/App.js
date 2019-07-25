import React from 'react';
import GifCard from './components/GifCard';
import SearchField from './components/SearchField';
import './App.css';
import axios from 'axios';


class App extends React.Component {
  constructor(props){
      super(props)
      this.state = {
          data: [],
      }
    }

    search = async (term) => {
      const { data } = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=y3zEaYP52BqWYQfTg35w1xbmVIhvpqOX`)
      this.setState({data: data.data})
      };

      random = async () => {
        const { data } = await axios.get(`http://api.giphy.com/v1/gifs/random?api_key=y3zEaYP52BqWYQfTg35w1xbmVIhvpqOX`)
        this.setState({data: [data.data]})
        };

        trend = async () => {
          const { data } = await axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=y3zEaYP52BqWYQfTg35w1xbmVIhvpqOX`)
          this.setState({data: data.data})
          };

    render(){


      return(
        <div className="App">
         <header className="App-header">
           <h1>GIPHY</h1>
         </header>
          <SearchField search={this.search} random={this.random} trend={this.trend}/>
          {this.state.data.map((data, idx) => {
            return <GifCard key={idx} gif={data.images.original.url} />
            })}
        </div>
      );
    }
}

export default App;
