import React from 'react';
import GifCard from './components/GifCard';
import SearchField from './components/SearchField';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GIPHY</h1>
      </header>
      <SearchField/>
      <GifCard/>
    </div>
  );
}

export default App;
