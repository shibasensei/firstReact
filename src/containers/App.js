import React, { Component } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import  './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import {setSearchField} from '../actions';
import {connect} from 'react-redux';

const mapStateToProps = state =>{
  return state.searchRobots.searchBox;
}
const mapDispatchToProps = (dispatch) =>{
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  }
}

class App extends Component {
  constructor(){
     super()
    this.state = {
        robots:[],
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=> this.setState({robots:users}));
  }

  render() {
    const {robots} = this.state;
    const {searchBox, onSearchChange} = this.props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchBox.toLowerCase());
    });
    if(!robots.length){
      return(
          <div className='tc'>
          <h1>my lil homies</h1>
          <SearchBox searchChange={onSearchChange}/>
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

export default connect(mapStateToProps,mapDispatchToProps)(App);
