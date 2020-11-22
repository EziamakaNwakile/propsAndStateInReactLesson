import React from "react"
import './App.css';
import CardList from "./components/CardList";
import {friends} from "./components/array";

class App extends React.Component {

  state = {
    friends: friends,
    searchInput: ""
  }

  handleChange = (e) => {
    this.setState({
      searchInput: e.target.value
    }, () => console.log("InputTest", this.state.searchInput))

    
  }

  render() {
    const filteredFriends = this.state.friends.filter(friend => {
      return friend.name.toLowerCase().includes(this.state.searchInput)
    })

    return (
      <div>
      <input type="text" id="searchInput" onChange={this.handleChange}/>
        <CardList myFriends={filteredFriends} />
      </div>
    );
  }
}



export default App;



