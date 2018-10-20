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
    console.log(this.props.uid);

  }

  render() {
    console.log("Dashboard Chala")
    return (
      <div>
        <img width="750px" src="https://i.ytimg.com/vi/gSLIdT4EBlw/maxresdefault.jpg"/>
      </div>
    );
  }
}

export default Dashboard;
