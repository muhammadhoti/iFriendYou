import React, { Component } from 'react';
import './Dashboard.css';

class Dashboard extends Component {

  constructor(props){
    super(props)
    this.state={
        uid : this.props.uid
    }
  }

  componentDidMount(){
    const {uid} = this.state;
    fetch(`https://i-friend-you.firebaseio.com/users/${uid}.json`)
    .then(data => {
        return data.json();
    })
    .then(data2 => {
        console.log(data2);
    })
  }

  render() {
    return (
      <div>
        <h1 className="check">From This Page Site Is Under Construction</h1>
      </div>
    );
  }
}

export default Dashboard;
