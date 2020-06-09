import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addRestaurant } from './actions/restaurants';
import RestaurantInput from './components/RestaurantInput';
import Restaurants from './components/Restaurants';

export class App extends Component {
  
  handleClick = ev => {
    ev.preventDefault()
    this.props.addRestaurant()
  }
  render() {
    return (
      <div className="App">
        <RestaurantInput />
<<<<<<< HEAD
        <button onClick={this.handleClick}>Add Restaurant</button>
=======
        <button onClick={handleClick}>Add Restaurant</button>
>>>>>>> 47efe72b696ae163e2d902e755c3980de78910d4
        <Restaurants />
        <p>{this.props.restaurants.length}</p>
      </div>
    );
  }
};
const mapStateToProps = state => {
  return {restaurant: state.restaurant}
}

const mapDispatchToProps = dispatch => {
  return {addRestaurant: () => {dispatch(addRestaurant())}}
}

<<<<<<< HEAD
export default connect(mapStateToProps, mapDispatchToProps)(App);
=======
const mapDispatchToProps = dispatch => {
  return {addRestaurant: () => {dispatch(addRestaurant())}}
}

export connect(mapDispatchToProps)(App);
>>>>>>> 47efe72b696ae163e2d902e755c3980de78910d4
