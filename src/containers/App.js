import React, { Component } from 'react';

import CardList from '../containers/CardList';
import SearchBox from '../containers/SearchBox';
import  './App.css';
import Scroll from '../containers/Scroll';

class App extends Component {
  constructor(){
     super()
    this.state = {
        robots:[],
        searchBox:'',
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=> this.setState({robots:users}));
  }

  onSearchChange = (event) => {
    this.setState({searchBox: event.target.value});
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchBox.toLowerCase());
    });
    if(this.state.robots.length === 0){
      return(
          <div className='tc'>
          <h1>my lil homies</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <h1>Loading robots...</h1>
        </div>
      );
    }else{
      return (
        <div className='tc'>
          <h1>my lil homies</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
