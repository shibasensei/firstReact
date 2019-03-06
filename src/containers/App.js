import React, { Component } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import  './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'

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
    const {robots, searchBox} = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchBox.toLowerCase());
    });
    if(!robots.length){
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
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
